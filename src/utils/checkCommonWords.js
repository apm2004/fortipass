import { commonPasswords } from "./commonPasswords";

export function containsCommonWord(password) {
  if (!password) return false;

  const lowerPassword = password.toLowerCase();
  return commonPasswords.some((word) =>
    lowerPassword.includes(word)
  );
}
