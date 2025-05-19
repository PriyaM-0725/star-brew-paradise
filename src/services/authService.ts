
import { fetchData, getToken, withAuth } from "./api";

export type User = {
  id: string;
  name: string;
  email: string;
  rewardPoints: number;
  createdAt: string;
};

export type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
  isAuthenticated: boolean;
};

export const login = async (email: string, password: string): Promise<User> => {
  const response = await fetchData<{ user: User; token: string }>("/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
  
  localStorage.setItem("token", response.token);
  return response.user;
};

export const register = async (
  name: string,
  email: string,
  password: string
): Promise<User> => {
  const response = await fetchData<{ user: User; token: string }>("/auth/register", {
    method: "POST",
    body: JSON.stringify({ name, email, password }),
  });
  
  localStorage.setItem("token", response.token);
  return response.user;
};

export const logout = (): void => {
  localStorage.removeItem("token");
};

export const getCurrentUser = async (): Promise<User | null> => {
  if (!getToken()) return null;
  
  try {
    const user = await fetchData<User>("/auth/me", withAuth());
    return user;
  } catch (error) {
    localStorage.removeItem("token");
    return null;
  }
};

export const updateProfile = async (
  data: Partial<{ name: string; email: string; password: string; currentPassword: string }>
): Promise<User> => {
  return await fetchData<User>("/auth/profile", {
    method: "PUT",
    body: JSON.stringify(data),
    ...withAuth(),
  });
};
