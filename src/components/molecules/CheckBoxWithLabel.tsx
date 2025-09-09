import { Checkbox, Field, Label } from '@headlessui/react';

type CheckBoxWithLabelProps = {
  onChangeHandler: () => void;
  key: string;
  isDisabled?: boolean;
  isChecked?: boolean;
  value: string;
  label: string;
  name: string;
};

const CheckBoxWithLabel = ({
  isChecked,
  isDisabled,
  onChangeHandler,
  value,
  name,
  label,
}: CheckBoxWithLabelProps) => {
  return (
    <Field
      as="div"
      key={value}
      disabled={isDisabled}
      className="flex items-center"
    >
      <Checkbox
        className={`group mr-1 block h-5 w-5 rounded border bg-white data-checked:bg-blue-500 data-disabled:cursor-not-allowed data-disabled:opacity-50`}
        onChange={onChangeHandler}
        value={value}
        name={name}
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
      <Label className={isDisabled ? 'text-gray-400' : undefined}>
        {label}
      </Label>
    </Field>
  );
};

export default CheckBoxWithLabel;
