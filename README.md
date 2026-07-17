<div align="center">

# ðï¸ HIKARI Real Estate Utils

**BibliothÃ¨que JavaScript de calculs immobiliers â rentabilitÃ©, cash-flow, DPE, amortissement**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE) [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/) [![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/) [![JavaScript](https://img.shields.io/badge/JavaScript-blue)]()
[![Version](https://img.shields.io/badge/version-v0.1.0-blue)](./CHANGELOG.md)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](./CONTRIBUTING.md)
[![Stars](https://img.shields.io/github/stars/HIKARI-GROUP/hikari-real-estate-utils)](https://github.com/HIKARI-GROUP/hikari-real-estate-utils)
[![Last Commit](https://img.shields.io/github/last-commit/HIKARI-GROUP/hikari-real-estate-utils)](https://github.com/HIKARI-GROUP/hikari-real-estate-utils/commits)
[![Discussions](https://img.shields.io/github/discussions/HIKARI-GROUP/hikari-real-estate-utils)](https://github.com/HIKARI-GROUP/hikari-real-estate-utils/discussions)

[ð Documentation](./docs/) Â· [ðºï¸ Roadmap](./ROADMAP.md) Â· [ð¤ Contributing](./CONTRIBUTING.md) Â· [ð» Examples](./examples/) Â· [ð§ª Tests](./tests/) Â· [ð¤ AI](./ai/) Â· [ð¼ Careers](./CAREERS.md)

</div>

---

## ð Overview

A JavaScript/TypeScript library for real estate financial calculations: rental yield, mortgage payments, amortization schedules, DPE conversion, and cash-flow analysis.

## â¨ Features

- ð Gross rental yield
- ð° Net rental yield (after charges)
- ð¦ Mortgage monthly payment
- ð Amortization schedule
- ð DPE score to letter (A-G)
- ðµ Cash-flow calculation
- ð Borrowing capacity
- ð§ª 100% test coverage

## ðï¸ Architecture

```mermaid
graph TD
    subgraph "HIKARI HIKARI Real Estate Utils"
        A[Frontend] --> B[Backend]
        B --> C[Database]
        B --> D[Integrations]
        B --> E[AI/LLM]
    end
```

See [Architecture](./docs/Architecture.md) for full details.

## ð Installation

```bash
npm install @hikari/real-estate-utils
```

## ð Usage

```javascript
import { grossRentalYield, monthlyPayment } from "@hikari/real-estate-utils";

const yield = grossRentalYield({ monthlyRent: 1200, price: 200000 });
// â 7.2%

const payment = monthlyPayment({ principal: 180000, annualRate: 0.035, years: 25 });
// â 900.36
```

## ð Project Structure

```
hikari-real-estate-utils/
âââ src/
â   âââ yields.ts        # Yield calculations
â   âââ amortization.ts   # Loan amortization
â   âââ dpe.ts            # DPE conversion
â   âââ cashflow.ts       # Cash-flow analysis
âââ tests/
âââ examples/
âââ docs/
```

## ð ï¸ Technologies

- TypeScript
- Vitest
- JavaScript

## ð Documentation

| Document | Description |
|---|---|
| [Architecture](./docs/Architecture.md) | System architecture and design decisions |
| [Backend](./docs/Backend.md) | Backend services and API |
| [Frontend](./docs/Frontend.md) | Frontend architecture |
| [Database](./docs/Database.md) | Database schema and operations |
| [API](./docs/API.md) | API conventions |
| [Authentication](./docs/Authentication.md) | Auth flows |
| [Security](./docs/Security.md) | Security practices |
| [Deployment](./docs/Deployment.md) | Deployment guide |
| [Coding Standards](./docs/Coding-Standards.md) | Code conventions |
| [Testing](./docs/Testing.md) | Testing guide |
| [CI-CD](./docs/CI-CD.md) | CI/CD pipeline |
| [Git Workflow](./docs/Git-Workflow.md) | Branching & PR process |
| [Onboarding](./docs/Developer-Onboarding.md) | Developer onboarding |
| [Environment](./docs/Environment.md) | Environment setup |

## ðºï¸ Roadmap

See [ROADMAP.md](./ROADMAP.md) for our full vision.

## ð¤ Contributing

We welcome contributions! Please read [CONTRIBUTING.md](./CONTRIBUTING.md) first.

- ð [Report a bug](https://github.com/HIKARI-GROUP/hikari-real-estate-utils/issues/new?labels=bug)
- ð¡ [Request a feature](https://github.com/HIKARI-GROUP/hikari-real-estate-utils/issues/new?labels=enhancement)
- ð [Improve docs](https://github.com/HIKARI-GROUP/hikari-real-estate-utils/issues/new?labels=documentation)
- ð [Good first issues](https://github.com/HIKARI-GROUP/hikari-real-estate-utils/labels/good%20first%20issue)

## ð License

MIT Â© HIKARI GROUP

## ð¼ Careers

We're hiring! See [CAREERS.md](./CAREERS.md) for open positions.

## ð Links

- ð¢ [HIKARI GROUP](https://github.com/HIKARI-GROUP)
- ð [Website](https://hikari-group.tech)
- ð¼ [LinkedIn](https://www.linkedin.com/company/hikari-group)
- ð§ [Contact](mailto:contact@hikari-group.tech)

---

<div align="center">
  <sub>Built with â¤ï¸ by <a href="https://github.com/HIKARI-GROUP">HIKARI GROUP</a></sub>
</div>
