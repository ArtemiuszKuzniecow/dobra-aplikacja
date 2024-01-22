type Mods = Record<string, boolean | string>;

export function classNames(
  cls: string,
  mod?: Mods,
  additional?: string[]
): string  {
  const additionalClasses = Array.isArray(additional) ? additional.filter(Boolean) : [];

  const modClasses = mod
    ? Object.entries(mod)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .filter(([_, value]) => Boolean(value))
        .map(([className]) => className)
    : [];

  return [cls, ...additionalClasses, ...modClasses].join(" ");
}