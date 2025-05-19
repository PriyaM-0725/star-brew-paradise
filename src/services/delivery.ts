
import { fetchData, withAuth } from "./api";

export type DeliveryStatus =
  | "pending"
  | "confirmed"
  | "preparing"
  | "out-for-delivery"
  | "delivered"
  | "cancelled";

export type DeliveryEvent = {
  status: string;
  time: string;
  completed: boolean;
  current?: boolean;
};

export type DeliveryDetail = {
  id: string;
  orderId: string;
  status: DeliveryStatus;
  estimatedDelivery?: string;
  deliveredTime?: string;
  address: string;
  items: {
    name: string;
    quantity: number;
    price: number;
  }[];
  total: number;
  progress: number;
  carrier: string;
  trackingNumber: string;
  timeline: DeliveryEvent[];
};

export const getActiveDeliveries = async (): Promise<DeliveryDetail[]> => {
  return await fetchData<DeliveryDetail[]>("/deliveries/active", withAuth());
};

export const getPastDeliveries = async (
  page: number = 1,
  limit: number = 10
): Promise<{
  deliveries: DeliveryDetail[];
  totalDeliveries: number;
  totalPages: number;
}> => {
  return await fetchData<{
    deliveries: DeliveryDetail[];
    totalDeliveries: number;
    totalPages: number;
  }>(`/deliveries/past?page=${page}&limit=${limit}`, withAuth());
};

export const getDeliveryById = async (
  deliveryId: string
): Promise<DeliveryDetail> => {
  return await fetchData<DeliveryDetail>(
    `/deliveries/${deliveryId}`,
    withAuth()
  );
};
