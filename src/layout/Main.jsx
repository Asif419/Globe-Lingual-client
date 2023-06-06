import useAuth from "../hooks/useAuth";

const Main = () => {
  const { user } = useAuth();
  return (
    <div>
      <h2>Main</h2>
      <button className="btn btn-primary">Button {user?.name}</button>
    </div>
  );
};

export default Main;