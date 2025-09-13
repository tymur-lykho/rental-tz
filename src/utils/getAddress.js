export default function getAddress(addressString) {
  const parts = addressString.split(",").map((s) => s.trim());
  const city = parts[parts.length - 2];
  const country = parts[parts.length - 1];

  return { country, city };
}
