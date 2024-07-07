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
  const [token, setToken] = useState<number | null>(null);

  useEffect(() => {
    const fetchToken = async () => {
      const deviceId = getDeviceId(); // Ensure this is an async call
      setToken(deviceId); // Assuming deviceId is a number
    };
    fetchToken();
  }, []);

  if (!token) {
    console.log(token);
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};
