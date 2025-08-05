import { TASTE_CODE_TO_NAME } from '@/constants/Tastes';
import { SnackItem } from '@/services/snack/sncakService';
import { Circle } from 'lucide-react';

type SnackListItemProps = {
  snack: SnackItem;
  isSelected: boolean;
};

const SnackListItem = ({ snack, isSelected }: SnackListItemProps) => {
  const { id } = snack;
  return (
    <li
      key={id}
      className="flex h-6 items-center justify-between gap-2.5 text-xl"
    >
      <div className="flex flex-row items-center gap-2.5">
        <Circle size={16} fill={isSelected ? '#000' : '#fff'} />
        <span>{snack.name}</span>
      </div>
      <hr className="flex w-1 flex-1"></hr>
      <div>
        {snack.tasteCodes.map((code) => (
          <span key={code}>({TASTE_CODE_TO_NAME[code]})</span>
        ))}
        (달콤)
      </div>
    </li>
  );
};

export default SnackListItem;
