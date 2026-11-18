#!/usr/bin/env node
/**
 * Gallery Image & Video Sequential Renamer
 * 
 * Safely renames gallery assets to img-1, img-2, ..., img-N (and video-1, video-2, ...),
 * detects and stashes byte-for-byte duplicate copies in a .duplicates folder,
 * and generates a gallery-manifest.json for traceability.
 * 
 * Usage:
 *   node scripts/rename-gallery.mjs
 *   node scripts/rename-gallery.mjs --dry-run
 *   node scripts/rename-gallery.mjs --dir public/images/gallery --prefix img-
 */

import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

// Command line argument parser
const args = process.argv.slice(2);
const isDryRun = args.includes('--dry-run');
const keepDuplicates = args.includes('--keep-duplicates');
const deleteDuplicates = args.includes('--delete-duplicates');

function getArgValue(flag, defaultValue) {
  const index = args.indexOf(flag);
  if (index !== -1 && index + 1 < args.length) {
    return args[index + 1];
  }
  return defaultValue;
}

const customDir = getArgValue('--dir', null);
const imgPrefix = getArgValue('--prefix', 'img-');
const videoPrefix = getArgValue('--video-prefix', 'video-');

// Resolve target directory
let targetDir = customDir
  ? path.resolve(projectRoot, customDir)
  : path.resolve(projectRoot, 'public/images/gallery');

if (!fs.existsSync(targetDir)) {
  const fallbackDir = path.resolve(projectRoot, 'public/gallery');
  if (fs.existsSync(fallbackDir)) {
    targetDir = fallbackDir;
  } else {
    console.error(`Error: Gallery directory not found at ${targetDir}`);
    process.exit(1);
  }
}

// Natural sort comparison for filenames with numbers
function naturalCompare(a, b) {
  const ax = [];
  const bx = [];
  a.replace(/(\d+)|(\D+)/g, (_, $1, $2) => {
    ax.push([$1 || Infinity, $2 || '']);
  });
  b.replace(/(\d+)|(\D+)/g, (_, $1, $2) => {
    bx.push([$1 || Infinity, $2 || '']);
  });
  while (ax.length && bx.length) {
    const an = ax.shift();
    const bn = bx.shift();
    const nn = an[0] - bn[0] || an[1].localeCompare(bn[1]);
    if (nn) return nn;
  }
  return ax.length - bx.length;
}

// Calculate MD5 hash of a file
function getFileHash(filePath) {
  const fileBuffer = fs.readFileSync(filePath);
  const hashSum = crypto.createHash('md5');
  hashSum.update(fileBuffer);
  return hashSum.digest('hex');
}

async function run() {
  console.log(`\n=== Latin King Detailing - Gallery Asset Renamer ===`);
  console.log(`Directory: ${targetDir}`);
  console.log(`Mode:      ${isDryRun ? 'DRY-RUN (no files will be changed)' : 'LIVE EXECUTION'}`);
  console.log(`Prefix:    ${imgPrefix}[1..N]\n`);

  const dirents = fs.readdirSync(targetDir, { withFileTypes: true });
  const allFiles = dirents
    .filter((d) => d.isFile() && !d.name.startsWith('.') && d.name !== 'gallery-manifest.json')
    .map((d) => d.name)
    .sort(naturalCompare);

  if (allFiles.length === 0) {
    console.log('No asset files found in directory.');
    return;
  }

  console.log(`Found ${allFiles.length} total files.`);

  // Supported extensions
  const imageExts = new Set(['.jpeg', '.jpg', '.png', '.webp', '.avif']);
  const videoExts = new Set(['.mp4', '.mov', '.webm']);

  // Deduplication & Categorization
  const seenHashes = new Map();
  const uniqueImages = [];
  const uniqueVideos = [];
  const duplicateFiles = [];

  for (const filename of allFiles) {
    const fullPath = path.join(targetDir, filename);
    const ext = path.extname(filename).toLowerCase();
    const hash = getFileHash(fullPath);

    if (!keepDuplicates && seenHashes.has(hash)) {
      duplicateFiles.push({
        name: filename,
        original: seenHashes.get(hash),
        hash,
        fullPath,
      });
      continue;
    }

    seenHashes.set(hash, filename);

    if (imageExts.has(ext)) {
      uniqueImages.push({ name: filename, ext, hash, fullPath });
    } else if (videoExts.has(ext)) {
      uniqueVideos.push({ name: filename, ext, hash, fullPath });
    } else {
      console.warn(`Skipping unrecognized file type: ${filename}`);
    }
  }

  console.log(`- Unique Images: ${uniqueImages.length}`);
  console.log(`- Unique Videos: ${uniqueVideos.length}`);
  console.log(`- Exact Duplicate Files: ${duplicateFiles.length}`);

  // Handle Duplicates
  const duplicatesDir = path.join(targetDir, '.duplicates');
  if (duplicateFiles.length > 0 && !keepDuplicates) {
    if (deleteDuplicates) {
      console.log(`\nRemoving ${duplicateFiles.length} identical duplicates...`);
      if (!isDryRun) {
        for (const dup of duplicateFiles) {
          fs.unlinkSync(dup.fullPath);
        }
      }
    } else {
      console.log(`\nPreserving ${duplicateFiles.length} identical duplicates in .duplicates/ directory...`);
      if (!isDryRun) {
        if (!fs.existsSync(duplicatesDir)) {
          fs.mkdirSync(duplicatesDir, { recursive: true });
        }
        for (const dup of duplicateFiles) {
          const dest = path.join(duplicatesDir, dup.name);
          fs.renameSync(dup.fullPath, dest);
        }
      }
    }
  }

  const manifest = {
    generatedAt: new Date().toISOString(),
    totalAssets: uniqueImages.length + uniqueVideos.length,
    images: [],
    videos: [],
    duplicatesPreserved: duplicateFiles.length,
  };

  // Safe two-phase renaming for unique images
  console.log(`\nRenaming ${uniqueImages.length} images to ${imgPrefix}1..${uniqueImages.length}...`);
  const stagedImages = [];

  for (let i = 0; i < uniqueImages.length; i++) {
    const item = uniqueImages[i];
    const newName = `${imgPrefix}${i + 1}${item.ext}`;
    const targetPath = path.join(targetDir, newName);

    stagedImages.push({
      oldName: item.name,
      oldPath: item.fullPath,
      tempName: `__temp_img_${i + 1}_${Date.now()}_${item.ext}`,
      newName,
      targetPath,
      hash: item.hash,
    });
  }

  // Safe two-phase renaming for unique videos
  console.log(`Renaming ${uniqueVideos.length} videos to ${videoPrefix}1..${uniqueVideos.length}...`);
  const stagedVideos = [];

  for (let i = 0; i < uniqueVideos.length; i++) {
    const item = uniqueVideos[i];
    const newName = `${videoPrefix}${i + 1}${item.ext}`;
    const targetPath = path.join(targetDir, newName);

    stagedVideos.push({
      oldName: item.name,
      oldPath: item.fullPath,
      tempName: `__temp_vid_${i + 1}_${Date.now()}_${item.ext}`,
      newName,
      targetPath,
      hash: item.hash,
    });
  }

  // Execute renames
  if (!isDryRun) {
    // Phase 1: Rename images & videos to temporary names to prevent collision
    for (const item of stagedImages) {
      const tempPath = path.join(targetDir, item.tempName);
      fs.renameSync(item.oldPath, tempPath);
      item.currentPath = tempPath;
    }
    for (const item of stagedVideos) {
      const tempPath = path.join(targetDir, item.tempName);
      fs.renameSync(item.oldPath, tempPath);
      item.currentPath = tempPath;
    }

    // Phase 2: Rename temporary names to final names
    for (const item of stagedImages) {
      fs.renameSync(item.currentPath, item.targetPath);
      manifest.images.push({
        id: item.newName.replace(path.extname(item.newName), ''),
        filename: item.newName,
        path: `/images/gallery/${item.newName}`,
        originalName: item.oldName,
        md5: item.hash,
      });
    }
    for (const item of stagedVideos) {
      fs.renameSync(item.currentPath, item.targetPath);
      manifest.videos.push({
        id: item.newName.replace(path.extname(item.newName), ''),
        filename: item.newName,
        path: `/images/gallery/${item.newName}`,
        originalName: item.oldName,
        md5: item.hash,
      });
    }

    // Write manifest JSON
    const manifestPath = path.join(targetDir, 'gallery-manifest.json');
    fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), 'utf-8');
    console.log(`Saved manifest to ${manifestPath}`);
  } else {
    // Dry-run preview
    console.log('\n[Dry-run Preview]:');
    for (const item of stagedImages.slice(0, 10)) {
      console.log(`  ${item.oldName}  -->  ${item.newName}`);
    }
    if (stagedImages.length > 10) {
      console.log(`  ... and ${stagedImages.length - 10} more images`);
    }
    for (const item of stagedVideos) {
      console.log(`  ${item.oldName}  -->  ${item.newName}`);
    }
  }

  console.log(`\nSummary:`);
  console.log(`  Successfully processed ${uniqueImages.length} images (${imgPrefix}1${uniqueImages[0]?.ext || '.jpeg'} to ${imgPrefix}${uniqueImages.length}${uniqueImages[0]?.ext || '.jpeg'}).`);
  if (uniqueVideos.length > 0) {
    console.log(`  Successfully processed ${uniqueVideos.length} videos (${videoPrefix}1${uniqueVideos[0]?.ext || '.mp4'} to ${videoPrefix}${uniqueVideos.length}${uniqueVideos[0]?.ext || '.mp4'}).`);
  }
  if (duplicateFiles.length > 0) {
    console.log(`  Safely stashed ${duplicateFiles.length} duplicate copies in .duplicates/`);
  }
  console.log(`Done! ✨\n`);
}

run().catch((err) => {
  console.error('Fatal error during renaming:', err);
  process.exit(1);
});

