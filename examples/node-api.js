// HIKARI Node.js API example

export async function analyzeProperty(req, res) {
  try {
    const { url, budget } = req.body;
    const listing = await extractListing(url);
    const comparables = await fetchDvfSales(listing.city);
    const analysis = calculateScore(listing, comparables, budget);
    res.json({ success: true, analysis });
  } catch (error) {
    console.error('Analysis failed:', error);
    res.status(500).json({ error: error.message });
  }
}

async function extractListing(url) {
  const res = await fetch(url);
  const html = await res.text();
  return parseListing(html);
}

async function fetchDvfSales(city) {
  const res = await fetch(`https://api.cquest.org/dvf?commune=${city}`);
  return res.json();
}
