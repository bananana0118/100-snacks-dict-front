/** 1) Flavor enum & options 정의 */
export enum Tastes {
  Sweet = 'sweet', // 달콤
  Tangy = 'tangy', // 상큼
  Savory = 'savory', // 짭짤
  Spicy = 'spicy', // 매콤
  Bitter = 'bitter', // 쌉싸름
  Greasy = 'greasy', //느끼함
}

export const TastesOptions = [
  { value: Tastes.Sweet, label: '달콤' },
  { value: Tastes.Tangy, label: '상큼' },
  { value: Tastes.Savory, label: '짭짤' },
  { value: Tastes.Spicy, label: '매콤' },
  { value: Tastes.Bitter, label: '쌉싸름' },
  { value: Tastes.Greasy, label: '느끼함' },
];

export const TASTE_CODE = {
  TST001: Tastes.Sweet,
  TST002: Tastes.Tangy,
  TST003: Tastes.Savory,
  TST004: Tastes.Spicy,
  TST005: Tastes.Bitter,
  TST006: Tastes.Greasy,
};

/** 2) Taste 코드와 이름 매핑 */
export const TASTE_CODE_TO_NAME = {
  TST001: '달콤',
  TST002: '상큼',
  TST003: '짭짤',
  TST004: '매콤',
  TST005: '쌉싸름',
  TST006: '느끼함',
};
