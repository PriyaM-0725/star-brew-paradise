
import { fetchData, withAuth } from "./api";

export type OrderItem = {
  id: string;
  name: string;
  quantity: number;
  price: number;
  options?: {
    name: string;
    value: string;
  }[];
};

export type Order = {
  id: string;
  date: string;
  status: "pending" | "preparing" | "ready" | "delivered" | "cancelled";
  items: OrderItem[];
  total: number;
  storeId: string;
  storeName: string;
  paymentMethod: string;
};

export type OrderDetail = Order & {
  orderNumber: string;
  subtotal: number;
  tax: number;
  pickupTime?: string;
  estimatedDeliveryTime?: string;
  deliveryAddress?: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    special?: string;
  };
};

export const getOrders = async (
  status?: string,
  page: number = 1,
  limit: number = 10
): Promise<{
  orders: Order[];
  totalOrders: number;
  totalPages: number;
}> => {
  let endpoint = `/orders?page=${page}&limit=${limit}`;
  
  if (status) {
    endpoint += `&status=${status}`;
  }
  
  return await fetchData<{
    orders: Order[];
    totalOrders: number;
    totalPages: number;
  }>(endpoint, withAuth());
};

export const getOrderById = async (orderId: string): Promise<OrderDetail> => {
  return await fetchData<OrderDetail>(`/orders/${orderId}`, withAuth());
};

export const createOrder = async (order: {
  items: {
    productId: string;
    quantity: number;
    options?: { name: string; value: string }[];
  }[];
  storeId: string;
  paymentMethodId: string;
  deliveryOption: "pickup" | "delivery";
  deliveryAddress?: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    special?: string;
  };
}): Promise<Order> => {
  return await fetchData<Order>("/orders", {
    method: "POST",
    body: JSON.stringify(order),
    ...withAuth(),
  });
};

export const cancelOrder = async (orderId: string): Promise<void> => {
  await fetchData<void>(`/orders/${orderId}/cancel`, {
    method: "POST",
    ...withAuth(),
  });
};
