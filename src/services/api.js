export const calculateBAC = async (payload) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/bac`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Failed to send data to backend");
  }

  return await response.json();
};