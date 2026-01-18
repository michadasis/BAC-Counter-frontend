export const calculateAlcoholGrams = (drinks, volume, alcoholPercent) => {
    return Number(drinks) * Number(volume) * (Number(alcoholPercent) / 100) * 0.789;
  };
  
  export const validateInputs = (weight, drinks, alcoholPercent, hours, drinkVolume) => {
    return weight && drinks && alcoholPercent && hours && drinkVolume;
  };