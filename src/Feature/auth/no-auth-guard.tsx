import React, { useEffect, useState, ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { getDeviceId } from "../model/pixlip-model";

interface UnProtectedRouteProps {
  children: ReactNode;
}

export const UnProtectedRoute: React.FC<UnProtectedRouteProps> = ({
  children,
}) => {
  const [token, setToken] = useState<number | null>(null);

  useEffect(() => {
    const fetchToken = async () => {
      const deviceId = getDeviceId(); // Ensure this is an async call
      setToken(deviceId); // Assuming deviceId is a number
    };
    fetchToken();
  }, []);

  if (token) {
    return <Navigate to="/conversation/-1" replace />;
  }

  return <>{children}</>;
};

export default UnProtectedRoute;
