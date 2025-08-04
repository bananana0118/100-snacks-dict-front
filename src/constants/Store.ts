import { Option } from '@/app/(pages)/admin/page';

// Store.ts
export enum Store {
  CU = 'CU', // 봉지과자
  GS25 = 'GS25', // 바삭과자(비스킷)
  SevenEleven = '세븐일레븐', // 폭신과자(파이)
  Emart24 = '이마트24', // 초콜릿
}

export const storeOptions: Option<Store>[] = [
  { value: Store.CU, label: 'CU' },
  { value: Store.GS25, label: 'GS25' },
  { value: Store.SevenEleven, label: '세븐일레븐' },
  { value: Store.Emart24, label: '이마트24' },
];

export const storeCodeToName = {
  BRD001: '롯데제과',
  BRD002: '오리온',
  BRD003: '크라운',
  BRD004: '해태',
};
