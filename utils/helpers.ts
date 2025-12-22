import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function transformObjectKeys<T extends Record<string, unknown>>(
  newKeyMap: Record<string, string>,
  object: T,
) {
  const transformedObject: Record<string, unknown> = {};

  for (const oldKey in object) {
    const newKey = newKeyMap[oldKey] || oldKey;
    transformedObject[newKey] = object[oldKey];
  }

  return transformedObject;
}

export function formatPhone(value: string): string {
  const cleaned = value.replace(/\D/g, ""); // Remove non-digits

  if (cleaned.length <= 10) {
    // Landline or short format
    return cleaned.replace(/^(\d{2})(\d{4})(\d{0,4})$/, "($1) $2-$3").trim();
  } else {
    // Mobile format with 9 digits
    return cleaned.replace(/^(\d{2})(\d{5})(\d{0,4})$/, "($1) $2-$3").trim();
  }
}

export function formatCEP(value: string): string {
  const cleaned = value.replace(/\D/g, "");
  if (cleaned.length <= 5) {
    return cleaned;
  }
  return `${cleaned.slice(0, 5)}-${cleaned.slice(5, 8)}`;
}

export function formatTime(value: string): string {
  const numbers = value.replace(/\D/g, "");

  if (numbers.length <= 2) {
    return numbers;
  } else if (numbers.length <= 4) {
    return `${numbers.slice(0, 2)}:${numbers.slice(2)}`;
  } else {
    return `${numbers.slice(0, 2)}:${numbers.slice(2, 4)}`;
  }
}

export function ensureSlashAtStart(string = "") {
  if (!string?.startsWith("/")) {
    return `/${string}`;
  }

  return string;
}

export function getYouTubeVideoId(url: string): string | null {
  const shortMatch = url.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);
  if (shortMatch) {
    return shortMatch[1];
  }

  try {
    const parsed = new URL(url);
    return parsed.searchParams.get("v");
  } catch {
    return null;
  }
}

export function getYouTubeIframeLink(url: string): string | null {
  const id = getYouTubeVideoId(url);
  return id ? `https://www.youtube.com/embed/${id}` : null;
}

export function formatDayMonth(dateStr: string): string {
  const [day, month] = dateStr.split("/");
  return `${day}.${month}`;
}
