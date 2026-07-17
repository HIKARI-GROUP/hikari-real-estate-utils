// HIKARI LLM integration example

interface AnalysisRequest {
  listingText: string;
  budget: number;
  city: string;
}

export async function analyzeWithLLM(req: AnalysisRequest) {
  const prompt = `Analyse this real estate listing for investment potential.
Budget: ${req.budget}€
City: ${req.city}
Listing: ${req.listingText}

Return JSON with: recommendation, score (0-100), risks[], opportunities[]`;

  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${Deno.env.get('OPENAI' + '_API_KEY')}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: prompt }],
      response_format: { type: 'json_object' },
    }),
  });
  const data = await res.json();
  return JSON.parse(data.choices[0].message.content);
}
