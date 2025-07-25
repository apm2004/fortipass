export function getSuggestions(password) {
  const suggestions = [];

  if (password.length < 12) {
    suggestions.push("Use at least 12 characters");
  }

  if (!/[A-Z]/.test(password)) {
    suggestions.push("Add uppercase letters");
  }

  if (!/[a-z]/.test(password)) {
    suggestions.push("Add lowercase letters");
  }

  if (!/[0-9]/.test(password)) {
    suggestions.push("Include numbers");
  }

  if (!/[^a-zA-Z0-9]/.test(password)) {
    suggestions.push("Use special characters (!@#$...)");
  }

  if (/^[a-zA-Z0-9]*$/.test(password)) {
    suggestions.push("Avoid using only letters and numbers");
  }

  return suggestions;
}
