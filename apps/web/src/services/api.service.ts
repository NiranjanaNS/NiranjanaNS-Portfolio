const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000";

export function getApiUrl(path: string) {
  return new URL(path, apiBaseUrl).toString();
}
