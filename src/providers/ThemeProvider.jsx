import useAuth from "../hooks/useAuth";

const ThemeProvider = ({ children }) => {
  const { darkTheme } = useAuth();
  console.log(darkTheme);
  return (
    <div className={`container ${darkTheme ? 'dark-theme' : 'light-theme'}`}>
      {children}
    </div >
  );
};

export default ThemeProvider;