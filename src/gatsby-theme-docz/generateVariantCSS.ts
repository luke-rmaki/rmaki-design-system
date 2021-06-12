import { css } from 'styled-components';
import { Hues, Saturation, Lightness, step, variants } from './Colors';

export function generateVariantCSS() {
  const keys = Object.keys(variants);
  const variantArray = keys.map((key) => {
    const colorVariant = variants[key].map((variant) => {
      const [color, variantType, variantStep] = variant.split(`-`);
      const hue = Hues[color];
      const sat = Saturation[color];
      const lightModifier = step * parseInt(variantStep, 10);
      let light;
      if (variantType === `dark`) {
        light = Lightness[color] - lightModifier;
      } else {
        light = Lightness[color] + lightModifier;
      }
      return `--${color.toLowerCase()}-${variantType}-${variantStep}: hsl(${hue}, ${sat}%, ${light}%);`;
    });
    return colorVariant;
  });
  return css`
    ${variantArray.flat().join(`;\n`)}
  `;
}
