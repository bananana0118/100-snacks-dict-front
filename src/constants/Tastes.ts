/** 1) taste enum & options 정의 */
export enum Tastes {
  Sweet = 'TST001', // 달콤
  Tangy = 'TST002', // 상큼
  Savory = 'TST003', // 짭짤
  Spicy = 'TST004', // 매콤
  Bitter = 'TST005', // 쌉싸름
  Greasy = 'TST006', //느끼함
}

export type TasteOption = {
  value: Tastes; // 서버에 보낼 코드 그대로
  label: string; // 표시용
  bgColor: `#${string}`;
  textColor: `#${string}`;
};

export const TASTE_LIST = [
  { value: Tastes.Sweet, label: '달콤', bgColor: '#FFE5F0', textColor: '#FF005E' },
  { value: Tastes.Tangy, label: '상큼', bgColor: '#FFFF47', textColor: '#77A61A' },
  { value: Tastes.Savory, label: '짭짤', bgColor: '#A8EDF9', textColor: '#097799' },
  { value: Tastes.Spicy, label: '매콤', bgColor: '#FF0000', textColor: '#FFFFFF' },
  { value: Tastes.Bitter, label: '쌉싸름', bgColor: '#7A3621', textColor: '#FFC09A' },
  { value: Tastes.Greasy, label: '느끼함', bgColor: '#F0F0F0', textColor: '#777777' },
] as const satisfies readonly TasteOption[];

/** 2) Taste 코드와 이름 매핑 */
export const TASTE_CODE_TO_NAME = {
  TST001: '달콤',
  TST002: '상큼',
  TST003: '짭짤',
  TST004: '매콤',
  TST005: '쌉싸름',
  TST006: '느끼함',
};
