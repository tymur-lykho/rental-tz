export default function getAddress(addressString) {
  if (!addressString) return { country: "", city: "" };
  const parts = addressString.split(",").map((s) => s.trim());
  const city = parts[parts.length - 2];
  const country = parts[parts.length - 1];

  return { country, city };
}
