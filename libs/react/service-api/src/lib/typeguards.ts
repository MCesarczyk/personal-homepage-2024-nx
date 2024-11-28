/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApiError } from "./types";

export const isApiError = (value: any): value is ApiError => {
  return (
    typeof value === "object" &&
    value !== null &&
    "status" in value &&
    "message" in value
  );
}
