# Prompt Engineering

> Best practices for LLM prompts in the HIKARI ecosystem.

## Principles

1. **Be specific** — Vague prompts produce vague results
2. **Provide context** — Give the LLM relevant background
3. **Define output format** — Specify JSON schema when structured data is needed
4. **Iterate** — Test, measure, refine

## Structure

```
[ROLE]     You are a real estate investment analyst.
[CONTEXT]  HIKARI is a PropTech company analyzing French properties.
[TASK]     Analyze this listing for investment potential.
[INPUT]    {listing_data}
[OUTPUT]   Return JSON: { score, recommendation, risks[], opportunities[] }
```

## Example

```typescript
const prompt = `You are a HIKARI real estate analyst.
Analyze this property:
- Price: ${price}€
- Surface: ${surface}m²
- City: ${city}
- DPE: ${dpe}
Return JSON with: score, recommendation, risks[], opportunities[]`;
```

## Tips

- Use `response_json_schema` for structured output
- Provide few-shot examples for complex tasks
- Break long tasks into smaller prompts
- Cache results for repeated queries
