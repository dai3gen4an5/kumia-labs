export const SITE_URL = "https://kumialabs.com";

export function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}
