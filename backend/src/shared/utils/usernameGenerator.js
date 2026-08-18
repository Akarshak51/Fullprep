export function baseUsername(name = "student", email = "") {
  const source = name || email.split("@")[0] || "student";
  return source.toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "")
    .slice(0, 24) || "student";
}
