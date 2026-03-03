import React from "react";

// Estraiamo esplicitamente le funzioni da React per evitare ReferenceError
const { createContext, useContext, useState, useEffect } = React;

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = sessionStorage.getItem("fit_user");
    try {
      return saved ? JSON.parse(saved) : null;
    } catch (e) {
      return null;
    }
  });

  const [token, setToken] = useState(() => {
    return sessionStorage.getItem("fit_token") || null;
  });

  const login = (userData) => {
    const userToken = userData.token;
    sessionStorage.setItem("fit_token", userToken);
    sessionStorage.setItem("fit_user", JSON.stringify(userData));
    setToken(userToken);
    setUser(userData);
  };

  const logout = () => {
    sessionStorage.removeItem("fit_token");
    sessionStorage.removeItem("fit_user");
    setToken(null);
    setUser(null);
  };

  // Sincronizzazione stato se cambiano i dati
  useEffect(() => {
    if (user && !token && user.token) {
      setToken(user.token);
    }
  }, [user, token]);

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        logout,
        isAuthenticated: !!token && !!user,
        role: user?.role,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve essere usato all'interno di un AuthProvider");
  }
  return context;
};
