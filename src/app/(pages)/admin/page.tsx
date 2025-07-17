import { Field, Input, Label, Select } from '@headlessui/react';

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

const snackOptions: Option<SnackCategory>[] = [
  { value: SnackCategory.BagSnack, label: '봉지과자' },
  { value: SnackCategory.CrunchySnack, label: '바삭과자(비스킷)' },
  { value: SnackCategory.SoftSnack, label: '폭신과자(파이)' },
  { value: SnackCategory.Chocolate, label: '초콜릿' },
  { value: SnackCategory.Jelly, label: '젤리' },
  { value: SnackCategory.CandyGum, label: '캔디&껌' },
];

const page = () => {
  return (
    <div>
      <main className="flex items-center justify-center">
        <section className="min-h-screen w-4/12 bg-amber-100">
          <form className="flex flex-col gap-6">
            <Field className="flex flex-col">
              <Label className="pb-2.5 text-lg font-semibold">1. 과자명</Label>
              <Input
                placeholder="과자명을 입력해주세요"
                className="h-11 border p-2.5 data-focus:bg-blue-100 data-hover:shadow"
              ></Input>
            </Field>
            <Field className="flex flex-col">
              <Label className="pb-2.5 text-lg font-semibold">1. 과자명</Label>
              <Select
                name="category"
                defaultValue=""
                className="h-11 border p-2.5 data-focus:bg-blue-100 data-hover:shadow"
              >
                <option value="" disabled hidden>
                  카테고리 선택
                </option>
                {snackOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </Select>
            </Field>
          </form>
        </section>
      </main>
    </div>
  );
};

export default page;
