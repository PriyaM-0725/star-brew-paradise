
import { fetchData } from "./api";

export type AppDownloadRequest = {
  email?: string;
  phoneNumber?: string;
};

export const sendAppDownloadLink = async (
  request: AppDownloadRequest
): Promise<{
  success: boolean;
  message: string;
}> => {
  return await fetchData<{
    success: boolean;
    message: string;
  }>("/app/download-link", {
    method: "POST",
    body: JSON.stringify(request),
  });
};

export const getAppFeatures = async (): Promise<{
  id: string;
  icon: string;
  title: string;
  description: string;
}[]> => {
  return await fetchData<{
    id: string;
    icon: string;
    title: string;
    description: string;
  }[]>("/app/features");
};
