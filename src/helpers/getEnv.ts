const env: { [k: string]: string } = {};

export default (key: string): string => {
  if (!env[key]) env[key] = process.env[key] as string;
  return env[key];
};
