const apiAddress = process.env.api;

export const fetchDocs = async () => {
  const res = await fetch(apiAddress, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      EnglishDegreeName: "orthopedist",
      EnglishZoneName: "tehran",
      TagId: "0",
    }),
  });
  const { msg } = await res.json();

  if (msg.Success) {
    const { MedicativeInfo } = msg.Result;
    return MedicativeInfo;
  }

  return null;
};
