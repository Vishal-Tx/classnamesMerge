import classNames from "classnames";
import { twMerge } from "tailwind-merge";

export type ClassValue =
  | ClassArray
  | ClassDictionary
  | string
  | number
  | null
  | boolean
  | undefined;
export type ClassDictionary = Record<string, unknown>;
export type ClassArray = ClassValue[];

export function cn(...inputs: ClassValue[]) {
  return twMerge(classNames(inputs));
}
