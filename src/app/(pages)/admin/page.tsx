'use client';
import CheckBoxWithLabel from '@/components/molecules/CheckBoxWithLabel';
import ImageUploader from '@/components/molecules/ImageUploader';
import SelectList from '@/components/molecules/SelectList';
import { brandOptions } from '@/constants/Brand';
import { priceRangeOptions } from '@/constants/PriceRange';
import { snackOptions } from '@/constants/SnackCategory';
import { storeOptions } from '@/constants/Store';
import { Tastes, TastesOptions } from '@/constants/Tastes';
import { Button, Field, Input, Label } from '@headlessui/react';
import { useState } from 'react';

// types.ts
export interface Option<T extends string> {
  value: T;
  label: string;
}

const Page = () => {
  const [selected, setSelected] = useState<Tastes[]>([]);

  const toggleFlavor = (flavor: Tastes) => {
    if (selected.includes(flavor)) {
      setSelected(selected.filter((f) => f !== flavor));
    } else if (selected.length < 4) {
      setSelected([...selected, flavor]);
    }
  };

  const onSubmitHandler: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    // 여기서 e.currentTarget이 form 엘리먼트
    const form = e.currentTarget;
    const formData = new FormData(form);

    // 예시: 모든 필드 찍어보기
    for (const [key, val] of formData.entries()) {
      console.log(key, val);
    }

    // const res = await fetch('/api/snack', {
    //   method: 'POST',
    //   body: fd,
    // });
    // const json = await res.json();
    // console.log('서버 응답:', json);
  };

  return (
    <div>
      <main className="flex flex-col items-center justify-center px-[50px] pt-[24px] pb-[50px]">
        <section className="min-h-screen w-[420px]">
          <p className="mb-2.5 flex items-center justify-center text-[28px] font-semibold">
            과자등록
          </p>
          <form className="flex flex-col gap-6" onSubmit={onSubmitHandler}>
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
                {TastesOptions.map((opt) => {
                  const isChecked = selected.includes(opt.value);
                  const isDisabled = !isChecked && selected.length >= 4;
                  return (
                    <CheckBoxWithLabel
                      key={opt.value}
                      isChecked={isChecked}
                      isDisabled={isDisabled}
                      onChangeHandler={() => toggleFlavor(opt.value)}
                      value={opt.value}
                      name="flavor"
                      label={opt.label}
                    ></CheckBoxWithLabel>
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
              <Label className={`pb-2.5 text-lg font-semibold`}>7. 총칼로리(kcal) / 용량(g)</Label>
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
            <Button
              type="submit"
              className="h-15 w-full cursor-pointer bg-[#2E1515] px-2.5 py-2.5 text-xl font-semibold text-white"
            >
              등록
            </Button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Page;
