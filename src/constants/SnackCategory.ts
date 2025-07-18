import { Option } from '@/app/(pages)/admin/page';

// SnackCategory.ts
export enum SnackCategory {
  BagSnack = 'bagSnack', // 봉지과자
  CrunchySnack = 'crunchySnack', // 바삭과자(비스킷)
  SoftSnack = 'softSnack', // 폭신과자(파이)
  Chocolate = 'chocolate', // 초콜릿
  Jelly = 'jelly', // 젤리
  CandyGum = 'candyGum', // 캔디&껌
}

export const snackOptions: Option<SnackCategory>[] = [
  { value: SnackCategory.BagSnack, label: '봉지과자' },
  { value: SnackCategory.CrunchySnack, label: '바삭과자(비스킷)' },
  { value: SnackCategory.SoftSnack, label: '폭신과자(파이)' },
  { value: SnackCategory.Chocolate, label: '초콜릿' },
  { value: SnackCategory.Jelly, label: '젤리' },
  { value: SnackCategory.CandyGum, label: '캔디&껌' },
];
