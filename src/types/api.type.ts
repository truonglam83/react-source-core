/**
 * Standard API response format from backend
 */
export interface ApiResponse<T> {
  code: number;
  message: string;
  data: T;
}
