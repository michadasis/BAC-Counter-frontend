export const calculateBAC = async (payload) => {
  const backendUrl = `${process.env.REACT_APP_BACKEND_URL}`;
  
  //Debug logs
  console.log('Backend URL:', backendUrl);
  console.log('Payload:', payload);
  
  const response = await fetch(`${backendUrl}/bac`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('Backend error:', errorText);
    throw new Error("Failed to send data to backend");
  }

  return await response.json();
};