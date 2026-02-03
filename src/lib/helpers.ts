import toast from "react-hot-toast";
import { Listing } from "../../generated/prisma";
import { Review } from "./types";
import {
  differenceInCalendarDays,
  format,
  formatDistanceToNow,
} from "date-fns";
import { date } from "zod";

export const averageRating = (reviews: Review[]) =>
  reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

export function fixEmojiEncoding(str: string) {
  return decodeURIComponent(str);
}

export function validatePrice(draft: Partial<Listing>) {
  if (draft.price === 0 || draft.price! > 100000) {
    return toast.error("Invalid Price");
  }
}

export const priceFormatter = new Intl.NumberFormat("nb-NO");

export const timeAgo = (date: Date) => {
  return formatDistanceToNow(date, { addSuffix: true });
};

export const numberOfNights = (checkOutDate: Date, checkInDate: Date) => {
  const days = differenceInCalendarDays(checkOutDate, checkInDate);

  return days;
};
export const dateRangeText = (
  checkInDate: Date | undefined,
  checkOutDate: Date | undefined,
) => {
  return checkInDate && checkOutDate
    ? `${format(checkInDate, "MMM dd")} - ${format(checkOutDate, "MMM dd, yyyy")}`
    : null;
};
