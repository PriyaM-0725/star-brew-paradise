
import { toast } from "sonner";

const API_URL = "https://api.example.com"; // Replace with your actual API URL in production

// Generic fetch wrapper with error handling
export async function fetchData<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Something went wrong");
    }

    return await response.json();
  } catch (error: any) {
    toast.error(error.message || "An error occurred");
    throw error;
  }
}

// Get authentication token from local storage
export const getToken = (): string | null => {
  return localStorage.getItem("token");
};

// Add auth header to request
export const withAuth = (options: RequestInit = {}): RequestInit => {
  const token = getToken();
  return {
    ...options,
    headers: {
      ...options.headers,
      Authorization: token ? `Bearer ${token}` : "",
    },
  };
};
