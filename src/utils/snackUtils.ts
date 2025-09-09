import { PriceRange } from '@/constants/PriceRange';

export const transpertSnackPriceRange = (price: number) => {
  if (price < 1000) return '1000원 이하';
  if (price >= 1000 && price < 3000) return PriceRange.OneToThreeThousand;
  if (price >= 3000 && price < 5000) return PriceRange.ThreeToFiveThousand;
  if (price >= 5000 && price < 10000) return PriceRange.FiveToTenThousand;
  return PriceRange.TenThousandAndAbove;
};
