/**
 *
 * @param lightness number
 * @param variant string
 * @param step number
 * @returns number
 */
export function calculate_variant_lightness(
  lightness: number,
  variant: string,
  step: number
): number {
  const multiplier: number = step * 10;
  const percentage = (lightness / 100) * multiplier;

  if (variant === `dark`) {
    return lightness - percentage;
  }
  return lightness + percentage;
}
