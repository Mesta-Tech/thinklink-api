interface I_HidePassword {
  password?: string;
}

export default function <T extends I_HidePassword>(obj: T): T {
  if (obj) obj.password = (null as unknown) as string;
  return obj;
}
