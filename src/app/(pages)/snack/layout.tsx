type layoutProps = {
  children: React.ReactNode;
};

const layout = ({ children }: layoutProps) => {
  return <div className="flex justify-center">{children}</div>;
};

export default layout;
