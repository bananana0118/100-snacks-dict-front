import { SnackItem } from '@/services/snack/sncakService';

type SnackListItemProps = {
  snack: SnackItem;
};

const SnackListItem = ({ snack }: SnackListItemProps) => {
  const { id } = snack;
  return (
    <li
      key={id}
      className="flex h-6 items-center justify-between gap-2.5 text-xl"
    >
      <div>
        icon<span>빅파이</span>
      </div>
      <hr className="flex w-1 flex-1"></hr>
      <div>파이(달콤)</div>
    </li>
  );
};

export default SnackListItem;
