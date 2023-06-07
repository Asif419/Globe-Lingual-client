import useAuth from "../hooks/useAuth";
import Container from '../pages/Shared/Container';


const Main = () => {
  const { user, darkTheme, setDarkTheme, googleSingIn } = useAuth();

  // remove after this
  const handleGoogleSignIn = () => {
    googleSingIn()
      .then(result => {
        console.log(result.user)
      }).catch(error => {
        console.log(error);
      })
  }


  // TODO: AXIOS and react query install
  return (
    <Container>
      <div>
        <h2>Main</h2>
        <button onClick={() => setDarkTheme(!darkTheme)} className="btn btn-primary">Button {user?.name}</button>
        <button onClick={handleGoogleSignIn} className="btn btn-primary">Google</button>
      </div>
    </Container>
  );
};

export default Main;