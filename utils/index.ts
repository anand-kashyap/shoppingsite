export const capitalizeTitle = (str: string, prefix?: string) => {
  if (str === '/') return null;
  const firstChar = str[1].toUpperCase();
  return ` ${prefix} ` + firstChar + str.slice(2);
};
