export function trackEvent(eventName: string, metadata: Record<string, unknown> = {}) {
  if (process.env.NODE_ENV === "development") {
    console.info("[analytics]", eventName, metadata);
  }
}
