const CONSENT_COOKIE = "hl_cookie_consent";
const ENGAGEMENT_COOKIE = "hl_engagement";
const consentMaxAge = 60 * 60 * 24 * 180;

function getCookie(name) {
  return document.cookie
    .split("; ")
    .find((cookie) => cookie.startsWith(`${name}=`))
    ?.split("=")[1];
}

function setCookie(name, value, maxAge) {
  document.cookie = `${name}=${encodeURIComponent(value)}; Max-Age=${maxAge}; Path=/; SameSite=Lax`;
}

function readEngagement() {
  try {
    return JSON.parse(decodeURIComponent(getCookie(ENGAGEMENT_COOKIE) || "{}"));
  } catch {
    return {};
  }
}

function recordEngagement(eventName) {
  if (getCookie(CONSENT_COOKIE) !== "accepted") return;
  const engagement = readEngagement();
  if (eventName === "visit") {
    engagement.pageViews = (engagement.pageViews || 0) + 1;
  } else {
    engagement[eventName] = (engagement[eventName] || 0) + 1;
  }
  engagement.lastSeen = new Date().toISOString();
  setCookie(ENGAGEMENT_COOKIE, JSON.stringify(engagement), consentMaxAge);
}

const banner = document.querySelector("#cookie-banner");
const consent = getCookie(CONSENT_COOKIE);
if (!consent) banner.hidden = false;
if (consent === "accepted") recordEngagement("visit");

document.querySelector("#accept-cookies").addEventListener("click", () => {
  setCookie(CONSENT_COOKIE, "accepted", consentMaxAge);
  banner.hidden = true;
  recordEngagement("visit");
});

document.querySelector("#reject-cookies").addEventListener("click", () => {
  setCookie(CONSENT_COOKIE, "rejected", consentMaxAge);
  banner.hidden = true;
});

document.querySelector('a[href^="mailto:"]').addEventListener("click", () => {
  recordEngagement("emailClicks");
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", () => document.activeElement?.blur());
});
