import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { AiFillEyeInvisible, AiFillEye, AiFillGoogleCircle } from 'react-icons/ai';
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import loginAnimation from '../../assets/animation/login.json'
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import { toast } from "react-hot-toast";

const Login = () => {
  const { darkTheme, googleSingIn, signIn } = useAuth();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [visible, setVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';
  const [baseAxios] = useAxios();
  const notify = (message) => toast(`${message}`);

  const handleGoogleSignIn = () => {
    setErrorMessage(null);
    googleSingIn()
      .then(result => {
        const LoggedUser = result.user;
        const user = { user_name: LoggedUser.displayName, user_email: LoggedUser.email, user_photo_url: LoggedUser.photoURL, role: 'student' };
        baseAxios.post('/users', user)
          .then(res => {
            if (res.data.acknowledged) {
              notify('Logged in successfully ✌️');
              navigate(from, { replace: true });
            }
          })
          .catch(error => {
            notify('Logged in successfully ✌️');
            navigate(from, { replace: true });
            console.log(error.response.data.message);
          })
      }).catch(error => {
        console.log(error);
      })
  }

  const onSubmit = data => {
    const { email, password } = data;
    signIn(email, password)
      .then(() => {
        notify('Logged in successfully ✌️');
        navigate(from, { replace: true });
      })
      .catch(error => {
        setErrorMessage(error.message);
      })
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>GlobeLingual | Login</title>
      </Helmet>

      <div className="text-center text-4xl font-extrabold my-10 md:my-3">
        <p>Login</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 justify-center items-center">
        {/* left side */}
        <div className={`w-full p-4 md:p-8 lg:p-10 mx-auto rounded-2xl ${darkTheme ? 'bg-slate-800' : 'bg-slate-200'}`}>
          <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
            <div className="px-2 md:px-20 flex-col w-full items-center">
              <p className="label-text">Email*</p>
              <input type="email" className="w-full p-3 rounded-lg" placeholder="asif@gmail.com" {...register("email", { required: true })} />
              {errors.password && <p className="text-sm text-red-700">This field is required</p>}
            </div>
            <div className="px-2 md:px-20 flex-col">
              <p className="label-text">Password*</p>
              <div className="relative">
                {
                  visible ?
                    <AiFillEye onClick={() => setVisible(!visible)} className="w-5 h-5 absolute end-1 top-4 cursor-pointer"></AiFillEye>
                    :
                    <AiFillEyeInvisible onClick={() => setVisible(!visible)} className="w-5 h-5 absolute end-1 top-4 cursor-pointer"></AiFillEyeInvisible>
                }
                <input type={visible ? 'text' : 'password'} className="w-full p-3 rounded-lg" {...register("password", { required: true })} />
              </div>
              {errors.password && <p className="text-sm text-red-700">This field is required</p>}
            </div>
            {
              errorMessage && (
                <div className='border border-red-400 text-center rounded-lg w-2/3 mx-auto text text-red-600 m-2 '>
                  {
                    (!errorMessage) ? '' :
                      errorMessage === 'Firebase: Error (auth/wrong-password).' ?
                        <p>Wrong password. Please try again.</p> :
                        errorMessage === 'Firebase: Error (auth/user-not-found).' ?
                          <p>User not found. Please check your email and try again.</p> :
                          <p>An error occurred. Please try again later.</p>
                  }
                </div>
              )
            }
            <button className="btn-gl" type="submit">Submit</button>
          </form>
          <div className="divider">OR</div>
          <div className="flex flex-col items-center">
            <p>Social Login</p>
            <AiFillGoogleCircle onClick={handleGoogleSignIn} className="w-12 h-12 cursor-pointer"></AiFillGoogleCircle>
          </div>
          <div className="mt-5 flex flex-col items-center">
            <p>Are you new here? <span> </span>
              <Link to='/registration'><span className="underline">Sign up</span></Link>
            </p>
          </div>
        </div>
        {/* right side */}
        <div>
          <Lottie
            animationData={loginAnimation}
            loop={true}
          ></Lottie>
        </div>
      </div>
    </>
  );
};

export default Login;


