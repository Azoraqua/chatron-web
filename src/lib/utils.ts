import { twMerge } from "tailwind-merge";

// @ts-expect-error Allow for various types, we don't really care.
export const cn = (...args: unknown[]) => twMerge(args);