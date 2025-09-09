type layoutProps = {
  children: React.ReactNode;
};

const layout = ({ children }: layoutProps) => {
  return <div className="mt-16 flex justify-center">{children}</div>;
};

export default layout;
