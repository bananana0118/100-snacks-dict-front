'use client';
import CheckBoxWithLabel from '@/components/molecules/CheckBoxWithLabel';
import ImageUploader from '@/components/molecules/ImageUploader';
import SelectList from '@/components/molecules/SelectList';
import { brandOptions } from '@/constants/Brand';
import { snackOptions } from '@/constants/SnackCategory';
import { storeOptions } from '@/constants/Store';
import { Tastes, TastesOptions } from '@/constants/Tastes';
import { formDataToJson } from '@/utils/snackUtils';
import { Button, Field, Input, Label } from '@headlessui/react';
import { useState } from 'react';

// types.ts
export interface Option<T extends string> {
  value: T;
  label: string;
}

const Page = () => {
  const [selected, setSelected] = useState<Tastes[]>([]);

  const toggletaste = (taste: Tastes) => {
    if (selected.includes(taste)) {
      setSelected(selected.filter((f) => f !== taste));
    } else if (selected.length < 4) {
      setSelected([...selected, taste]);
    }
  };

  const onSubmitHandler: React.FormEventHandler<HTMLFormElement> = async (
    e,
  ) => {
    e.preventDefault();

    // 여기서 e.currentTarget이 form 엘리먼트
    const form = e.currentTarget;
    const fd = new FormData(form);

    const fileEntry = fd.get('snackImg');
    const file = fileEntry instanceof File ? fileEntry : null;

    let snackImgKey: string | undefined;

    // 예시: 모든 필드 찍어보기
    for (const [key, val] of fd.entries()) {
      console.log(key, val);
    }

    if (file && file.size > 0) {
      const presignRes = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/storage/presign`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },

          body: JSON.stringify({
            fileName: file.name,
            fileType: file.type,
          }),
        },
      );
      if (!presignRes.ok) {
        console.error('presign failed', await presignRes.text());
        alert('이미지 업로드 준비(presign)에 실패했습니다.');
        return;
      }

      const { data } = await presignRes.json();
      const { url, key } = data;
      snackImgKey = key;

      const putRes = await fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': file.type },
        body: file,
      });

      if (!putRes.ok) {
        console.error('S3 PUT failed', putRes.status, await putRes.text());
        alert('이미지 업로드에 실패했습니다.');
        return;
      }
    }

    fd.delete('snackImg');

    // S3에 업로드된 key 넣기
    if (snackImgKey) fd.append('snackImg', snackImgKey ?? null);

    const raw = formDataToJson(fd, ['tasteCodes', 'storeCodes']);

    const payload = {
      name: raw.name ?? '',
      snackTypeCode: raw.snackTypeCode ?? '',
      brandCode: raw.brandCode ?? '',
      price: raw.price ? Number(raw.price) : undefined,
      kcal: raw.kcal ? Number(raw.kcal) : undefined,
      capacity: raw.capacity ? Number(raw.capacity) : undefined,
      releaseAt: raw.releaseAt || undefined,
      tasteCodes: raw.tasteCodes ?? [],
      storeCodes: raw.storeCodes ?? [],
      snackImg: snackImgKey, // presign key
    };

    const res = await fetch('http://localhost:8080/snack', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(payload),
    });

    console.log(fd);
    const json = await res.json();
    console.log('서버 응답:', json);
  };

  return (
    <div>
      <main className="flex flex-col items-center justify-center px-[50px] pt-[24px] pb-[50px]">
        <section className="min-h-screen w-[420px]">
          <p className="mb-2.5 flex items-center justify-center text-[28px] font-semibold">
            과자등록
          </p>
          <form className="flex flex-col gap-6" onSubmit={onSubmitHandler}>
            <ImageUploader name="snackImg"></ImageUploader>
            <Field className="flex flex-col">
              <Label className="pb-2.5 text-lg font-semibold">1. 과자명</Label>
              <Input
                placeholder="과자명을 입력해주세요"
                name="name"
                className="h-11 border p-2.5 data-focus:bg-blue-100 data-hover:shadow"
              ></Input>
            </Field>
            <SelectList
              label="2. 과자종류"
              options={snackOptions}
              name="snackTypeCode"
              placeholder="카테고리를 선택해주세요"
              key="snackTypeCode"
            ></SelectList>
            <SelectList
              label="3. 제조사"
              options={brandOptions}
              name="brandCode"
              placeholder="제조사를 선택해주세요"
              key="brandCode"
            ></SelectList>

            <Field className="flex flex-col">
              <Label className="pb-2.5 text-lg font-semibold">4. 가격대</Label>
              <Input
                name="price"
                placeholder="가격대를 입력해주세요"
                key="price"
                type="number"
                className="h-11 border p-2.5 data-focus:bg-blue-100 data-hover:shadow"
              ></Input>
            </Field>
            <fieldset>
              <legend className="pb-2.5 text-lg font-semibold">
                5. 맛 (최대 4개까지 선택 가능)
              </legend>

              <div className="flex w-full flex-row gap-2">
                {Object.values(Tastes).map((code) => {
                  const opt = TastesOptions[code];
                  const isChecked = selected.includes(code);
                  const isDisabled = !isChecked && selected.length >= 4;
                  return (
                    <CheckBoxWithLabel
                      key={code}
                      isChecked={isChecked}
                      isDisabled={isDisabled}
                      onChangeHandler={() => toggletaste(code)}
                      value={code}
                      name="tasteCodes"
                      label={opt.label}
                    ></CheckBoxWithLabel>
                  );
                })}
              </div>
            </fieldset>
            <SelectList
              label="6. 판매처"
              options={storeOptions}
              name="storeCodes"
              placeholder="판매처를 선택해주세요"
              key="storeCodes"
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
                  name="capacity"
                  key="capacity"
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
