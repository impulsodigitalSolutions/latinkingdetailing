/**
 * IndexNow Deployment Ping Script
 * Automatically notifies IndexNow (Bing, Yandex, Seznam, Naver) of updated site URLs upon deployment.
 *
 * Usage: node scripts/ping-indexnow.mjs
 */

const INDEXNOW_KEY = 'c7b4f59e6a32497bb52309e4a81df22e';
const HOST = 'www.latinkingdetailing.co.uk';
const BASE_URL = `https://${HOST}`;

const URLS_TO_SUBMIT = [
  `${BASE_URL}/`,
  `${BASE_URL}/services`,
  `${BASE_URL}/our-work`,
  `${BASE_URL}/locations`,
  `${BASE_URL}/comparison`,
  `${BASE_URL}/reviews`,
  `${BASE_URL}/faq`,
  `${BASE_URL}/about`,
  `${BASE_URL}/guides`,
  `${BASE_URL}/sitemap`,
  // 7 services
  `${BASE_URL}/services/ceramic-coating`,
  `${BASE_URL}/services/machine-polishing`,
  `${BASE_URL}/services/leather-coating`,
  `${BASE_URL}/services/the-kings-detail`,
  `${BASE_URL}/services/deep-clean-engine-bay`,
  `${BASE_URL}/services/full-valet`,
  `${BASE_URL}/services/maintenance-wash`,
  // 3 guides
  `${BASE_URL}/guides/ceramic-coating-vs-traditional-wax`,
  `${BASE_URL}/guides/winter-car-care-manchester-salt-protection`,
  `${BASE_URL}/guides/paint-correction-science-swirl-removal`,
  // 10 locations
  `${BASE_URL}/locations/urmston`,
  `${BASE_URL}/locations/flixton`,
  `${BASE_URL}/locations/stretford`,
  `${BASE_URL}/locations/sale`,
  `${BASE_URL}/locations/irlam`,
  `${BASE_URL}/locations/eccles`,
  `${BASE_URL}/locations/altrincham`,
  `${BASE_URL}/locations/hale`,
  `${BASE_URL}/locations/bowdon`,
  `${BASE_URL}/locations/partington`,
];

async function pingIndexNow() {
  console.log(`Pinging IndexNow for ${URLS_TO_SUBMIT.length} URLs on ${HOST}...`);

  const payload = {
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: `${BASE_URL}/${INDEXNOW_KEY}.txt`,
    urlList: URLS_TO_SUBMIT,
  };

  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    if (response.status === 200 || response.status === 202) {
      console.log(`✅ IndexNow ping succeeded (HTTP ${response.status})!`);
    } else {
      const text = await response.text();
      console.warn(`⚠️ IndexNow responded with HTTP ${response.status}: ${text}`);
    }
  } catch (error) {
    console.error('❌ Failed to ping IndexNow API:', error.message);
  }
}

pingIndexNow();
