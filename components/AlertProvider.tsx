"use client";

import React, { createContext, useContext, useState } from "react";
import { Alert } from "./ui/alert";

interface AlertContextType {
  showAlert: (message: string, type?: "success" | "error" | "warning" | "info", duration?: number) => void;
}

const AlertContext = createContext<AlertContextType | undefined>(undefined);

export function AlertProvider({ children }: { children: React.ReactNode }) {
  const [alerts, setAlerts] = useState<
    Array<{
      id: number;
      message: string;
      type: "success" | "error" | "warning" | "info";
      duration: number;
    }>
  >([]);

  const showAlert = (message: string, type: "success" | "error" | "warning" | "info" = "info", duration = 3000) => {
    const id = Date.now();
    setAlerts((prev) => [...prev, { id, message, type, duration }]);
  };

  const handleAlertClose = (id: number) => {
    setAlerts((prev) => prev.filter((alert) => alert.id !== id));
  };

  return (
    <AlertContext.Provider value={{ showAlert }}>
      {children}
      {alerts.map((alert) => (
        <Alert
          key={alert.id}
          message={alert.message}
          type={alert.type}
          duration={alert.duration}
          onClose={() => handleAlertClose(alert.id)}
        />
      ))}
    </AlertContext.Provider>
  );
}

export function useAlert() {
  const context = useContext(AlertContext);
  if (context === undefined) {
    throw new Error("useAlert must be used within an AlertProvider");
  }
  return context;
}
