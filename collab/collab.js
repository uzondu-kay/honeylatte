const CONSENT_COOKIE = "hl_cookie_consent";
const CONSENT_MAX_AGE = 60 * 60 * 24 * 180;
const banner = document.querySelector("#cookie-banner");

function getCookie(name) {
  return document.cookie.split("; ").find((cookie) => cookie.startsWith(`${name}=`))?.split("=")[1];
}

function setCookie(name, value, maxAge) {
  document.cookie = `${name}=${encodeURIComponent(value)}; Max-Age=${maxAge}; Path=/; SameSite=Lax`;
}

function loadVercelAnalytics() {
  if (document.querySelector('script[data-vercel-analytics]')) return;
  const script = document.createElement("script");
  script.defer = true;
  script.src = "/_vercel/insights/script.js";
  script.dataset.vercelAnalytics = "true";
  document.head.appendChild(script);
}

const consent = getCookie(CONSENT_COOKIE);
if (consent === "accepted") loadVercelAnalytics();
else if (!consent) banner.hidden = false;

document.querySelector("#accept-cookies").addEventListener("click", () => {
  setCookie(CONSENT_COOKIE, "accepted", CONSENT_MAX_AGE);
  banner.hidden = true;
  loadVercelAnalytics();
});

document.querySelector("#reject-cookies").addEventListener("click", () => {
  setCookie(CONSENT_COOKIE, "rejected", CONSENT_MAX_AGE);
  banner.hidden = true;
});
