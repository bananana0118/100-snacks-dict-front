import { Option } from '@/app/constants/snack_types';

// PriceRange.ts
export enum PriceRange {
  OneToThreeThousand = '1000-3000', // 1,000원 ~ 3,000원
  ThreeToFiveThousand = '3000-5000', // 3,000원 ~ 5,000원
  FiveToTenThousand = '5000-10000', // 5,000원 ~ 10,000원
  TenThousandAndAbove = '10000-', // 10,000원 이상
}

export const priceRangeOptions: Option<PriceRange>[] = [
  { value: PriceRange.OneToThreeThousand, label: '1,000원 ~ 3,000원' },
  { value: PriceRange.ThreeToFiveThousand, label: '3,000원 ~ 5,000원' },
  { value: PriceRange.FiveToTenThousand, label: '5,000원 ~ 10,000원' },
  { value: PriceRange.TenThousandAndAbove, label: '10,000원 이상' },
];
