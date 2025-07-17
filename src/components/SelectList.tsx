import { Option } from '@/app/(pages)/admin/page';
import { Field, Label, Select } from '@headlessui/react';

type SelectListProps<T extends string> = {
  label: string;
  placeholder?: string;
  name?: string;
  options: Option<T>[];
};

const SelectList = <T extends string>({
  label,
  placeholder,
  options,
  name = '',
}: SelectListProps<T>) => {
  return (
    <Field className="flex flex-col">
      <Label className="pb-2.5 text-lg font-semibold">{label}</Label>
      <Select
        name={name}
        defaultValue=""
        className="h-11 border p-2.5 data-focus:bg-blue-100 data-hover:shadow"
      >
        {placeholder && (
          <option value="" disabled hidden>
            카테고리 선택
          </option>
        )}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </Select>
    </Field>
  );
};

export default SelectList;
