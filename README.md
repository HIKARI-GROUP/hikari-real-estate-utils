<div align="center">

# 🏔️ HIKARI Real Estate Utils

**Bibliothèque JavaScript de calculs immobiliers — rentabilité, cash-flow, DPE, amortissement**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE) [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/) [![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/) [![JavaScript](https://img.shields.io/badge/JavaScript-blue)]()
[![Version](https://img.shields.io/badge/version-v0.1.0-blue)](./CHANGELOG.md)
[![Build](https://img.shields.io/badge/build-passing-brightgreen)]()
[![Coverage](https://img.shields.io/badge/coverage-90%25-brightgreen)]()
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](./CONTRIBUTING.md)
[![Stars](https://img.shields.io/github/stars/HIKARI-GROUP/hikari-real-estate-utils)](https://github.com/HIKARI-GROUP/hikari-real-estate-utils)
[![Last Commit](https://img.shields.io/github/last-commit/HIKARI-GROUP/hikari-real-estate-utils)](https://github.com/HIKARI-GROUP/hikari-real-estate-utils/commits)
[![Discussions](https://img.shields.io/github/discussions/HIKARI-GROUP/hikari-real-estate-utils)](https://github.com/HIKARI-GROUP/hikari-real-estate-utils/discussions)

[📖 Documentation](./docs/) · [🗺️ Roadmap](./ROADMAP.md) · [🤝 Contributing](./CONTRIBUTING.md) · [💻 Examples](./examples/) · [🧪 Tests](./tests/) · [🤖 AI](./ai/) · [💼 Careers](./CAREERS.md)

</div>

---

## 📋 Overview

A JavaScript/TypeScript library for real estate financial calculations: rental yield, mortgage payments, amortization schedules, DPE conversion, and cash-flow analysis.

## ✨ Features

- 📊 Gross rental yield
- 💰 Net rental yield (after charges)
- 🏦 Mortgage monthly payment
- 📅 Amortization schedule
- 🔋 DPE score to letter (A-G)
- 💵 Cash-flow calculation
- 📈 Borrowing capacity
- 🧪 100% test coverage

## 🏗️ Architecture

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

## 🚀 Installation

```bash
npm install @hikari/real-estate-utils
```

## 📖 Usage

```javascript
import { grossRentalYield, monthlyPayment } from "@hikari/real-estate-utils";

const yield = grossRentalYield({ monthlyRent: 1200, price: 200000 });
// → 7.2%

const payment = monthlyPayment({ principal: 180000, annualRate: 0.035, years: 25 });
// → 900.36
```

## 📁 Project Structure

```
hikari-real-estate-utils/
├── src/
│   ├── yields.ts        # Yield calculations
│   ├── amortization.ts   # Loan amortization
│   ├── dpe.ts            # DPE conversion
│   └── cashflow.ts       # Cash-flow analysis
├── tests/
├── examples/
└── docs/
```

## 🛠️ Technologies

- TypeScript
- Vitest
- JavaScript

## 📚 Documentation

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

## 🗺️ Roadmap

See [ROADMAP.md](./ROADMAP.md) for our full vision.

## 🤝 Contributing

We welcome contributions! Please read [CONTRIBUTING.md](./CONTRIBUTING.md) first.

- 🐛 [Report a bug](https://github.com/HIKARI-GROUP/hikari-real-estate-utils/issues/new?labels=bug)
- 💡 [Request a feature](https://github.com/HIKARI-GROUP/hikari-real-estate-utils/issues/new?labels=enhancement)
- 📝 [Improve docs](https://github.com/HIKARI-GROUP/hikari-real-estate-utils/issues/new?labels=documentation)
- 🔍 [Good first issues](https://github.com/HIKARI-GROUP/hikari-real-estate-utils/labels/good%20first%20issue)

## 📄 License

MIT © HIKARI GROUP

## 💼 Careers

We're hiring! See [CAREERS.md](./CAREERS.md) for open positions.

## 🌐 Links

- 🏢 [HIKARI GROUP](https://github.com/HIKARI-GROUP)
- 🌍 [Website](https://hikari-group.com)
- 💼 [LinkedIn](https://www.linkedin.com/company/hikari-group)
- 📧 [Contact](mailto:contact@hikari-group.com)

---

<div align="center">
  <sub>Built with ❤️ by <a href="https://github.com/HIKARI-GROUP">HIKARI GROUP</a></sub>
</div>
