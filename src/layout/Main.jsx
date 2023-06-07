import useAuth from "../hooks/useAuth";
import Container from '../pages/Shared/Container';
import Footer from "../pages/Shared/Footer/Footer";
import Header from "../pages/Shared/Header/Header";


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


  return (
    <Container>
      <Header></Header>

      <div>
        <h2>Main</h2>
        <button onClick={() => setDarkTheme(!darkTheme)} className="btn btn-primary">Button {user?.name}</button>
        <button onClick={handleGoogleSignIn} className="btn btn-primary">Google</button>
      </div>

      <Footer></Footer>
    </Container>
  );
};

export default Main;