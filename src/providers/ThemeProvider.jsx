import useAuth from "../hooks/useAuth";

const ThemeProvider = ({ children }) => {
  const { darkTheme } = useAuth();

  return (
    <div className={`${darkTheme ? 'dark-theme' : 'light-theme'}`}>
      {children}
    </div >
  );
};

export default ThemeProvider;