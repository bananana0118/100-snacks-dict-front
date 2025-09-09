// SnackCategory.ts
export enum SnackCategory {
  BagSnack = 'bagSnack', // 봉지과자
  CrunchySnack = 'crunchySnack', // 바삭과자(비스킷)
  SoftSnack = 'softSnack', // 폭신과자(파이)
  Chocolate = 'chocolate', // 초콜릿
  Jelly = 'jelly', // 젤리
  CandyGum = 'candyGum', // 캔디&껌
}

// Store.ts
export enum Store {
  CU = 'CU', // 봉지과자
  GS25 = 'GS25', // 바삭과자(비스킷)
  SevenEleven = '세븐일레븐', // 폭신과자(파이)
  Emart24 = '이마트24', // 초콜릿
}

// Brand.ts
export enum Brand {
  Lotte = '롯데제과', // 봉지과자
  Olion = '오리온', // 바삭과자(비스킷)
  Crown = '크라운', // 폭신과자(파이)
  HaeTae = '해태', // 초콜릿
}

// types.ts
export interface Option<T extends string> {
  value: T;
  label: string;
}

export const storeOptions: Option<Store>[] = [
  { value: Store.CU, label: 'CU' },
  { value: Store.GS25, label: 'GS25' },
  { value: Store.SevenEleven, label: '세븐일레븐' },
  { value: Store.Emart24, label: '이마트24' },
];

export const brandOptions: Option<Brand>[] = [
  { value: Brand.Lotte, label: '롯데제과' },
  { value: Brand.Olion, label: '오리온' },
  { value: Brand.Crown, label: '크라운' },
  { value: Brand.HaeTae, label: '해태' },
];

export const snackOptions: Option<SnackCategory>[] = [
  { value: SnackCategory.BagSnack, label: '봉지과자' },
  { value: SnackCategory.CrunchySnack, label: '바삭과자(비스킷)' },
  { value: SnackCategory.SoftSnack, label: '폭신과자(파이)' },
  { value: SnackCategory.Chocolate, label: '초콜릿' },
  { value: SnackCategory.Jelly, label: '젤리' },
  { value: SnackCategory.CandyGum, label: '캔디&껌' },
];
