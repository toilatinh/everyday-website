const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

let initialized = false;

export function initializeAnalytics() {
  if (!measurementId || initialized || typeof window === "undefined") {
    return;
  }

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer?.push(arguments);
  };

  window.gtag("js", new Date());
  window.gtag("config", measurementId, {
    send_page_view: false,
  });

  initialized = true;
}

export function trackPageView(path: string) {
  if (!measurementId || typeof window === "undefined") {
    return;
  }

  initializeAnalytics();

  window.gtag?.("event", "page_view", {
    page_title: document.title,
    page_location: `${window.location.origin}${path}`,
    page_path: path,
  });
}

export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (!measurementId || typeof window === "undefined") {
    return;
  }

  initializeAnalytics();
  window.gtag?.("event", name, params);
}
