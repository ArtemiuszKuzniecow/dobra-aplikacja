type Mods = Record<string, boolean | string>;

export function classNames(cls: string, mod: Mods, additional: string[]): string {
  return [
    cls,
    ...additional,
    ...Object.entries(mod)
      .filter(([_className, value]) => Boolean(value))
      .map(([className]) => className)
  ]
    .join(' ');
}