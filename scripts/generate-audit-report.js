/* eslint-disable */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const {
  Document,
  Packer,
  Paragraph,
  TextRun,
  Table,
  TableRow,
  TableCell,
  Header,
  Footer,
  AlignmentType,
  HeadingLevel,
  BorderStyle,
  WidthType,
  ShadingType,
  VerticalAlign,
  PageNumber,
  PageBreak,
} = require('docx');

const domain = 'latinkingdetailing.co.uk';
const brandName = 'Latin King Detailing';
const auditDate = '20 November 2026';
const auditType = 'FULL AUDIT';

// Colors
const COLOR_NAVY = '1B2A4A';
const COLOR_ACCENT_BLUE = '2563EB';
const COLOR_SCORE_GREEN = '16A34A';
const COLOR_SCORE_AMBER = 'D97706';
const COLOR_SCORE_RED = 'DC2626';
const COLOR_SCORE_ORANGE = 'EA580C';
const COLOR_LIGHT_GRAY = 'F8F9FA';
const COLOR_BORDER_GRAY = 'CBD5E1';
const COLOR_DARK_TEXT = '1E293B';
const COLOR_MUTED_TEXT = '64748B';
const COLOR_LIGHT_BLUE = 'EFF6FF';
const COLOR_LIGHT_GREEN = 'F0FDF4';

// Helper for cell borders
const cellBorderStandard = {
  top: { style: BorderStyle.SINGLE, size: 4, color: COLOR_BORDER_GRAY },
  bottom: { style: BorderStyle.SINGLE, size: 4, color: COLOR_BORDER_GRAY },
  left: { style: BorderStyle.SINGLE, size: 4, color: COLOR_BORDER_GRAY },
  right: { style: BorderStyle.SINGLE, size: 4, color: COLOR_BORDER_GRAY },
};

const cellBorderNone = {
  top: { style: BorderStyle.NONE },
  bottom: { style: BorderStyle.NONE },
  left: { style: BorderStyle.NONE },
  right: { style: BorderStyle.NONE },
};

function createTableCell(content, options = {}) {
  const {
    width,
    fill = 'FFFFFF',
    borders = cellBorderStandard,
    align = AlignmentType.LEFT,
    vAlign = VerticalAlign.CENTER,
    bold = false,
    color = COLOR_DARK_TEXT,
    fontSize = 10,
    italic = false,
    topMargin = 140,
    bottomMargin = 140,
    leftMargin = 160,
    rightMargin = 160,
  } = options;

  let children = [];
  if (Array.isArray(content)) {
    children = content;
  } else {
    children = [
      new Paragraph({
        alignment: align,
        spacing: { before: 0, after: 0 },
        children: [
          new TextRun({
            text: String(content),
            font: 'Arial',
            size: fontSize * 2,
            bold: bold,
            italics: italic,
            color: color,
          }),
        ],
      }),
    ];
  }

  return new TableCell({
    width: width ? { size: width, type: WidthType.DXA } : undefined,
    shading: fill ? { fill, type: ShadingType.CLEAR } : undefined,
    borders: borders,
    verticalAlign: vAlign,
    margins: {
      top: topMargin,
      bottom: bottomMargin,
      left: leftMargin,
      right: rightMargin,
    },
    children: children,
  });
}

function createHeading1(text) {
  return new Paragraph({
    text: text,
    heading: HeadingLevel.HEADING_1,
    spacing: { before: 400, after: 180 },
    run: {
      font: 'Arial',
      size: 24 * 2,
      bold: true,
      color: COLOR_NAVY,
    },
  });
}

function createHeading2(text) {
  return new Paragraph({
    text: text,
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 260, after: 120 },
    run: {
      font: 'Arial',
      size: 16 * 2,
      bold: true,
      color: COLOR_ACCENT_BLUE,
    },
  });
}

function createHeading3(text) {
  return new Paragraph({
    text: text,
    heading: HeadingLevel.HEADING_3,
    spacing: { before: 200, after: 100 },
    run: {
      font: 'Arial',
      size: 13 * 2,
      bold: true,
      color: COLOR_DARK_TEXT,
    },
  });
}

function createParagraph(text, options = {}) {
  const { bold = false, italic = false, color = COLOR_DARK_TEXT, spaceAfter = 140, spaceBefore = 0 } = options;
  return new Paragraph({
    spacing: { before: spaceBefore, after: spaceAfter, line: 276 },
    children: [
      new TextRun({
        text: text,
        font: 'Arial',
        size: 10.5 * 2,
        bold: bold,
        italics: italic,
        color: color,
      }),
    ],
  });
}

async function buildDocx() {
  const doc = new Document({
    sections: [
      // 1. COVER PAGE (Section 1)
      {
        properties: {
          page: {
            size: { width: 12240, height: 15840 },
            margin: { top: 1440, bottom: 1440, left: 1440, right: 1440 },
          },
        },
        children: [
          new Paragraph({ spacing: { before: 1400 } }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { before: 0, after: 100 },
            children: [
              new TextRun({
                text: domain,
                font: 'Arial',
                size: 34 * 2,
                bold: true,
                color: COLOR_NAVY,
              }),
            ],
          }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { before: 0, after: 120 },
            children: [
              new TextRun({
                text: 'SEO / GEO / AEO Comprehensive Audit Report',
                font: 'Arial',
                size: 18 * 2,
                bold: true,
                color: COLOR_ACCENT_BLUE,
              }),
            ],
          }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { before: 0, after: 600 },
            children: [
              new TextRun({
                text: 'FULL AUDIT · TECHNICAL & GENERATIVE READINESS REPORT',
                font: 'Arial',
                size: 11 * 2,
                bold: true,
                color: COLOR_MUTED_TEXT,
              }),
            ],
          }),

          // Score Table on Cover
          new Table({
            width: { size: 9360, type: WidthType.DXA },
            rows: [
              new TableRow({
                children: [
                  createTableCell(
                    [
                      new Paragraph({
                        alignment: AlignmentType.CENTER,
                        spacing: { before: 180, after: 60 },
                        children: [
                          new TextRun({ text: 'SEO SCORE', font: 'Arial', size: 12 * 2, bold: true, color: 'FFFFFF' }),
                        ],
                      }),
                      new Paragraph({
                        alignment: AlignmentType.CENTER,
                        spacing: { before: 0, after: 60 },
                        children: [
                          new TextRun({ text: '5.2 / 10', font: 'Arial', size: 30 * 2, bold: true, color: 'FFFFFF' }),
                        ],
                      }),
                      new Paragraph({
                        alignment: AlignmentType.CENTER,
                        spacing: { before: 0, after: 180 },
                        children: [
                          new TextRun({ text: 'Needs Attention', font: 'Arial', size: 10 * 2, italics: true, color: 'FFFFFF' }),
                        ],
                      }),
                    ],
                    { width: 3120, fill: COLOR_SCORE_AMBER, borders: cellBorderNone }
                  ),
                  createTableCell(
                    [
                      new Paragraph({
                        alignment: AlignmentType.CENTER,
                        spacing: { before: 180, after: 60 },
                        children: [
                          new TextRun({ text: 'GEO SCORE', font: 'Arial', size: 12 * 2, bold: true, color: 'FFFFFF' }),
                        ],
                      }),
                      new Paragraph({
                        alignment: AlignmentType.CENTER,
                        spacing: { before: 0, after: 60 },
                        children: [
                          new TextRun({ text: '4.4 / 10', font: 'Arial', size: 30 * 2, bold: true, color: 'FFFFFF' }),
                        ],
                      }),
                      new Paragraph({
                        alignment: AlignmentType.CENTER,
                        spacing: { before: 0, after: 180 },
                        children: [
                          new TextRun({ text: 'Below Average', font: 'Arial', size: 10 * 2, italics: true, color: 'FFFFFF' }),
                        ],
                      }),
                    ],
                    { width: 3120, fill: COLOR_SCORE_RED, borders: cellBorderNone }
                  ),
                  createTableCell(
                    [
                      new Paragraph({
                        alignment: AlignmentType.CENTER,
                        spacing: { before: 180, after: 60 },
                        children: [
                          new TextRun({ text: 'AEO SCORE', font: 'Arial', size: 12 * 2, bold: true, color: 'FFFFFF' }),
                        ],
                      }),
                      new Paragraph({
                        alignment: AlignmentType.CENTER,
                        spacing: { before: 0, after: 60 },
                        children: [
                          new TextRun({ text: '4.8 / 10', font: 'Arial', size: 30 * 2, bold: true, color: 'FFFFFF' }),
                        ],
                      }),
                      new Paragraph({
                        alignment: AlignmentType.CENTER,
                        spacing: { before: 0, after: 180 },
                        children: [
                          new TextRun({ text: 'Below Average', font: 'Arial', size: 10 * 2, italics: true, color: 'FFFFFF' }),
                        ],
                      }),
                    ],
                    { width: 3120, fill: COLOR_SCORE_AMBER, borders: cellBorderNone }
                  ),
                ],
              }),
            ],
          }),

          new Paragraph({ spacing: { before: 1800 } }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { before: 0, after: 40 },
            children: [
              new TextRun({
                text: `Audit Date: ${auditDate}`,
                font: 'Arial',
                size: 9.5 * 2,
                color: COLOR_MUTED_TEXT,
              }),
            ],
          }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { before: 0, after: 0 },
            children: [
              new TextRun({
                text: 'Prepared using the Antigravity SEO-GEO-AEO Autonomous Audit Suite',
                font: 'Arial',
                size: 9 * 2,
                color: COLOR_MUTED_TEXT,
              }),
            ],
          }),
        ],
      },

      // 2. MAIN REPORT BODY (Section 2 with Header & Footer)
      {
        properties: {
          page: {
            size: { width: 12240, height: 15840 },
            margin: { top: 1440, bottom: 1440, left: 1440, right: 1440 },
          },
        },
        headers: {
          default: new Header({
            children: [
              new Paragraph({
                alignment: AlignmentType.LEFT,
                border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: COLOR_NAVY } },
                spacing: { after: 200 },
                children: [
                  new TextRun({
                    text: `${brandName} (${domain})`,
                    font: 'Arial',
                    size: 8.5 * 2,
                    bold: true,
                    color: COLOR_NAVY,
                  }),
                  new TextRun({
                    text: '\tSEO / GEO / AEO Full Audit Report',
                    font: 'Arial',
                    size: 8.5 * 2,
                    color: COLOR_MUTED_TEXT,
                  }),
                ],
              }),
            ],
          }),
        },
        footers: {
          default: new Footer({
            children: [
              new Paragraph({
                alignment: AlignmentType.LEFT,
                border: { top: { style: BorderStyle.SINGLE, size: 4, color: COLOR_BORDER_GRAY } },
                spacing: { before: 160 },
                children: [
                  new TextRun({
                    text: 'Latin King Detailing Website Performance Audit',
                    font: 'Arial',
                    size: 8.5 * 2,
                    color: COLOR_MUTED_TEXT,
                  }),
                  new TextRun({
                    text: '\tPage ',
                    font: 'Arial',
                    size: 8.5 * 2,
                    color: COLOR_MUTED_TEXT,
                  }),
                  new TextRun({
                    children: [PageNumber.CURRENT],
                    font: 'Arial',
                    size: 8.5 * 2,
                    color: COLOR_NAVY,
                    bold: true,
                  }),
                ],
              }),
            ],
          }),
        },
        children: [
          // Executive Summary
          createHeading1('1. Executive Summary'),
          new Table({
            width: { size: 9360, type: WidthType.DXA },
            rows: [
              new TableRow({
                children: [
                  createTableCell(
                    [
                      createParagraph(
                        'Latin King Detailing operates from a position of exceptional real-world authority: an authentic 5.0-star rating across 60+ verified Google reviews, certified Ceramic Pro 9H accreditation, and an established physical base at 426 Flixton Road, Urmston. The website frontend features modern aesthetics and high-quality photography; however, critical technical and semantic deficits are throttling search engine rankings, Generative AI discovery (ChatGPT Search, Perplexity, Gemini), and Answer Engine snippet captures.',
                        { bold: true, color: COLOR_NAVY, spaceAfter: 120 }
                      ),
                      createParagraph(
                        'Most critically, robots.txt and sitemap.xml return 404 HTTP errors in production, preventing search engine bots from systematically crawling deeper service and location hubs. Furthermore, OpenGraph metadata on key pages mistakenly references a third-party domain (ceramicpromanchester.com), and the site lacks homepage LocalBusiness schema, FAQPage structured data, and standalone guide URLs. Addressing these prioritized issues will quickly establish dominant local search and AI answer visibility across Manchester and Cheshire.',
                        { color: COLOR_DARK_TEXT, spaceAfter: 60 }
                      ),
                    ],
                    {
                      width: 9360,
                      fill: COLOR_LIGHT_BLUE,
                      borders: {
                        top: { style: BorderStyle.SINGLE, size: 8, color: COLOR_ACCENT_BLUE },
                        bottom: { style: BorderStyle.SINGLE, size: 8, color: COLOR_ACCENT_BLUE },
                        left: { style: BorderStyle.SINGLE, size: 8, color: COLOR_ACCENT_BLUE },
                        right: { style: BorderStyle.SINGLE, size: 8, color: COLOR_ACCENT_BLUE },
                      },
                      topMargin: 200,
                      bottomMargin: 200,
                      leftMargin: 240,
                      rightMargin: 240,
                    }
                  ),
                ],
              }),
            ],
          }),

          new Paragraph({ spacing: { before: 200 } }),

          // Score Breakdown Table
          new Table({
            width: { size: 9360, type: WidthType.DXA },
            rows: [
              new TableRow({
                children: [
                  createTableCell('Dimension', { width: 1800, fill: COLOR_NAVY, color: 'FFFFFF', bold: true }),
                  createTableCell('Score', { width: 1400, fill: COLOR_NAVY, color: 'FFFFFF', bold: true, align: AlignmentType.CENTER }),
                  createTableCell('Status', { width: 1800, fill: COLOR_NAVY, color: 'FFFFFF', bold: true, align: AlignmentType.CENTER }),
                  createTableCell('Key Takeaway & Urgent Priority', { width: 4360, fill: COLOR_NAVY, color: 'FFFFFF', bold: true }),
                ],
              }),
              new TableRow({
                children: [
                  createTableCell('SEO (Search Engine Optimization)', { width: 1800, bold: true }),
                  createTableCell('5.2 / 10', { width: 1400, fill: COLOR_SCORE_AMBER, color: 'FFFFFF', bold: true, align: AlignmentType.CENTER }),
                  createTableCell('Needs Attention', { width: 1800, color: COLOR_SCORE_AMBER, bold: true, align: AlignmentType.CENTER }),
                  createTableCell('Missing robots.txt & sitemap.xml (404); title/description length truncation; domain mismatches in OpenGraph.', { width: 4360 }),
                ],
              }),
              new TableRow({
                children: [
                  createTableCell('GEO (Generative Engine Optimization)', { width: 1800, bold: true }),
                  createTableCell('4.4 / 10', { width: 1400, fill: COLOR_SCORE_RED, color: 'FFFFFF', bold: true, align: AlignmentType.CENTER }),
                  createTableCell('Below Average', { width: 1800, color: COLOR_SCORE_RED, bold: true, align: AlignmentType.CENTER }),
                  createTableCell('Missing named founder E-E-A-T attribution; guides locked inside site-data without standalone URLs; no sameAs entity links.', { width: 4360 }),
                ],
              }),
              new TableRow({
                children: [
                  createTableCell('AEO (Answer Engine Optimization)', { width: 1800, bold: true }),
                  createTableCell('4.8 / 10', { width: 1400, fill: COLOR_SCORE_AMBER, color: 'FFFFFF', bold: true, align: AlignmentType.CENTER }),
                  createTableCell('Below Average', { width: 1800, color: COLOR_SCORE_AMBER, bold: true, align: AlignmentType.CENTER }),
                  createTableCell('Zero FAQPage schema; answers framed without direct 40-60 word definitive hooks; missing Speakable specification.', { width: 4360 }),
                ],
              }),
              new TableRow({
                children: [
                  createTableCell('Combined Overall Score', { width: 1800, bold: true, fill: COLOR_LIGHT_GRAY }),
                  createTableCell('14.4 / 30 (48%)', { width: 1400, fill: COLOR_NAVY, color: 'FFFFFF', bold: true, align: AlignmentType.CENTER }),
                  createTableCell('Immediate Growth Potential', { width: 1800, bold: true, align: AlignmentType.CENTER, fill: COLOR_LIGHT_GRAY }),
                  createTableCell('Strong brick-and-mortar reputation & visual quality restrained by technical and semantic execution gaps.', { width: 4360, fill: COLOR_LIGHT_GRAY }),
                ],
              }),
            ],
          }),

          // Pages Audited Section
          createHeading1('2. Pages Audited & Crawl Inventory'),
          createParagraph('A complete inventory of all routes across the Latin King Detailing web application was analyzed:'),
          new Table({
            width: { size: 9360, type: WidthType.DXA },
            rows: [
              new TableRow({
                children: [
                  createTableCell('Route / URL', { width: 2800, fill: COLOR_NAVY, color: 'FFFFFF', bold: true }),
                  createTableCell('Page Type', { width: 2200, fill: COLOR_NAVY, color: 'FFFFFF', bold: true }),
                  createTableCell('Status Code', { width: 1200, fill: COLOR_NAVY, color: 'FFFFFF', bold: true, align: AlignmentType.CENTER }),
                  createTableCell('Key Audit Findings', { width: 3160, fill: COLOR_NAVY, color: 'FFFFFF', bold: true }),
                ],
              }),
              new TableRow({
                children: [
                  createTableCell('/', { width: 2800 }),
                  createTableCell('Homepage / Primary Hub', { width: 2200 }),
                  createTableCell('200 OK', { width: 1200, color: COLOR_SCORE_GREEN, bold: true, align: AlignmentType.CENTER }),
                  createTableCell('H1 present; 5.0 rating highlighted; NO LocalBusiness schema markup.', { width: 3160 }),
                ],
              }),
              new TableRow({
                children: [
                  createTableCell('/about', { width: 2800 }),
                  createTableCell('About & Founder Story', { width: 2200 }),
                  createTableCell('200 OK', { width: 1200, color: COLOR_SCORE_GREEN, bold: true, align: AlignmentType.CENTER }),
                  createTableCell('Story written in first person ("I founded"), but founder is unnamed (E-E-A-T gap).', { width: 3160 }),
                ],
              }),
              new TableRow({
                children: [
                  createTableCell('/services', { width: 2800 }),
                  createTableCell('Services Catalog Index', { width: 2200 }),
                  createTableCell('200 OK', { width: 1200, color: COLOR_SCORE_GREEN, bold: true, align: AlignmentType.CENTER }),
                  createTableCell('Meta description 227 chars (truncated); good service categorization.', { width: 3160 }),
                ],
              }),
              new TableRow({
                children: [
                  createTableCell('/services/ceramic-coating', { width: 2800 }),
                  createTableCell('Flagship Service Detail', { width: 2200 }),
                  createTableCell('200 OK', { width: 1200, color: COLOR_SCORE_GREEN, bold: true, align: AlignmentType.CENTER }),
                  createTableCell('Service schema implemented; excellent technical depth; missing Breadcrumb schema.', { width: 3160 }),
                ],
              }),
              new TableRow({
                children: [
                  createTableCell('/services/machine-polishing', { width: 2800 }),
                  createTableCell('Paint Correction Service', { width: 2200 }),
                  createTableCell('200 OK', { width: 1200, color: COLOR_SCORE_GREEN, bold: true, align: AlignmentType.CENTER }),
                  createTableCell('Service exists at /machine-polishing; /paint-correction returns 404 (needs alias redirect).', { width: 3160 }),
                ],
              }),
              new TableRow({
                children: [
                  createTableCell('/services/[other 5 slugs]', { width: 2800 }),
                  createTableCell('Leather, Kings Detail, Valet, etc.', { width: 2200 }),
                  createTableCell('200 OK', { width: 1200, color: COLOR_SCORE_GREEN, bold: true, align: AlignmentType.CENTER }),
                  createTableCell('Dynamic routes working; uniform Service JSON-LD schema across all 7 items.', { width: 3160 }),
                ],
              }),
              new TableRow({
                children: [
                  createTableCell('/locations', { width: 2800 }),
                  createTableCell('Local Area Landing Hub', { width: 2200 }),
                  createTableCell('200 OK', { width: 1200, color: COLOR_SCORE_GREEN, bold: true, align: AlignmentType.CENTER }),
                  createTableCell('Strong NAP details & 10 key towns; lacks individual geo landing sub-pages.', { width: 3160 }),
                ],
              }),
              new TableRow({
                children: [
                  createTableCell('/reviews', { width: 2800 }),
                  createTableCell('Social Proof & Testimonials', { width: 2200 }),
                  createTableCell('200 OK', { width: 1200, color: COLOR_SCORE_GREEN, bold: true, align: AlignmentType.CENTER }),
                  createTableCell('60+ verified reviews surfaced; lacks Review / AggregateRating schema markup.', { width: 3160 }),
                ],
              }),
              new TableRow({
                children: [
                  createTableCell('/faq', { width: 2800 }),
                  createTableCell('FAQ & Answers Page', { width: 2200 }),
                  createTableCell('200 OK', { width: 1200, color: COLOR_SCORE_GREEN, bold: true, align: AlignmentType.CENTER }),
                  createTableCell('CRITICAL: OG URL points to ceramicpromanchester.com; NO FAQPage schema.', { width: 3160 }),
                ],
              }),
              new TableRow({
                children: [
                  createTableCell('/comparison', { width: 2800 }),
                  createTableCell('Comparison Matrix Page', { width: 2200 }),
                  createTableCell('200 OK', { width: 1200, color: COLOR_SCORE_GREEN, bold: true, align: AlignmentType.CENTER }),
                  createTableCell('CRITICAL: OG URL points to ceramicpromanchester.com; great tabular data.', { width: 3160 }),
                ],
              }),
              new TableRow({
                children: [
                  createTableCell('/our-work', { width: 2800 }),
                  createTableCell('Gallery & Portfolio', { width: 2200 }),
                  createTableCell('200 OK', { width: 1200, color: COLOR_SCORE_GREEN, bold: true, align: AlignmentType.CENTER }),
                  createTableCell('Visual portfolio; title tag 88 chars (truncated); images have descriptive alt.', { width: 3160 }),
                ],
              }),
              new TableRow({
                children: [
                  createTableCell('/robots.txt', { width: 2800 }),
                  createTableCell('Crawl Directive', { width: 2200 }),
                  createTableCell('404 NOT FOUND', { width: 1200, color: COLOR_SCORE_RED, bold: true, align: AlignmentType.CENTER }),
                  createTableCell('CRITICAL: Search crawlers and AI bots have no explicit crawl directive file.', { width: 3160 }),
                ],
              }),
              new TableRow({
                children: [
                  createTableCell('/sitemap.xml', { width: 2800 }),
                  createTableCell('Search Engine Index Map', { width: 2200 }),
                  createTableCell('404 NOT FOUND', { width: 1200, color: COLOR_SCORE_RED, bold: true, align: AlignmentType.CENTER }),
                  createTableCell('CRITICAL: Crawlers cannot discover dynamic service URLs and location pages.', { width: 3160 }),
                ],
              }),
            ],
          }),

          // SEO Deep Analysis
          createHeading1('3. SEO Analysis (Search Engine Optimization) — Score: 5.2/10'),
          createHeading2('Technical On-Page Signals'),
          new Table({
            width: { size: 9360, type: WidthType.DXA },
            rows: [
              new TableRow({
                children: [
                  createTableCell('Signal', { width: 2400, fill: COLOR_NAVY, color: 'FFFFFF', bold: true }),
                  createTableCell('Finding & Evidence', { width: 5160, fill: COLOR_NAVY, color: 'FFFFFF', bold: true }),
                  createTableCell('Status', { width: 1800, fill: COLOR_NAVY, color: 'FFFFFF', bold: true, align: AlignmentType.CENTER }),
                ],
              }),
              new TableRow({
                children: [
                  createTableCell('Robots.txt Directive', { width: 2400, bold: true }),
                  createTableCell('Request to https://latinkingdetailing.co.uk/robots.txt returns HTTP 404. Crawlers receive no explicit bot guidance.', { width: 5160 }),
                  createTableCell('Critical Missing', { width: 1800, fill: COLOR_SCORE_RED, color: 'FFFFFF', bold: true, align: AlignmentType.CENTER }),
                ],
              }),
              new TableRow({
                children: [
                  createTableCell('XML Sitemap', { width: 2400, bold: true }),
                  createTableCell('Request to https://latinkingdetailing.co.uk/sitemap.xml returns HTTP 404. Next.js app lacks app/sitemap.ts.', { width: 5160 }),
                  createTableCell('Critical Missing', { width: 1800, fill: COLOR_SCORE_RED, color: 'FFFFFF', bold: true, align: AlignmentType.CENTER }),
                ],
              }),
              new TableRow({
                children: [
                  createTableCell('Title Tag Lengths', { width: 2400, bold: true }),
                  createTableCell('Homepage title is 87 chars; Services title is 74 chars; Our Work title is 88 chars. Google cuts off titles above 60 chars with ellipsis ("...").', { width: 5160 }),
                  createTableCell('Needs Attention', { width: 1800, fill: COLOR_SCORE_AMBER, color: 'FFFFFF', bold: true, align: AlignmentType.CENTER }),
                ],
              }),
              new TableRow({
                children: [
                  createTableCell('Meta Descriptions', { width: 2400, bold: true }),
                  createTableCell('Homepage description is 197 chars; Services description is 227 chars; Locations is 205 chars. All exceed optimal 155-160 char desktop/mobile SERP limit.', { width: 5160 }),
                  createTableCell('Needs Attention', { width: 1800, fill: COLOR_SCORE_AMBER, color: 'FFFFFF', bold: true, align: AlignmentType.CENTER }),
                ],
              }),
              new TableRow({
                children: [
                  createTableCell('OpenGraph Domain Integrity', { width: 2400, bold: true }),
                  createTableCell('app/faq/page.tsx line 19 and app/comparison/page.tsx line 18 hardcode og:url to "https://ceramicpromanchester.com/...". Creates severe canonical confusion.', { width: 5160 }),
                  createTableCell('Critical Defect', { width: 1800, fill: COLOR_SCORE_RED, color: 'FFFFFF', bold: true, align: AlignmentType.CENTER }),
                ],
              }),
              new TableRow({
                children: [
                  createTableCell('Canonical Tags', { width: 2400, bold: true }),
                  createTableCell('Only /about defines explicit alternates.canonical. Root layout has metadataBase, but self-referencing canonicals are omitted on inner pages.', { width: 5160 }),
                  createTableCell('Needs Attention', { width: 1800, fill: COLOR_SCORE_AMBER, color: 'FFFFFF', bold: true, align: AlignmentType.CENTER }),
                ],
              }),
              new TableRow({
                children: [
                  createTableCell('Image Alt Attributes', { width: 2400, bold: true }),
                  createTableCell('Hero and workshop gallery images have rich descriptive alt tags (e.g. "Latin King Detailing mobile detailing van and ceramic coated supercar, Manchester").', { width: 5160 }),
                  createTableCell('Good', { width: 1800, fill: COLOR_SCORE_GREEN, color: 'FFFFFF', bold: true, align: AlignmentType.CENTER }),
                ],
              }),
              new TableRow({
                children: [
                  createTableCell('Heading Hierarchy', { width: 2400, bold: true }),
                  createTableCell('Clear single H1 on every audited page. Logical H2/H3 progression in services, FAQ, and comparison sections.', { width: 5160 }),
                  createTableCell('Good', { width: 1800, fill: COLOR_SCORE_GREEN, color: 'FFFFFF', bold: true, align: AlignmentType.CENTER }),
                ],
              }),
            ],
          }),

          createHeading2('Content Quality & Keyword Targeting'),
          createParagraph('The site excels at local geography mentions (Urmston, Flixton, Stretford, Sale, Altrincham, Hale, Bowdon, Manchester, Cheshire). Technical automotive detailing terminology is accurate (Ceramic Pro 9H, nanoceramic, multi-stage machine polishing, orange peel, swirl removal). However, high-value informational content (guides, comparison explainers) is under-leveraged because it is currently trapped in static TypeScript arrays rather than exposed as crawlable, indexable URLs.'),

          createHeading2('Structured Data & Schema Coverage'),
          createParagraph('Structured data coverage is currently fragmented:'),
          createParagraph('• Homepage: ZERO JSON-LD schema. Neither AutoRepair nor LocalBusiness is declared, depriving Google of official NAP, geo-coordinates, logo, and aggregate rating signals.'),
          createParagraph('• Service Detail Pages: High-quality Service schema is present with AutoRepair provider and areaServed coverage.'),
          createParagraph('• FAQ Page: ZERO FAQPage schema. FAQ items are rendered only via client-side UI, missing out on Google rich snippet accordions.'),
          createParagraph('• Breadcrumbs: ZERO BreadcrumbList schema on any page.'),

          // GEO Deep Analysis
          createHeading1('4. GEO Analysis (Generative Engine Optimization) — Score: 4.4/10'),
          createParagraph('Generative Engine Optimization evaluates how readily AI models (ChatGPT, Perplexity, Gemini, Claude, Copilot) recognize, extract, and cite Latin King Detailing as the primary authority for car detailing and ceramic coating in Manchester.'),

          createHeading2('E-E-A-T Assessment (Experience, Expertise, Authoritativeness, Trust)'),
          new Table({
            width: { size: 9360, type: WidthType.DXA },
            rows: [
              new TableRow({
                children: [
                  createTableCell('GEO Signal', { width: 2400, fill: COLOR_NAVY, color: 'FFFFFF', bold: true }),
                  createTableCell('Current State & AI Perception', { width: 5160, fill: COLOR_NAVY, color: 'FFFFFF', bold: true }),
                  createTableCell('Status', { width: 1800, fill: COLOR_NAVY, color: 'FFFFFF', bold: true, align: AlignmentType.CENTER }),
                ],
              }),
              new TableRow({
                children: [
                  createTableCell('Author / Founder Identity', { width: 2400, bold: true }),
                  createTableCell('The About page uses first-person narrative ("I founded Latin King Detailing..."), but nowhere is the founder\'s actual name or personal credential given. AI cannot build a Person entity node.', { width: 5160 }),
                  createTableCell('Critical Missing', { width: 1800, fill: COLOR_SCORE_RED, color: 'FFFFFF', bold: true, align: AlignmentType.CENTER }),
                ],
              }),
              new TableRow({
                children: [
                  createTableCell('Certifications & Insurance', { width: 2400, bold: true }),
                  createTableCell('Factory Ceramic Pro 9H Certified Installer and £5M Public Liability Insurance are explicitly noted. High-confidence trust signals for AI citation.', { width: 5160 }),
                  createTableCell('Strong', { width: 1800, fill: COLOR_SCORE_GREEN, color: 'FFFFFF', bold: true, align: AlignmentType.CENTER }),
                ],
              }),
              new TableRow({
                children: [
                  createTableCell('Physical NAP Verification', { width: 2400, bold: true }),
                  createTableCell('Exact address (426 Flixton Road, Flixton, Urmston, Manchester M41 6QT), phone, and direct Google Maps coordinate links are consistent.', { width: 5160 }),
                  createTableCell('Strong', { width: 1800, fill: COLOR_SCORE_GREEN, color: 'FFFFFF', bold: true, align: AlignmentType.CENTER }),
                ],
              }),
              new TableRow({
                children: [
                  createTableCell('Entity Graph & sameAs Linking', { width: 2400, bold: true }),
                  createTableCell('Active social channels (Instagram @latin_king_detailing, TikTok @latinkingdetailing, Facebook) are linked in footer, but omitted from JSON-LD sameAs array.', { width: 5160 }),
                  createTableCell('Needs Attention', { width: 1800, fill: COLOR_SCORE_AMBER, color: 'FFFFFF', bold: true, align: AlignmentType.CENTER }),
                ],
              }),
              new TableRow({
                children: [
                  createTableCell('AI Bot Crawl Directives', { width: 2400, bold: true }),
                  createTableCell('Because robots.txt is 404, there are no explicit Allow instructions for GPTBot, PerplexityBot, ClaudeBot, or Google-Extended.', { width: 5160 }),
                  createTableCell('Needs Attention', { width: 1800, fill: COLOR_SCORE_AMBER, color: 'FFFFFF', bold: true, align: AlignmentType.CENTER }),
                ],
              }),
            ],
          }),

          createHeading2('Content for AI Synthesis & Citing'),
          createParagraph('AI answer engines synthesize multi-source answers and prioritize content with high factual density, explicit pricing boundaries, and comparative tables. Latin King Detailing has exceptional raw data in lib/site-data.ts (e.g. comparison between ceramic vs dealership vs wax, 9H molecular bonding explanations, curing timelines, UK weather maintenance); however, because WorkshopAndGuides is unrendered and there are no dedicated blog/guide URLs, AI bots crawling the web cannot cite them as distinct authoritative articles.'),

          // AEO Deep Analysis
          createHeading1('5. AEO Analysis (Answer Engine Optimization) — Score: 4.8/10'),
          createParagraph('Answer Engine Optimization measures eligibility for Google Featured Snippets, People Also Ask (PAA) boxes, and voice assistants (Siri, Google Assistant, Alexa).'),

          createHeading2('Featured Snippet & Voice Readiness Matrix'),
          new Table({
            width: { size: 9360, type: WidthType.DXA },
            rows: [
              new TableRow({
                children: [
                  createTableCell('AEO Signal', { width: 2400, fill: COLOR_NAVY, color: 'FFFFFF', bold: true }),
                  createTableCell('Observation & Performance', { width: 5160, fill: COLOR_NAVY, color: 'FFFFFF', bold: true }),
                  createTableCell('Status', { width: 1800, fill: COLOR_NAVY, color: 'FFFFFF', bold: true, align: AlignmentType.CENTER }),
                ],
              }),
              new TableRow({
                children: [
                  createTableCell('Direct Answer Paragraphs (40-60 words)', { width: 2400, bold: true }),
                  createTableCell('Questions on /faq often open with conversational text ("Prices depend on your car\'s size... drop us a message") rather than a direct, snippet-ready definition.', { width: 5160 }),
                  createTableCell('Needs Attention', { width: 1800, fill: COLOR_SCORE_AMBER, color: 'FFFFFF', bold: true, align: AlignmentType.CENTER }),
                ],
              }),
              new TableRow({
                children: [
                  createTableCell('FAQPage Structured Data', { width: 2400, bold: true }),
                  createTableCell('FAQ page and homepage FAQ components have no JSON-LD schema. Google cannot parse Q&As for SERP accordion dropdowns.', { width: 5160 }),
                  createTableCell('Critical Missing', { width: 1800, fill: COLOR_SCORE_RED, color: 'FFFFFF', bold: true, align: AlignmentType.CENTER }),
                ],
              }),
              new TableRow({
                children: [
                  createTableCell('Comparison Table Snippets', { width: 2400, bold: true }),
                  createTableCell('The ComparisonTable component is visually attractive, but lacks HTML <caption> and clean semantic headers required for Google Table Snippets.', { width: 5160 }),
                  createTableCell('Needs Attention', { width: 1800, fill: COLOR_SCORE_AMBER, color: 'FFFFFF', bold: true, align: AlignmentType.CENTER }),
                ],
              }),
              new TableRow({
                children: [
                  createTableCell('Speakable Specification', { width: 2400, bold: true }),
                  createTableCell('No Speakable schema exists anywhere in the codebase for voice search assistants reading business summaries.', { width: 5160 }),
                  createTableCell('Missing', { width: 1800, fill: COLOR_SCORE_AMBER, color: 'FFFFFF', bold: true, align: AlignmentType.CENTER }),
                ],
              }),
              new TableRow({
                children: [
                  createTableCell('Conversational Query Coverage', { width: 2400, bold: true }),
                  createTableCell('Covers high-intent queries: "How much does ceramic coating cost in Manchester?", "Is ceramic coating worth it?", "How long does Ceramic Pro last?".', { width: 5160 }),
                  createTableCell('Strong', { width: 1800, fill: COLOR_SCORE_GREEN, color: 'FFFFFF', bold: true, align: AlignmentType.CENTER }),
                ],
              }),
            ],
          }),

          // Priority Recommendations Matrix
          createHeading1('6. Priority Recommendations Matrix'),
          createParagraph('Systematic roadmap prioritized by implementation effort and revenue impact:'),
          new Table({
            width: { size: 9360, type: WidthType.DXA },
            rows: [
              new TableRow({
                children: [
                  createTableCell('Priority', { width: 1500, fill: COLOR_NAVY, color: 'FFFFFF', bold: true, align: AlignmentType.CENTER }),
                  createTableCell('Issue / Action Item', { width: 3460, fill: COLOR_NAVY, color: 'FFFFFF', bold: true }),
                  createTableCell('Dimension', { width: 1400, fill: COLOR_NAVY, color: 'FFFFFF', bold: true, align: AlignmentType.CENTER }),
                  createTableCell('Effort', { width: 1400, fill: COLOR_NAVY, color: 'FFFFFF', bold: true, align: AlignmentType.CENTER }),
                  createTableCell('Impact', { width: 1600, fill: COLOR_NAVY, color: 'FFFFFF', bold: true, align: AlignmentType.CENTER }),
                ],
              }),
              new TableRow({
                children: [
                  createTableCell('CRITICAL', { width: 1500, fill: COLOR_SCORE_RED, color: 'FFFFFF', bold: true, align: AlignmentType.CENTER }),
                  createTableCell('Deploy app/robots.ts and app/sitemap.ts to resolve 404s for search crawlers & AI bots.', { width: 3460, bold: true }),
                  createTableCell('SEO / GEO', { width: 1400, align: AlignmentType.CENTER }),
                  createTableCell('Quick (15 min)', { width: 1400, align: AlignmentType.CENTER }),
                  createTableCell('Immediate High', { width: 1600, bold: true, color: COLOR_SCORE_RED, align: AlignmentType.CENTER }),
                ],
              }),
              new TableRow({
                children: [
                  createTableCell('CRITICAL', { width: 1500, fill: COLOR_SCORE_RED, color: 'FFFFFF', bold: true, align: AlignmentType.CENTER }),
                  createTableCell('Fix OpenGraph URLs on /faq and /comparison that point to ceramicpromanchester.com.', { width: 3460, bold: true }),
                  createTableCell('Technical SEO', { width: 1400, align: AlignmentType.CENTER }),
                  createTableCell('Quick (5 min)', { width: 1400, align: AlignmentType.CENTER }),
                  createTableCell('High', { width: 1600, bold: true, color: COLOR_SCORE_RED, align: AlignmentType.CENTER }),
                ],
              }),
              new TableRow({
                children: [
                  createTableCell('HIGH', { width: 1500, fill: COLOR_SCORE_ORANGE, color: 'FFFFFF', bold: true, align: AlignmentType.CENTER }),
                  createTableCell('Inject AutoRepair & LocalBusiness JSON-LD schema on homepage with GeoCoordinates, openingHours, and sameAs links.', { width: 3460, bold: true }),
                  createTableCell('SEO / GEO', { width: 1400, align: AlignmentType.CENTER }),
                  createTableCell('Moderate (30 min)', { width: 1400, align: AlignmentType.CENTER }),
                  createTableCell('Very High', { width: 1600, bold: true, color: COLOR_SCORE_ORANGE, align: AlignmentType.CENTER }),
                ],
              }),
              new TableRow({
                children: [
                  createTableCell('HIGH', { width: 1500, fill: COLOR_SCORE_ORANGE, color: 'FFFFFF', bold: true, align: AlignmentType.CENTER }),
                  createTableCell('Implement FAQPage schema markup on /faq and homepage FaqSection for rich snippets.', { width: 3460, bold: true }),
                  createTableCell('AEO', { width: 1400, align: AlignmentType.CENTER }),
                  createTableCell('Quick (20 min)', { width: 1400, align: AlignmentType.CENTER }),
                  createTableCell('High (SERP CTR)', { width: 1600, bold: true, color: COLOR_SCORE_ORANGE, align: AlignmentType.CENTER }),
                ],
              }),
              new TableRow({
                children: [
                  createTableCell('HIGH', { width: 1500, fill: COLOR_SCORE_ORANGE, color: 'FFFFFF', bold: true, align: AlignmentType.CENTER }),
                  createTableCell('Publish standalone /guides or /blog routes for the 3 orphaned articles with clear author E-E-A-T attribution.', { width: 3460, bold: true }),
                  createTableCell('GEO / AEO', { width: 1400, align: AlignmentType.CENTER }),
                  createTableCell('Moderate (1 hour)', { width: 1400, align: AlignmentType.CENTER }),
                  createTableCell('High Citation', { width: 1600, bold: true, color: COLOR_SCORE_ORANGE, align: AlignmentType.CENTER }),
                ],
              }),
              new TableRow({
                children: [
                  createTableCell('MEDIUM', { width: 1500, fill: COLOR_SCORE_AMBER, color: 'FFFFFF', bold: true, align: AlignmentType.CENTER }),
                  createTableCell('Optimize Title tags to 50-60 characters and Meta Descriptions to 150-160 characters across all pages.', { width: 3460 }),
                  createTableCell('On-Page SEO', { width: 1400, align: AlignmentType.CENTER }),
                  createTableCell('Quick (30 min)', { width: 1400, align: AlignmentType.CENTER }),
                  createTableCell('Medium (CTR)', { width: 1600, align: AlignmentType.CENTER }),
                ],
              }),
              new TableRow({
                children: [
                  createTableCell('MEDIUM', { width: 1500, fill: COLOR_SCORE_AMBER, color: 'FFFFFF', bold: true, align: AlignmentType.CENTER }),
                  createTableCell('Add 301 redirect or dedicated route for /services/paint-correction pointing to /services/machine-polishing.', { width: 3460 }),
                  createTableCell('Technical SEO', { width: 1400, align: AlignmentType.CENTER }),
                  createTableCell('Quick (10 min)', { width: 1400, align: AlignmentType.CENTER }),
                  createTableCell('Medium', { width: 1600, align: AlignmentType.CENTER }),
                ],
              }),
              new TableRow({
                children: [
                  createTableCell('QUICK WIN', { width: 1500, fill: COLOR_SCORE_GREEN, color: 'FFFFFF', bold: true, align: AlignmentType.CENTER }),
                  createTableCell('Add founder\'s full name, bio, and direct quote on About page to satisfy Google E-E-A-T and Knowledge Graph.', { width: 3460 }),
                  createTableCell('GEO / E-E-A-T', { width: 1400, align: AlignmentType.CENTER }),
                  createTableCell('Quick (15 min)', { width: 1400, align: AlignmentType.CENTER }),
                  createTableCell('High Trust', { width: 1600, align: AlignmentType.CENTER }),
                ],
              }),
            ],
          }),

          // What's Working Well Section
          createHeading1('7. What is Working Well (Core Strengths)'),
          new Table({
            width: { size: 9360, type: WidthType.DXA },
            rows: [
              new TableRow({
                children: [
                  createTableCell('Proven Strength', { width: 2800, fill: COLOR_SCORE_GREEN, color: 'FFFFFF', bold: true }),
                  createTableCell('Observed Evidence Across Codebase & Live Audit', { width: 6560, fill: COLOR_SCORE_GREEN, color: 'FFFFFF', bold: true }),
                ],
              }),
              new TableRow({
                children: [
                  createTableCell('Verified 5.0 Google Reputation', { width: 2800, bold: true }),
                  createTableCell('60+ verified reviews with a spotless 5.0 average. Direct links to Google Review submission and official Google Maps profile.', { width: 6560, fill: COLOR_LIGHT_GREEN }),
                ],
              }),
              new TableRow({
                children: [
                  createTableCell('Ceramic Pro 9H Accreditation', { width: 2800, bold: true }),
                  createTableCell('Explicit factory-certified installer status and VIN-registered warranty protection provide undeniable competitive differentiation.', { width: 6560, fill: COLOR_LIGHT_GREEN }),
                ],
              }),
              new TableRow({
                children: [
                  createTableCell('Hyper-Local Geographic Clarity', { width: 2800, bold: true }),
                  createTableCell('Consistent NAP and travel guides for 10 Greater Manchester and Cheshire hubs (Urmston, Flixton, Stretford, Sale, Irlam, Eccles, Altrincham, Hale, Bowdon, Partington).', { width: 6560, fill: COLOR_LIGHT_GREEN }),
                ],
              }),
              new TableRow({
                children: [
                  createTableCell('High-Resolution Authentic Imagery', { width: 2800, bold: true }),
                  createTableCell('Clean, real workshop photos (supercars, prestige vehicles, mobile detailing van) paired with thorough, descriptive alt attributes.', { width: 6560, fill: COLOR_LIGHT_GREEN }),
                ],
              }),
              new TableRow({
                children: [
                  createTableCell('Clean Component Architecture', { width: 2800, bold: true }),
                  createTableCell('Next.js 16 + Tailwind CSS 4 codebase provides fast server-rendered initial HTML, excellent mobile responsiveness, and dark/light workshop mode.', { width: 6560, fill: COLOR_LIGHT_GREEN }),
                ],
              }),
            ],
          }),

          // Glossary Section
          createHeading1('8. Technical Glossary'),
          createParagraph('• SEO (Search Engine Optimization): The science of optimizing technical site structure, on-page metadata, semantic headings, and crawl directives to achieve top organic rankings in traditional search engines like Google and Bing.'),
          createParagraph('• GEO (Generative Engine Optimization): The practice of structuring website information, entity definitions (Schema sameAs), factual density, and author credentials (E-E-A-T) so AI engines like ChatGPT Search, Perplexity, Gemini, and Claude accurately cite and recommend the brand in conversational responses.'),
          createParagraph('• AEO (Answer Engine Optimization): The targeted optimization of concise direct-answer paragraphs (40-60 words), question-phrased headers, and structured data (FAQPage, Speakable, HowTo) to capture position-zero Google Featured Snippets, People Also Ask boxes, and voice search results.'),
        ],
      },
    ],
  });

  const buffer = await Packer.toBuffer(doc);
  const docxPath = path.resolve(__dirname, '../reports/seo-audit-latinkingdetailing-co-uk-2026-11-20.docx');
  fs.writeFileSync(docxPath, buffer);
  console.log('DOCX successfully written to:', docxPath);
}

function buildHtmlReport() {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>SEO / GEO / AEO Audit Report - Latin King Detailing</title>
<style>
  @page {
    size: A4;
    margin: 18mm 16mm 18mm 16mm;
    @bottom-right {
      content: counter(page);
    }
  }
  body {
    font-family: Arial, Helvetica, sans-serif;
    color: #1E293B;
    line-height: 1.5;
    font-size: 10.5pt;
    margin: 0;
    padding: 0;
    background: #FFFFFF;
  }
  .page {
    page-break-after: always;
  }
  .page:last-child {
    page-break-after: avoid;
  }
  /* Cover */
  .cover {
    background: #1B2A4A;
    color: white;
    text-align: center;
    padding: 120px 40px 80px 40px;
    min-height: 800px;
    box-sizing: border-box;
    border-radius: 8px;
  }
  .cover h1 {
    font-size: 32pt;
    margin: 0 0 10px 0;
    color: #FFFFFF;
    font-weight: bold;
    letter-spacing: -0.5px;
  }
  .cover h2 {
    font-size: 18pt;
    color: #93C5FD;
    margin: 0 0 15px 0;
    font-weight: 600;
  }
  .cover .badge {
    font-size: 10.5pt;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #CBD5E1;
    margin-bottom: 50px;
  }
  .score-grid {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin: 40px auto;
    max-width: 600px;
  }
  .score-card {
    flex: 1;
    padding: 24px 16px;
    border-radius: 8px;
    color: white;
  }
  .score-card.amber { background: #D97706; }
  .score-card.red { background: #DC2626; }
  .score-card .dim { font-size: 11pt; font-weight: bold; text-transform: uppercase; margin-bottom: 6px; }
  .score-card .val { font-size: 28pt; font-weight: bold; margin-bottom: 4px; }
  .score-card .stat { font-size: 9pt; font-style: italic; opacity: 0.9; }
  .cover-footer {
    margin-top: 80px;
    font-size: 9pt;
    color: #94A3B8;
  }
  
  /* Content styling */
  h1 { font-size: 18pt; color: #1B2A4A; margin-top: 24px; margin-bottom: 12px; border-bottom: 2px solid #2563EB; padding-bottom: 4px; }
  h2 { font-size: 13pt; color: #2563EB; margin-top: 18px; margin-bottom: 8px; }
  p { margin: 0 0 10px 0; }
  .exec-box {
    background: #EFF6FF;
    border-left: 4px solid #2563EB;
    padding: 14px 18px;
    margin-bottom: 18px;
    border-radius: 0 8px 8px 0;
  }
  .exec-box p:last-child { margin-bottom: 0; }
  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 18px;
    font-size: 9.5pt;
  }
  th {
    background: #1B2A4A;
    color: white;
    text-align: left;
    padding: 8px 10px;
    font-weight: 600;
  }
  td {
    padding: 7px 10px;
    border: 1px solid #E2E8F0;
    vertical-align: middle;
  }
  tr:nth-child(even) td { background: #F8F9FA; }
  .tag {
    display: inline-block;
    padding: 3px 8px;
    border-radius: 4px;
    font-size: 8.5pt;
    font-weight: bold;
    color: white;
    text-align: center;
  }
  .tag.green { background: #16A34A; }
  .tag.amber { background: #D97706; }
  .tag.red { background: #DC2626; }
  .tag.orange { background: #EA580C; }
  .header-rule {
    display: flex;
    justify-content: space-between;
    font-size: 8pt;
    color: #64748B;
    border-bottom: 1px solid #CBD5E1;
    padding-bottom: 4px;
    margin-bottom: 16px;
  }
</style>
</head>
<body>

<!-- Cover Page -->
<div class="page">
  <div class="cover">
    <h1>${domain}</h1>
    <h2>SEO / GEO / AEO Full Audit Report</h2>
    <div class="badge">Comprehensive Search &amp; AI Visibility Audit</div>

    <div class="score-grid">
      <div class="score-card amber">
        <div class="dim">SEO Score</div>
        <div class="val">5.2 / 10</div>
        <div class="stat">Needs Attention</div>
      </div>
      <div class="score-card red">
        <div class="dim">GEO Score</div>
        <div class="val">4.4 / 10</div>
        <div class="stat">Below Average</div>
      </div>
      <div class="score-card amber">
        <div class="dim">AEO Score</div>
        <div class="val">4.8 / 10</div>
        <div class="stat">Below Average</div>
      </div>
    </div>

    <div class="cover-footer">
      <div>Audit Date: ${auditDate}</div>
      <div style="margin-top: 4px;">Audited with the Antigravity Autonomous SEO-GEO-AEO Specialist Suite</div>
    </div>
  </div>
</div>

<!-- Main Body -->
<div class="page">
  <div class="header-rule">
    <span><strong>${brandName}</strong> (${domain})</span>
    <span>SEO / GEO / AEO Comprehensive Audit Report</span>
  </div>

  <h1>1. Executive Summary</h1>
  <div class="exec-box">
    <p><strong>Latin King Detailing commands exceptional offline and local trust:</strong> a flawless 5.0 Google rating across 60+ verified reviews, Ceramic Pro 9H accreditation, and an established physical workshop in Urmston, Greater Manchester. The website features appealing visuals and responsive mobile styling.</p>
    <p>However, <strong>critical technical gaps severely bottleneck performance</strong>: both <code>robots.txt</code> and <code>sitemap.xml</code> return HTTP 404 in production, OpenGraph tags on /faq and /comparison point to a conflicting domain (<em>ceramicpromanchester.com</em>), and there is zero LocalBusiness or FAQPage JSON-LD schema. Resolving these defects will rapidly propel Latin King Detailing to the top of Manchester organic search and AI engine recommendations.</p>
  </div>

  <h2>Overall Score Matrix</h2>
  <table>
    <thead>
      <tr>
        <th style="width: 28%;">Dimension</th>
        <th style="width: 15%; text-align: center;">Score</th>
        <th style="width: 20%; text-align: center;">Status</th>
        <th style="width: 37%;">Key Takeaway</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>SEO (Search Engines)</strong></td>
        <td style="text-align: center;"><span class="tag amber">5.2 / 10</span></td>
        <td style="text-align: center; color: #D97706; font-weight: bold;">Needs Attention</td>
        <td>Missing robots.txt &amp; sitemap.xml; title/description lengths truncated; foreign OG domains.</td>
      </tr>
      <tr>
        <td><strong>GEO (Generative AI Engines)</strong></td>
        <td style="text-align: center;"><span class="tag red">4.4 / 10</span></td>
        <td style="text-align: center; color: #DC2626; font-weight: bold;">Below Average</td>
        <td>Founder unnamed (E-E-A-T gap); blog guides trapped in TypeScript array; no sameAs links.</td>
      </tr>
      <tr>
        <td><strong>AEO (Answer Engines &amp; Voice)</strong></td>
        <td style="text-align: center;"><span class="tag amber">4.8 / 10</span></td>
        <td style="text-align: center; color: #D97706; font-weight: bold;">Below Average</td>
        <td>No FAQPage schema; answers lack 40-60 word definition snippets; missing Speakable tags.</td>
      </tr>
      <tr style="background: #EFF6FF;">
        <td><strong>Combined Overall Score</strong></td>
        <td style="text-align: center;"><span class="tag" style="background:#1B2A4A;">14.4 / 30</span></td>
        <td style="text-align: center; font-weight: bold; color: #1B2A4A;">48% Readiness</td>
        <td>Massive organic &amp; AI growth upside once technical blockers are resolved.</td>
      </tr>
    </tbody>
  </table>

  <h1>2. Pages Audited &amp; Crawl Inventory</h1>
  <table>
    <thead>
      <tr>
        <th style="width: 32%;">Route</th>
        <th style="width: 24%;">Type</th>
        <th style="width: 14%; text-align: center;">Status</th>
        <th style="width: 30%;">Audit Observation</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>https://${domain}/</code></td>
        <td>Homepage</td>
        <td style="text-align: center;"><span class="tag green">200 OK</span></td>
        <td>Clean H1, strong social proof, missing LocalBusiness schema.</td>
      </tr>
      <tr>
        <td><code>https://${domain}/about</code></td>
        <td>About Story</td>
        <td style="text-align: center;"><span class="tag green">200 OK</span></td>
        <td>First-person story without named founder (E-E-A-T gap).</td>
      </tr>
      <tr>
        <td><code>https://${domain}/services</code></td>
        <td>Services Hub</td>
        <td style="text-align: center;"><span class="tag green">200 OK</span></td>
        <td>Meta description 227 chars (truncated in SERPs).</td>
      </tr>
      <tr>
        <td><code>https://${domain}/services/ceramic-coating</code></td>
        <td>Flagship Service</td>
        <td style="text-align: center;"><span class="tag green">200 OK</span></td>
        <td>Service schema active; great technical detail; lacks breadcrumb schema.</td>
      </tr>
      <tr>
        <td><code>https://${domain}/services/machine-polishing</code></td>
        <td>Paint Correction</td>
        <td style="text-align: center;"><span class="tag green">200 OK</span></td>
        <td>/paint-correction returns 404 (needs alias redirect).</td>
      </tr>
      <tr>
        <td><code>https://${domain}/locations</code></td>
        <td>Service Areas</td>
        <td style="text-align: center;"><span class="tag green">200 OK</span></td>
        <td>10 Manchester/Cheshire towns; great NAP; needs geo landing pages.</td>
      </tr>
      <tr>
        <td><code>https://${domain}/reviews</code></td>
        <td>Verified Reviews</td>
        <td style="text-align: center;"><span class="tag green">200 OK</span></td>
        <td>60+ reviews displayed; missing Review &amp; AggregateRating schema.</td>
      </tr>
      <tr>
        <td><code>https://${domain}/faq</code></td>
        <td>FAQs</td>
        <td style="text-align: center;"><span class="tag green">200 OK</span></td>
        <td>CRITICAL: OpenGraph points to ceramicpromanchester.com; no schema.</td>
      </tr>
      <tr>
        <td><code>https://${domain}/comparison</code></td>
        <td>Comparison Table</td>
        <td style="text-align: center;"><span class="tag green">200 OK</span></td>
        <td>CRITICAL: OpenGraph points to ceramicpromanchester.com.</td>
      </tr>
      <tr>
        <td><code>https://${domain}/robots.txt</code></td>
        <td>Crawl Directive</td>
        <td style="text-align: center;"><span class="tag red">404</span></td>
        <td>CRITICAL: Search and AI crawlers have no directive file.</td>
      </tr>
      <tr>
        <td><code>https://${domain}/sitemap.xml</code></td>
        <td>XML Sitemap</td>
        <td style="text-align: center;"><span class="tag red">404</span></td>
        <td>CRITICAL: Search engines cannot auto-discover service URLs.</td>
      </tr>
    </tbody>
  </table>
</div>

<!-- Page 3 -->
<div class="page">
  <div class="header-rule">
    <span><strong>${brandName}</strong> (${domain})</span>
    <span>SEO / GEO / AEO Comprehensive Audit Report</span>
  </div>

  <h1>3. Deep Dimension Analysis</h1>

  <h2>SEO (Search Engine Optimization) — 5.2 / 10</h2>
  <table>
    <thead>
      <tr>
        <th style="width: 25%;">Signal</th>
        <th style="width: 57%;">Observation &amp; Evidence</th>
        <th style="width: 18%; text-align: center;">Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Crawl Directives</strong></td>
        <td><code>/robots.txt</code> and <code>/sitemap.xml</code> both return 404. Crawlers lack indexed route definitions.</td>
        <td style="text-align: center;"><span class="tag red">Critical 404</span></td>
      </tr>
      <tr>
        <td><strong>OpenGraph Domain</strong></td>
        <td><code>/faq</code> and <code>/comparison</code> pages hardcode og:url to <em>ceramicpromanchester.com</em>.</td>
        <td style="text-align: center;"><span class="tag red">Defect</span></td>
      </tr>
      <tr>
        <td><strong>Title Tag Lengths</strong></td>
        <td>Homepage title is 87 chars; Our Work is 88 chars. Google truncates above 60 chars.</td>
        <td style="text-align: center;"><span class="tag amber">Truncated</span></td>
      </tr>
      <tr>
        <td><strong>Meta Descriptions</strong></td>
        <td>Homepage is 197 chars, Services is 227 chars. Exceeds standard 155-160 char limit.</td>
        <td style="text-align: center;"><span class="tag amber">Truncated</span></td>
      </tr>
      <tr>
        <td><strong>Canonical Tags</strong></td>
        <td>Only /about declares an explicit canonical. Missing self-referencing canonicals on other pages.</td>
        <td style="text-align: center;"><span class="tag amber">Incomplete</span></td>
      </tr>
      <tr>
        <td><strong>Image Alt Attributes</strong></td>
        <td>Hero and gallery images feature keyword-rich, descriptive alt text.</td>
        <td style="text-align: center;"><span class="tag green">Good</span></td>
      </tr>
    </tbody>
  </table>

  <h2>GEO (Generative Engine Optimization) — 4.4 / 10</h2>
  <table>
    <thead>
      <tr>
        <th style="width: 25%;">GEO Signal</th>
        <th style="width: 57%;">AI Perception &amp; Citation Ability</th>
        <th style="width: 18%; text-align: center;">Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Founder E-E-A-T</strong></td>
        <td>The About story is written in the first person ("I founded Latin King Detailing..."), but the founder is never named. AI cannot build a Person entity node.</td>
        <td style="text-align: center;"><span class="tag red">Missing</span></td>
      </tr>
      <tr>
        <td><strong>Informational Guides</strong></td>
        <td>3 detailed guides ("Ceramic vs Wax", "UK Weather Care", "Paint Correction") exist in site-data.ts but have NO live URLs. AI bots cannot cite them.</td>
        <td style="text-align: center;"><span class="tag red">Unpublished</span></td>
      </tr>
      <tr>
        <td><strong>sameAs Entity Links</strong></td>
        <td>Social profiles (Instagram, TikTok, Facebook) are rendered in footer but missing in JSON-LD sameAs.</td>
        <td style="text-align: center;"><span class="tag amber">Missing</span></td>
      </tr>
      <tr>
        <td><strong>Certifications &amp; NAP</strong></td>
        <td>Ceramic Pro 9H accreditation, £5M insurance, and Flixton Road NAP are clearly declared.</td>
        <td style="text-align: center;"><span class="tag green">Strong</span></td>
      </tr>
    </tbody>
  </table>

  <h2>AEO (Answer Engine Optimization) — 4.8 / 10</h2>
  <table>
    <thead>
      <tr>
        <th style="width: 25%;">AEO Signal</th>
        <th style="width: 57%;">Snippet &amp; Voice Search Performance</th>
        <th style="width: 18%; text-align: center;">Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>FAQPage Schema</strong></td>
        <td>Zero FAQPage JSON-LD schema across the website. Google cannot award rich accordion snippets.</td>
        <td style="text-align: center;"><span class="tag red">Missing</span></td>
      </tr>
      <tr>
        <td><strong>Direct Definition Hooks</strong></td>
        <td>Answers on /faq lack concise 40-60 word definition paragraphs immediately beneath headings.</td>
        <td style="text-align: center;"><span class="tag amber">Needs Work</span></td>
      </tr>
      <tr>
        <td><strong>Comparison Snippets</strong></td>
        <td>Comparison table on /comparison lacks semantic table headers and caption for table snippets.</td>
        <td style="text-align: center;"><span class="tag amber">Needs Work</span></td>
      </tr>
      <tr>
        <td><strong>High-Intent Queries</strong></td>
        <td>Strong targeting of natural questions: "How much does ceramic coating cost?", "Is it worth it?".</td>
        <td style="text-align: center;"><span class="tag green">Good</span></td>
      </tr>
    </tbody>
  </table>
</div>

<!-- Page 4 -->
<div class="page">
  <div class="header-rule">
    <span><strong>${brandName}</strong> (${domain})</span>
    <span>SEO / GEO / AEO Comprehensive Audit Report</span>
  </div>

  <h1>4. Priority Recommendations Matrix</h1>
  <table>
    <thead>
      <tr>
        <th style="width: 15%; text-align: center;">Priority</th>
        <th style="width: 45%;">Action Item &amp; Recommended Solution</th>
        <th style="width: 14%; text-align: center;">Dimension</th>
        <th style="width: 13%; text-align: center;">Effort</th>
        <th style="width: 13%; text-align: center;">Impact</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="text-align: center;"><span class="tag red">CRITICAL</span></td>
        <td><strong>Create app/robots.ts &amp; app/sitemap.ts:</strong> Eliminate 404 crawl errors; allow Google and AI bots (GPTBot, PerplexityBot) to index all service routes.</td>
        <td style="text-align: center;">SEO / GEO</td>
        <td style="text-align: center;">15 min</td>
        <td style="text-align: center; font-weight: bold; color: #DC2626;">Immediate</td>
      </tr>
      <tr>
        <td style="text-align: center;"><span class="tag red">CRITICAL</span></td>
        <td><strong>Fix OG Domain Mismatches:</strong> Update <code>/faq</code> and <code>/comparison</code> metadata to reference <code>https://${domain}/...</code> instead of <em>ceramicpromanchester.com</em>.</td>
        <td style="text-align: center;">SEO</td>
        <td style="text-align: center;">5 min</td>
        <td style="text-align: center; font-weight: bold; color: #DC2626;">High</td>
      </tr>
      <tr>
        <td style="text-align: center;"><span class="tag orange">HIGH</span></td>
        <td><strong>Implement Homepage AutoRepair / LocalBusiness Schema:</strong> Declare official brand name, logo, geo-coordinates, openingHours, telephone, and sameAs social links.</td>
        <td style="text-align: center;">SEO / GEO</td>
        <td style="text-align: center;">30 min</td>
        <td style="text-align: center; font-weight: bold; color: #EA580C;">Very High</td>
      </tr>
      <tr>
        <td style="text-align: center;"><span class="tag orange">HIGH</span></td>
        <td><strong>Add FAQPage JSON-LD Schema:</strong> Inject structured FAQ data on <code>/faq</code> and homepage FAQ section for rich SERP accordions.</td>
        <td style="text-align: center;">AEO</td>
        <td style="text-align: center;">20 min</td>
        <td style="text-align: center; font-weight: bold; color: #EA580C;">High (CTR)</td>
      </tr>
      <tr>
        <td style="text-align: center;"><span class="tag orange">HIGH</span></td>
        <td><strong>Publish Standalone Guide Pages (/guides/[slug]):</strong> Render the 3 articles currently dormant in site-data.ts to capture AI search citations and long-tail traffic.</td>
        <td style="text-align: center;">GEO / AEO</td>
        <td style="text-align: center;">1 hour</td>
        <td style="text-align: center; font-weight: bold; color: #EA580C;">High</td>
      </tr>
      <tr>
        <td style="text-align: center;"><span class="tag amber">MEDIUM</span></td>
        <td><strong>Optimize Title &amp; Description Lengths:</strong> Trim titles to 50-60 chars and descriptions to 150-160 chars to prevent search snippet truncation.</td>
        <td style="text-align: center;">SEO</td>
        <td style="text-align: center;">30 min</td>
        <td style="text-align: center;">Medium</td>
      </tr>
      <tr>
        <td style="text-align: center;"><span class="tag green">QUICK WIN</span></td>
        <td><strong>Introduce Named Founder on About Page:</strong> Add the founder's full name, bio, and quote to satisfy Google E-E-A-T and AI entity extraction.</td>
        <td style="text-align: center;">GEO</td>
        <td style="text-align: center;">15 min</td>
        <td style="text-align: center;">High Trust</td>
      </tr>
    </tbody>
  </table>

  <h1>5. What's Working Well</h1>
  <div style="background: #F0FDF4; border: 1px solid #BBF7D0; border-radius: 8px; padding: 14px 18px;">
    <ul style="margin: 0; padding-left: 20px;">
      <li><strong>5.0★ Google Rating with 60+ Reviews:</strong> Exceptional social proof anchored directly to Google Business Profile.</li>
      <li><strong>Ceramic Pro 9H Factory Accreditation:</strong> Provides tangible authority and VIN-traceable warranty protection.</li>
      <li><strong>Local Geographic Consistency:</strong> Precise NAP and localized coverage across 10 Manchester &amp; Cheshire areas.</li>
      <li><strong>Modern, Performant Codebase:</strong> Built with Next.js 16 and Tailwind CSS 4 with high visual polish.</li>
    </ul>
  </div>

  <div style="margin-top: 30px; padding-top: 15px; border-top: 1px solid #CBD5E1; font-size: 8.5pt; color: #64748B; text-align: center;">
    Report compiled on ${auditDate} · Latin King Detailing (${domain}) · Antigravity Autonomous Audit
  </div>
</div>

</body>
</html>`;

  const htmlPath = path.resolve(__dirname, '../reports/audit-temp.html');
  fs.writeFileSync(htmlPath, html);
  console.log('HTML template written to:', htmlPath);

  const pdfPath = path.resolve(__dirname, '../reports/seo-audit-latinkingdetailing-co-uk-2026-11-20.pdf');
  const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

  try {
    execSync(`"${chromePath}" --headless --disable-gpu --no-pdf-header-footer --print-to-pdf="${pdfPath}" "${htmlPath}"`, {
      stdio: 'inherit',
    });
    console.log('PDF successfully written to:', pdfPath);
  } catch (err) {
    console.error('Error generating PDF with Chrome:', err.message);
  }
}

async function main() {
  await buildDocx();
  buildHtmlReport();
}

main().catch(console.error);

