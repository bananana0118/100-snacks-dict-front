type pageProps = {
  children: React.ReactNode;
};

const page = ({ children }: pageProps) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
};

export default page;
