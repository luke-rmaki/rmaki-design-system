export function extractHSLValues(hsl: string) {
  const valueString = hsl.slice(4, -1);
  const hslValues = valueString.split(`,`);
  return hslValues.map((value) => parseInt(value, 10));
}
