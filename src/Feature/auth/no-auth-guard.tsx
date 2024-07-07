import React, { useEffect, useState, ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { getDeviceId } from "../model/pixlip-model";

interface UnProtectedRouteProps {
  children: ReactNode;
}

export const UnProtectedRoute: React.FC<UnProtectedRouteProps> = ({
  children,
}) => {
        const deviceId = getDeviceId();

        const [token, setToken] = useState<number | null>(deviceId);
        useEffect(() => {
          const fetchToken = async () => {
            if (deviceId) {
              setToken(deviceId);
            }
          };
          fetchToken();
        }, []);

  if (token) {
    return <Navigate to="/conversation/-1" replace />;
  }

  return <>{children}</>;
};

export default UnProtectedRoute;
