import { snackOptions } from '@/app/constants/snack_types';
import { Field, Input, Label, Select } from '@headlessui/react';

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
