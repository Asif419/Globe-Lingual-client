import useAuth from "../hooks/useAuth";

const ThemeProvider = ({ children }) => {
  const { darkTheme } = useAuth();

  return (
    <div data-theme={darkTheme ? 'dark' : 'light'}>
      {children}
    </div>
  );
};

export default ThemeProvider;