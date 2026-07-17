# LLM Best Practices

> How HIKARI uses LLMs responsibly and efficiently.

## Model Selection

| Model | Use Case | Cost |
|---|---|---|
| gpt-4o-mini | Fast, simple tasks | Low |
| gpt-4o | Complex reasoning | Medium |
| claude-sonnet | Long context, nuanced analysis | Medium |
| gemini-flash | Web search + vision | Low |

## Cost Optimization

1. **Cache results** — Don't call the LLM for the same input twice
2. **Use smaller models** — Default to mini, upgrade only when needed
3. **Batch requests** — Process multiple items in one call
4. **Limit output tokens** — Set max_tokens appropriately

## Quality

1. **Validate output** — Check JSON schema before using
2. **Handle errors** — LLM calls can fail; have fallbacks
3. **Human review** — Critical decisions need human validation
4. **Log everything** — Track inputs, outputs, model, cost

## Security

- Never send PII to external LLMs without consent
- Don't expose API keys in frontend code
- Rate-limit user-facing LLM features
- Sanitize LLM output before rendering (XSS prevention)
