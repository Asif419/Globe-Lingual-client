import useAuth from "../hooks/useAuth";

const Main = () => {
  const { user, darkTheme, setDarkTheme } = useAuth();
  return (
    <div>
      <h2>Main</h2>
      <button onClick={() => setDarkTheme(!darkTheme)} className="btn btn-primary">Button {user?.name}</button>
    </div>
  );
};

export default Main;