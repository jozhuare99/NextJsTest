import {clsx} from "clsx";
import {twMerge} from 'tailwind-merge';

export function CN(...inputs){
  return twMerge(clsx(inputs));
}