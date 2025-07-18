/** 1) Flavor enum & options 정의 */
export enum Flavor {
  Sweet = 'sweet', // 달콤
  Tangy = 'tangy', // 상큼
  Savory = 'savory', // 짭짤
  Spicy = 'spicy', // 매콤
  Bitter = 'bitter', // 쌉싸름
}

export const flavorOptions = [
  { value: Flavor.Sweet, label: '달콤' },
  { value: Flavor.Tangy, label: '상큼' },
  { value: Flavor.Savory, label: '짭짤' },
  { value: Flavor.Spicy, label: '매콤' },
  { value: Flavor.Bitter, label: '쌉싸름' },
];
