import { PriceRange } from '@/constants/PriceRange';

export const transpertSnackPriceRange = (price: number) => {
  if (price < 1000) return '1000원 이하';
  if (price >= 1000 && price < 3000) return PriceRange.OneToThreeThousand;
  if (price >= 3000 && price < 5000) return PriceRange.ThreeToFiveThousand;
  if (price >= 5000 && price < 10000) return PriceRange.FiveToTenThousand;
  return PriceRange.TenThousandAndAbove;
};

export function formDataToJson(fd: FormData, multiKeys: string[] = []) {
  const out: Record<string, any> = {};
  for (const [k, v] of fd.entries()) {
    const vv = typeof v === 'string' ? v : (v as File).name; // 파일은 이미 S3로 올렸음
    if (multiKeys.includes(k)) {
      //다중 값일때
      (out[k] ||= []).push(vv);
    } else {
      out[k] = vv;
    }
  }
  return out;
}

// 공개 버킷용
export const imgPublicUrl = (key: string) =>
  `https://${process.env.NEXT_PUBLIC_S3_BUCKET}.s3.${process.env.NEXT_PUBLIC_AWS_REGION}.amazonaws.com/${key}`;
