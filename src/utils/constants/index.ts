interface IDATE_OPTIONS {
  weekday: any;
  year: any;
  month: any;
  day: any;
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
