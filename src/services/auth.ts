
import { fetchData } from "./api";

type LoginCredentials = {
  email: string;
  password: string;
};

type RegisterData = {
  name: string;
  email: string;
  password: string;
};

type LoginResponse = {
  token: string;
  user: any;
};

export const loginUser = async (
  credentials: LoginCredentials
): Promise<LoginResponse> => {
  const response = await fetchData<LoginResponse>("/auth/login", {
    method: "POST",
    body: JSON.stringify(credentials),
  });
  
  // Store token in localStorage
  localStorage.setItem("token", response.token);
  
  return response;
};

export const registerUser = async (
  userData: RegisterData
): Promise<LoginResponse> => {
  const response = await fetchData<LoginResponse>("/auth/register", {
    method: "POST",
    body: JSON.stringify(userData),
  });
  
  // Store token in localStorage
  localStorage.setItem("token", response.token);
  
  return response;
};

export const logoutUser = (): void => {
  localStorage.removeItem("token");
};

export const checkAuth = async (): Promise<any> => {
  const token = localStorage.getItem("token");
  
  if (!token) {
    return null;
  }
  
  try {
    return await fetchData<any>("/auth/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    localStorage.removeItem("token");
    return null;
  }
};
