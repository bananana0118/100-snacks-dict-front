import { Tastes, TastesOptions } from '@/constants/Tastes';

type SnackTasteTagListProps = {
  tasteCodes: Tastes[];
};

export const SnackTasteTagList = ({ tasteCodes }: SnackTasteTagListProps) => {
  return (
    <ul className="flex flex-row gap-2.5 text-xs">
      {tasteCodes.map((taste) => {
        const tasteOption = TastesOptions[taste];
        return (
          <li
            key={taste}
            className="h-[20px] w-fit rounded-lg px-1.5 py-0.5"
            style={{
              backgroundColor: tasteOption.bgColor,
              color: tasteOption.textColor,
            }}
          >
            {tasteOption.label}
          </li>
        );
      })}
    </ul>
  );
};
