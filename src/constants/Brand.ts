import { Option } from '@/app/(pages)/admin/page';

// Brand.ts
export enum Brand {
  Lotte = 'BRD001', // 봉지과자
  Olion = 'BRD002', // 바삭과자(비스킷)
  Crown = 'BRD003', // 폭신과자(파이)
  HaeTae = 'BRD004', // 초콜릿
}

export const brandOptions: Option<Brand>[] = [
  { value: Brand.Lotte, label: '롯데제과' },
  { value: Brand.Olion, label: '오리온' },
  { value: Brand.Crown, label: '크라운' },
  { value: Brand.HaeTae, label: '해태' },
];

export const BRAND_CODE = {
  BRD001: Brand.Lotte,
  BRD002: Brand.Olion,
  BRD003: Brand.Crown,
  BRD004: Brand.HaeTae,
};
