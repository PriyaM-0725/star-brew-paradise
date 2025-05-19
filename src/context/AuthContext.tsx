
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type User = {
  id: string;
  email: string;
  name: string;
  rewardPoints?: number;
};

type AuthContextType = {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  error: string | null;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock functions for authentication
const mockLogin = async (email: string, password: string): Promise<User> => {
  // In a real app, this would be an API call to authenticate
  await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API delay
  
  // For demo purposes, auto-login with any email/password
  if (!email || !password) {
    throw new Error("Email and password are required");
  }
  
  return {
    id: "user-123",
    email,
    name: email.split('@')[0],
    rewardPoints: 150
  };
};

const mockRegister = async (name: string, email: string, password: string): Promise<User> => {
  // In a real app, this would be an API call to register
  await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API delay
  
  if (!name || !email || !password) {
    throw new Error("All fields are required");
  }
  
  return {
    id: "user-" + Math.floor(Math.random() * 1000),
    email,
    name,
    rewardPoints: 50 // New users get some points
  };
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  // Check for saved user on initial load
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error('Failed to parse saved user', error);
      }
    }
    setIsLoading(false);
  }, []);
  
  // Save user to localStorage when it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);
  
  const login = async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const loggedInUser = await mockLogin(email, password);
      setUser(loggedInUser);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to login");
      throw err;
    } finally {
      setIsLoading(false);
    }
  };
  
  const register = async (name: string, email: string, password: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const registeredUser = await mockRegister(name, email, password);
      setUser(registeredUser);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to register");
      throw err;
    } finally {
      setIsLoading(false);
    }
  };
  
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const value = {
    user,
    isLoading,
    login,
    register,
    logout,
    error
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
