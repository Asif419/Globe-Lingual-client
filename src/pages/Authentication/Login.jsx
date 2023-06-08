import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { AiFillEyeInvisible, AiFillEye, AiFillGoogleCircle } from 'react-icons/ai';
import { useState } from "react";
import Lottie from "lottie-react";
import loginAnimation from '../../assets/animation/login.json'
import { Link } from "react-router-dom";

const Login = () => {
  const { darkTheme, googleSingIn } = useAuth();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [visible, setVisible] = useState(false);

  const handleGoogleSignIn = () => {
    googleSingIn()
      .then(result => {
        console.log(result.user)
      }).catch(error => {
        console.log(error);
      })
  }

  const onSubmit = data => {
    console.log(data)
  }

  return (
    <>
      <Helmet>
        <title>GlobeLingual | Login</title>
      </Helmet>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 justify-center items-center">
        {/* left side */}
        <div className={`w-full p-4 md:p-8 lg:p-10 mx-auto rounded-2xl ${darkTheme ? 'bg-slate-800' : 'bg-slate-200'}`}>
          <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
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


