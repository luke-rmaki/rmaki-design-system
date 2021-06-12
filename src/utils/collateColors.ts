export function collateColors() {
  const colorList = [`black`, `purple`, `accent`, `white`];
  const allStylesheets = Array.from(document.styleSheets);
  const stylesheets = allStylesheets
    .filter((sheet) => {
      const node = sheet.ownerNode;
      return `styled` in node?.dataset;
    })
    .reduce(
      (acc, value) =>
        acc
          .concat([...value.cssRules])
          .filter((rule: CSSRule) => rule.type === 1)
          .reduce((acc, rule) => {
            const props = [...rule.style]
              .map((propName) => [
                propName.trim(),
                rule.style.getPropertyValue(propName).trim(),
              ])
              .filter(([propName]) => propName.indexOf(`--`) === 0);
            return [...acc, ...props];
          }, []),
      []
    );
  const colors = stylesheets
    .filter((style: string[]) => {
      const color = style[0].split(`-`)[2];
      return colorList.includes(color);
    })
    .sort((a: string[], b: string[]) => {
      const aColor = a[0].split(`-`)[2];
      const bColor = b[0].split(`-`)[2];
      return aColor === bColor ? 0 : 1;
    });
  return colors;
}
