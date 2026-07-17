# HIKARI Real Estate Utils

<p align="center">
  <strong>Bibliothèque de calculs immobiliers en JavaScript</strong>
</p>

## Installation

```bash
npm install @hikari/real-estate-utils
```

## Utilisation

```js
import { grossRentalYield, netRentalYield, monthlyPayment } from "@hikari/real-estate-utils";

// Rentabilité brute
const gross = grossRentalYield({ monthlyRent: 1200, price: 200000 });
// → 7.2%

// Rentabilité nette
const net = netRentalYield({
  monthlyRent: 1200,
  price: 200000,
  annualCharges: 2400,
  propertyTax: 1200,
  managementFee: 0.08,
});

// Mensualité de prêt
const payment = monthlyPayment({ principal: 180000, annualRate: 0.035, years: 25 });
// → 900.36
```

## Fonctions disponibles

| Fonction | Description |
|---|---|
| `grossRentalYield` | Rentabilité brute (%) |
| `netRentalYield` | Rentabilité nette (%) |
| `netNetRentalYield` | Rentabilité nette-nette (après impôt) |
| `monthlyPayment` | Mensualité de prêt |
| `amortizationSchedule` | Tableau d'amortissement |
| `borrowingCapacity` | Capacité d'emprunt |
| `dpeToLetter` | Conversion score DPE → lettre (A-G) |
| `cashFlow` | Cash-flow mensuel |

## Licence

MIT © HIKARI GROUP