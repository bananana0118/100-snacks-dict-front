import { TASTE_CODE_TO_NAME } from '@/constants/Tastes';
import { SnackItem } from '@/services/snack/sncakService';
import { Circle } from 'lucide-react';
import { Dispatch, SetStateAction } from 'react';

type SnackListItemProps = {
  snack: SnackItem;
  isSelected: boolean;
  setSelected: Dispatch<SetStateAction<number | null>>;
};

const SnackListItem = ({
  snack,
  setSelected,
  isSelected,
}: SnackListItemProps) => {
  const { id } = snack;

  const onChangeHandler = () => {
    setSelected(id);
  };
  return (
    <li className="flex h-6 items-center justify-between gap-2.5 text-xl">
      <div
        className="flex flex-row items-center gap-2.5"
        onMouseEnter={onChangeHandler}
      >
        <Circle size={16} fill={isSelected ? '#000' : '#fff'} />
        <span>{snack.name}</span>
      </div>
      <hr className="flex w-1 flex-1"></hr>
      <div>
        {snack.tasteCodes.map((code) => (
          <span key={code}>({TASTE_CODE_TO_NAME[code]})</span>
        ))}
      </div>
    </li>
  );
};

export default SnackListItem;
