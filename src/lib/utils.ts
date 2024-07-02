import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import readingTime from "reading-time";
import { formatDistanceToNow } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function extractTextFromBlock(block: SanityBlock): string {
  return block.children.map(child => child.text).join(' ');
}

export function calculateReadingTime(content: PostContent): string {
  const textContent = content.map(extractTextFromBlock).join(' ');
  const stats = readingTime(textContent);
  return stats.text;
}

export function relativeTime(date: string) {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
}
