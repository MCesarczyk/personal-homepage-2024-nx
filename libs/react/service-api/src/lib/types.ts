export enum ApiMethod {
  GET = "GET",
  PUT = "PUT",
  POST = "POST",
  PATCH = "PATCH",
  DELETE = "DELETE",
}

export interface ApiError {
  status: number;
  message: string;
}
