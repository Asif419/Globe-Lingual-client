
const Container = ({ children }) => {
  return (
    <div className="min-h-screen max-w-[2320px] mx-auto xl:px-20 md:px-10 sl:px-2 px-4">
      {children}
    </div>
  );
};

export default Container;