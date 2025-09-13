export default function getIconId(title) {
  if (title.includes("Year")) return "calendar";
  if (title.includes("Type")) return "car";
  if (title.includes("Fuel")) return "fuel-pump";
  if (title.includes("Engine")) return "gear";
  return "check-circle";
}
