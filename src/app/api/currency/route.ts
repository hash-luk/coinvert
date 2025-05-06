export async function GET() {
  const res = await fetch("https://openexchangerates.org/api/currencies.json");
  return res.json();
}
