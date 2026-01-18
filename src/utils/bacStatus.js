export const getBACStatus = (bacValue) => {
    if (bacValue === null || bacValue === undefined) {
      return { text: "", color: "", bg: "", border: "" };
    }
    
    if (bacValue < 0.02) {
      return {
        text: "Sober",
        color: "text-green-400",
        bg: "bg-green-500/10",
        border: "border-green-500/30"
      };
    }
    
    if (bacValue < 0.05) {
      return {
        text: "Slight Impairment",
        color: "text-yellow-400",
        bg: "bg-yellow-500/10",
        border: "border-yellow-500/30"
      };
    }
    
    if (bacValue < 0.08) {
      return {
        text: "Impaired",
        color: "text-orange-400",
        bg: "bg-orange-500/10",
        border: "border-orange-500/30"
      };
    }
    
    return {
      text: "Legally Intoxicated",
      color: "text-red-400",
      bg: "bg-red-500/10",
      border: "border-red-500/30"
    };
  };