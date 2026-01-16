# Blood Alcohol Calculator - Frontend

[![MIT License](https://badges.frapsoft.com/os/mit/mit.svg)](https://github.com/BM-utils/BAC-Counter-Frontend/blob/main/LICENSE)
[![React](https://img.shields.io/badge/React-18+-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

A modern, responsive React application for calculating Blood Alcohol Content (BAC). Features a beautiful gradient UI with real-time calculations powered by a FastAPI backend.


## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Real-time Calculation**: Instant BAC estimates using the Widmark formula
- **Status Indicators**: BAC levels (Sober, Slight Impairment, Impaired, Legally Intoxicated)
- **API Integration**: Connects to FastAPI backend for accurate calculations

## Built With

- **React** - Frontend framework
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **FastAPI** - Backend API (separate repository)

## How It Works

The calculator uses the following inputs to estimate BAC:

- **Gender** - Male or Female (affects distribution ratio)
- **Weight (kg)** - Body weight for calculation
- **Number of Drinks** - Total drinks consumed
- **Volume per Drink (ml)** - Size of each drink
- **Alcohol %** - Alcohol content percentage
- **Hours Since Last Drink** - Time elapsed since last consumption

The frontend calculates grams of alcohol consumed and sends a payload to the backend:

```javascript
{
  weight: Number,
  sex: "male" | "female",
  alc_g: Number,
  hrs: Number
}
```

The backend processes this data using the Widmark formula and returns the estimated BAC.

## BAC Interpretation

| BAC Range | Status | Color |
|-----------|--------|-------|
| < 0.02% | Sober | Green |
| 0.02% - 0.05% | Slight Impairment | Yellow |
| 0.05% - 0.08% | Impaired | Orange |
| ≥ 0.08% | Legally Intoxicated | Red |

## Related Projects

- [BAC Calculator Backend](https://github.com/BM-utils/BAC-counter-backend) - FastAPI backend for BAC calculations

## Authors

- **Apostolos Chalis (Backend)** - [GitHub Profile](https://github.com/TolisSth)
- **Ioannis Michadasis (Frontend)** - [GitHub Profile](https://github.com/michadasis)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
---

**Drink responsibly. Never drink and drive.**