type Mods = Record<string, boolean | string>;

export function classNames(
  cls: string,
  mod?: Mods,
  additional?: string[]
): string {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mod)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .filter(([_, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(" ");
}
