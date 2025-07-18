'use client';
import ImageUploader from '@/components/ImageUploader';
import SelectList from '@/components/SelectList';
import { Checkbox, Field, Input, Label } from '@headlessui/react';
import { useState } from 'react';

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

// PriceRange.ts
export enum PriceRange {
  OneToThreeThousand = '1000-3000', // 1,000원 ~ 3,000원
  ThreeToFiveThousand = '3000-5000', // 3,000원 ~ 5,000원
  FiveToTenThousand = '5000-10000', // 5,000원 ~ 10,000원
  TenThousandAndAbove = '10000-', // 10,000원 이상
}
/** 1) Flavor enum & options 정의 */
export enum Flavor {
  Sweet = '달콤',
  Tangy = '상큼',
  Savory = '짭짤',
  Spicy = '매콤',
  Bitter = '쌉싸름',
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

export const priceRangeOptions: Option<PriceRange>[] = [
  { value: PriceRange.OneToThreeThousand, label: '1,000원 ~ 3,000원' },
  { value: PriceRange.ThreeToFiveThousand, label: '3,000원 ~ 5,000원' },
  { value: PriceRange.FiveToTenThousand, label: '5,000원 ~ 10,000원' },
  { value: PriceRange.TenThousandAndAbove, label: '10,000원 이상' },
];

const flavorOptions = Object.values(Flavor).map((flavor) => ({
  value: flavor,
  label: flavor,
}));

const Page = () => {
  const [selected, setSelected] = useState<Flavor[]>([]);

  const toggleFlavor = (flavor: Flavor) => {
    if (selected.includes(flavor)) {
      setSelected(selected.filter((f) => f !== flavor));
    } else if (selected.length < 4) {
      setSelected([...selected, flavor]);
    }
  };

  return (
    <div>
      <main className="flex flex-col items-center justify-center px-[50px] pt-[24px] pb-[50px]">
        <section className="min-h-screen w-[420px]">
          <p className="mb-2.5 flex items-center justify-center text-[28px] font-semibold">
            과자등록
          </p>
          <form className="flex flex-col gap-6">
            <ImageUploader></ImageUploader>
            <Field className="flex flex-col">
              <Label className="pb-2.5 text-lg font-semibold">1. 과자명</Label>
              <Input
                placeholder="과자명을 입력해주세요"
                className="h-11 border p-2.5 data-focus:bg-blue-100 data-hover:shadow"
              ></Input>
            </Field>
            <SelectList
              label="2. 과자종류"
              options={snackOptions}
              name="snackCategory"
              placeholder="카테고리를 선택해주세요"
              key="snackCategory"
            ></SelectList>
            <SelectList
              label="3. 제조사"
              options={brandOptions}
              name="brand"
              placeholder="제조사를 선택해주세요"
              key="brand"
            ></SelectList>
            <SelectList
              label="4. 가격대"
              options={priceRangeOptions}
              name="price"
              placeholder="가격대를 선택해주세요"
              key="price"
            ></SelectList>
            <fieldset>
              <legend className="pb-2.5 text-lg font-semibold">
                5. 맛 (최대 4개까지 선택 가능)
              </legend>

              <div className="flex w-full flex-row gap-2">
                {flavorOptions.map((opt) => {
                  const isChecked = selected.includes(opt.value);
                  const isDisabled = !isChecked && selected.length >= 4;
                  return (
                    <Field
                      as="div"
                      key={opt.value}
                      disabled={isDisabled}
                      className="flex items-center"
                    >
                      <Checkbox
                        className={`group mr-1 block h-5 w-5 rounded border bg-white data-checked:bg-blue-500 data-disabled:cursor-not-allowed data-disabled:opacity-50`}
                        onChange={() => toggleFlavor(opt.value)}
                        value={opt.value}
                        checked={isChecked}
                        disabled={isDisabled}
                      >
                        <svg
                          viewBox="0 0 14 14"
                          fill="none"
                          className="stroke-white opacity-0 group-data-checked:opacity-100"
                        >
                          <path
                            d="M3 8L6 11L11 3.5"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Checkbox>
                      <Label
                        className={isDisabled ? 'text-gray-400' : undefined}
                      >
                        {opt.label}
                      </Label>
                    </Field>
                  );
                })}
              </div>
            </fieldset>
            <SelectList
              label="6. 판매처"
              options={storeOptions}
              name="store"
              placeholder="판매처를 선택해주세요"
              key="store"
            ></SelectList>
            <Field>
              <Label className={`pb-2.5 text-lg font-semibold`}>
                7. 총칼로리(kcal) / 용량(g)
              </Label>
              <div className="flex w-full flex-row items-center justify-center">
                <Input
                  placeholder="총칼로리"
                  type="number"
                  name="kcal"
                  key="kcal"
                  className="h-11 w-full border p-2.5 data-focus:bg-blue-100 data-hover:shadow"
                ></Input>
                <span className="mx-3 text-[36px] font-extralight">/</span>
                <Input
                  placeholder="용량"
                  type="number"
                  name="weight"
                  key="weight"
                  className="h-11 w-full border p-2.5 data-focus:bg-blue-100 data-hover:shadow"
                ></Input>
              </div>
            </Field>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Page;
