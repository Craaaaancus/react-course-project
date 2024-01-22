type Mods = Record<string, boolean | string>;

export function classNames(mainClass: string, mods: Mods, additional: string[]): string {
  return [
    mainClass,
    ...additional,
    ...Object
        .entries(mods)
        .filter(([_, isTrue]) => Boolean(isTrue))
        .map(([keyClass]) => keyClass)
  ].join(' ');
}
