import { pixlipApiService } from "./api-service";

export const newUser = "deviceId";
export const isPopulated = "isPopulated";

export const setDeviceId = (deviceId: number) => {
  localStorage.setItem(newUser, JSON.stringify(deviceId));
};
export const getDeviceId = (): number | null => {
  return JSON.parse(localStorage.getItem(newUser) ?? "null");
};

export const getNewUserChatStatus = (): boolean | null => {
  return JSON.parse(localStorage.getItem(isPopulated) ?? "null");
};

export const setNewUserChatStatus = (isPopulated: boolean) => {
  localStorage.setItem(newUser, JSON.stringify(isPopulated));
};

export const generatDeviceId = () => {
  const userAgent = navigator.userAgent;
  const screenResolution = `${window.screen.width}x${window.screen.height}`;
  const colorDepth = window.screen.colorDepth;
  const rawId = `${userAgent}-${screenResolution}-${colorDepth}`;
  let hash = 0;
  for (let i = 0; i < rawId.length; i++) {
    const char = rawId.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  setDeviceId(hash);
  return hash;
};

export const startConversation = async (message: string, deviceId: number) => {
  const body = {
    conversation_id: -1,
    question: message,
    device_id: deviceId,
  };

  const response = await pixlipApiService.post("/chat/chat-data/", body);
  return response.data;
};

export const resumeConversation = async (message: string, id: number) => {
  const body = {
    conversation_id: id,
    question: message,
    device_id: getDeviceId(),
  };

  const response = await pixlipApiService.post("/chat/chat-data/", body);
  return response.data;
};

export const getAllConversationList = async (id: number) => {
  const body = {
    device_id: id,
  };

  const response = await pixlipApiService.post(
    "chat/chat-data/get-device-chat/",
    body
  );
  return response.data;
};

export const getSelectedChatData = async (id: number) => {
  const response = await pixlipApiService.get(`/chat/chat-data/${id}/`);
  return response.data;
};
