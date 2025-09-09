import { SNACK_CODE } from '@/constants/SnackCategory';
import { BRAND_CODE } from '@/constants/Brand';
import { Tastes } from '@/constants/Tastes';

export type SnackItem = {
  id: number;
  name: string;
  snackTypeCode: keyof typeof SNACK_CODE;
  brandCode: keyof typeof BRAND_CODE;
  tasteCodes: Tastes[];
  storeCodes: string[];
  price: number;
  snackImg: string;
  kcal: number;
  capacity: number;
  releaseAt: Date;
};

type ResponseWrapper<T> = {
  data: T;
  status: number;
};

export type SnackListItemResponse = ResponseWrapper<SnackItem[]>;
export type SnackItemResponse = ResponseWrapper<SnackItem>;

export const getAllSnack = async (): Promise<SnackListItemResponse> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/snack`);

  if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
  const data = await res.json();
  return {
    data: data.data,
    status: res.status,
  };
};

export const getSnackFindOne = async (
  id: number,
): Promise<SnackItemResponse> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/snack/${id}`);

  if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
  const data = await res.json();
  return {
    data: data.data,
    status: res.status,
  };
};
