type SnackListItemProps = {
  key: string | number;
};

const SnackListItem = ({ key }: SnackListItemProps) => {
  return (
    <li
      key={key}
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
