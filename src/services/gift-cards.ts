
import { fetchData, withAuth } from "./api";

export type GiftCardDesign = {
  id: string;
  name: string;
  image: string;
  previewImage: string;
};

export type GiftCard = {
  id: string;
  code: string;
  amount: number;
  balance: number;
  design: GiftCardDesign;
  purchaseDate: string;
  expirationDate?: string;
  isActive: boolean;
};

export type GiftCardPurchase = {
  design: string;
  amount: number;
  recipientName: string;
  recipientEmail: string;
  senderName: string;
  message?: string;
};

export const getGiftCardDesigns = async (): Promise<GiftCardDesign[]> => {
  return await fetchData<GiftCardDesign[]>("/gift-cards/designs");
};

export const purchaseGiftCard = async (
  giftCard: GiftCardPurchase
): Promise<{
  id: string;
  status: string;
  message: string;
}> => {
  return await fetchData<{
    id: string;
    status: string;
    message: string;
  }>("/gift-cards/purchase", {
    method: "POST",
    body: JSON.stringify(giftCard),
    ...withAuth(),
  });
};

export const checkGiftCardBalance = async (
  cardNumber: string,
  securityCode: string
): Promise<{
  balance: number;
  currency: string;
}> => {
  return await fetchData<{
    balance: number;
    currency: string;
  }>("/gift-cards/check-balance", {
    method: "POST",
    body: JSON.stringify({
      cardNumber,
      securityCode,
    }),
  });
};

export const getUserGiftCards = async (): Promise<GiftCard[]> => {
  return await fetchData<GiftCard[]>("/user/gift-cards", withAuth());
};
