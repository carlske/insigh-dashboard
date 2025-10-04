
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { ClassValue } from 'clsx';
/**
 * It should be into the design-system but I'LL use it for the dashboard too, I called it "shared"
 * This is a utility function to merge class names conditionally and intelligently.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
