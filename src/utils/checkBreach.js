import sha1 from "js-sha1";

export async function checkPasswordBreach(password) {
  const sha1Hash = sha1(password).toUpperCase();
  const prefix = sha1Hash.substring(0, 5);
  const suffix = sha1Hash.substring(5);

  const url = `https://api.pwnedpasswords.com/range/${prefix}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch from HIBP");

    const text = await response.text();
    const lines = text.split("\n");

    for (let line of lines) {
      const [hashSuffix, count] = line.split(":");
      if (hashSuffix === suffix) {
        return parseInt(count);
      }
    }

    return 0; // Not found
  } catch (error) {
    console.error("Breach check error:", error);
    return -1; // Error
  }
}
