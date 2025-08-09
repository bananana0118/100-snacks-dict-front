import { Option } from '@/app/(pages)/admin/page';

// Store.ts
export enum Store {
  CU = 'STR001',
  GS25 = 'STR002',
  SevenEleven = 'STR003',
  Emart24 = 'STR004',
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
