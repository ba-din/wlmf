import { isBrowser } from "./is-browser";

export function isSmallScreen(): boolean {
  return isBrowser() && window.innerWidth <= 768;
}

export function isMdScreen(): boolean {
  return isBrowser() && window.innerWidth > 768 && window.innerWidth <= 1024;
}

export function isLgScreen(): boolean {
  return isBrowser() && window.innerWidth > 1024 && window.innerWidth <= 1280;
}

export function isXlScreen(): boolean {
  return isBrowser() && window.innerWidth >= 1281;
}
