# Blood Alcohol Calculator - Frontend

[![MIT License](https://badges.frapsoft.com/os/mit/mit.svg)](https://github.com/BM-utils/BAC-Counter-Frontend/blob/main/LICENSE)
[![React](https://img.shields.io/badge/React-18+-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

## Built With

- **React**
- **Tailwind CSS**
- **Lucide React**
- **FastAPI**

## How It Works

The calculator uses the following inputs to estimate the blood alcohol level:

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

The backend processes this data using the Widmark formula and returns the estimated blood alcohol level.

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

- **Ioannis Michadasis (Frontend)** - [GitHub Profile](https://github.com/michadasis)
- **Apostolos Chalis (Backend)** - [GitHub Profile](https://github.com/TolisSth)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
---