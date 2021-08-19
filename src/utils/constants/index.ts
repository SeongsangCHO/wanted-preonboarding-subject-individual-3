interface IDATE_OPTIONS {
  localeMatcher?: "best fit" | "lookup";
  weekday?: "long" | "short" | "narrow";
  era?: "long" | "short" | "narrow";
  year?: "numeric" | "2-digit";
  month?: "numeric" | "2-digit" | "long" | "short" | "narrow";
  day?: "numeric" | "2-digit";
  hour?: "numeric" | "2-digit";
  minute?: "numeric" | "2-digit";
  second?: "numeric" | "2-digit";
  timeZoneName?: "long" | "short";
  formatMatcher?: "best fit" | "basic";
  hour12?: boolean;
  timeZone?: string;
}

export const DATE_OPTIONS: IDATE_OPTIONS = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
export const DIFF_TIME = {
  kr: 9 * 60 * 60 * 1000,
};

export const DATE_FORMAT = "YYYY-MM-DD";
