import { createContext, useEffect, useState } from "react";

import { ENV } from "../../config/env.js";
import { ENDPOINTS } from "../../config/apiEndpoints.js";
import { apiClient, mockDelay } from "../services/apiClient.js";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("fp_user");

    if (!storedUser) {
      return null;
    }

    try {
      return JSON.parse(storedUser);
    } catch {
      localStorage.removeItem("fp_user");
      return null;
    }
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("fp_user", JSON.stringify(user));
    } else {
      localStorage.removeItem("fp_user");
    }
  }, [user]);

  useEffect(() => {
    if (ENV.USE_MOCKS || user) {
      return;
    }

    apiClient
      .get(ENDPOINTS.auth.me)
      .then((response) => {
        const authenticatedUser =
          response?.user || response?.data?.user || response;

        if (authenticatedUser?.id) {
          setUser(authenticatedUser);
        }
      })
      .catch(() => {
        // No active session.
      });
  }, []);

  /**
   * Google authentication.
   *
   * In production this receives the Google OAuth
   * authorization code returned by GIS.
   */
  const loginWithGoogle = async (code) => {
    if (ENV.USE_MOCKS) {
      await mockDelay(null);

      const demoUser = {
        id: "demo",
        username: "student",
        name: "Demo Student",
        email: "demo@example.com",
        role: "student",
      };

      setUser(demoUser);

      return demoUser;
    }

    if (!code) {
      throw new Error("Google did not return an authorization code.");
    }

    const response = await apiClient.post(ENDPOINTS.auth.google, {
      code,
    });

    const authenticatedUser =
      response?.user || response?.data?.user || response;

    if (!authenticatedUser?.id) {
      throw new Error("The server did not return an authenticated user.");
    }

    setUser(authenticatedUser);

    return authenticatedUser;
  };

  const logout = async () => {
    try {
      if (!ENV.USE_MOCKS) {
        await apiClient.post(ENDPOINTS.auth.logout, {});
      }
    } finally {
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        loginWithGoogle,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
