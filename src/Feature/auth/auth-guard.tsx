import React, {
  useEffect,
  useState,
  ReactNode,
  PropsWithChildren,
} from "react";
import { Navigate } from "react-router-dom";
import { getDeviceId } from "../model/pixlip-model";

interface ProtectedRouteProps {
  children: ReactNode;
}

export const ProtectedRoute = ({ children }: PropsWithChildren) => {
  const deviceId = getDeviceId(); // Ensure this is an async call

  const [token, setToken] = useState<number | null>(deviceId);

  useEffect(() => {
    const fetchToken = async () => {
      if (deviceId) {
        setToken(deviceId); // Assuming deviceId is a number
      }
    };
    fetchToken();
  }, []);

  if (!token) {
    console.log(token);
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};
