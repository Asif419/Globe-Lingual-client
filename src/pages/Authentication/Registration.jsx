import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { AiFillEyeInvisible, AiFillEye, AiFillGoogleCircle } from 'react-icons/ai';
import Lottie from "lottie-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginAnimation from '../../assets/animation/login.json'
import axios from "axios";
import useAxios from "../../hooks/useAxios";
import toast from 'react-hot-toast';

const image_upload_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;
const notify = (message) => toast(`${message}`);

const Registration = () => {
  const { darkTheme, googleSingIn, createUser, updateUserProfile, logOut } = useAuth();
  const [baseAxios] = useAxios();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [visibleOne, setVisibleOne] = useState(false);
  const [visibleTwo, setVisibleTwo] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/';
  const imageHostingURL = `https://api.imgbb.com/1/upload?key=${image_upload_token}`;


  const onSubmit = async (data) => {

    const formData = new FormData();
    formData.append('image', data.image[0]);

    const { name, email, password, conPassword } = data;



    if (password !== conPassword) {
      setErrorMessage(`Password doesn't match`);
      return;
    }

    // getting url for image or uploading image on imgBB
    axios.post(imageHostingURL, formData)
      .then(response => {
        if (response.data.success) {
          const user_photo_url = response.data.data.display_url;

          // registering in Firebase
          createUser(email, password)
            .then(() => {
              // update user profile in firebase
              updateUserProfile(name, user_photo_url)
                .then(() => {
                  const user = {
                    user_name: name,
                    user_email: email,
                    user_photo_url,
                    role: 'student'
                  };
                  console.log(user);
                  reset();
                  baseAxios.post('/user', user)
                    .then(() => {
                      notify('User created successfully ✌️');
                      logOut();
                      setErrorMessage(null);
                      navigate('/login', { state: { from: location.state } }, { replace: true });
                    })
                    .catch(error => {
                      setErrorMessage(error.message);
                    })
                })
                .catch(error => {
                  setErrorMessage(error.message);
                })
            })
            .catch(error => {
              setErrorMessage(error.message);
            })
        }
      })
      .catch(error => {
        console.log(error);
      })
  }


  const handleGoogleSignIn = () => {
    setErrorMessage(null);
    // firebase sign in
    googleSingIn()
      .then(result => {
        const LoggedUser = result.user;
        const user = { user_name: LoggedUser.displayName, user_email: LoggedUser.email, user_photo_url: LoggedUser.photoURL, role: 'student' };
        // user add in database
        baseAxios.post('/user', user)
          .then(res => {
            if (res.data.acknowledged) {
              notify('User created successfully ✌️');
              navigate(from, { replace: true });
            }
          })
          .catch(() => {
            notify('User created successfully ✌️');
            navigate(from, { replace: true });
          })
      }).catch(error => {
        console.log(error);
      })
  }


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>GlobeLingual | Registration</title>
      </Helmet>

      {/* <PageBanner header='Registration'></PageBanner> */}

      <div className="text-center text-4xl font-extrabold my-10">
        <p>Registration</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 justify-center items-center my-5">
        {/* left side */}
        <div className="order-last md:order-first">
          <Lottie
            animationData={loginAnimation}
            loop={true}
          ></Lottie>
        </div>
        {/* right side */}
        <div className={`w-full p-4 md:p-8 lg:p-10 mx-auto rounded-2xl ${darkTheme ? 'bg-slate-800' : 'bg-slate-200'}`}>
          <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
            {/* name */}
            <div className="px-2 md:px-20 flex-col w-full items-center">
              <p className="label-text">Name*</p>
              <input type="text" className="w-full p-3 rounded-lg" placeholder="Md Asif" {...register("name", { required: true })} />
              {errors.name && <p className="text-sm text-red-700">This field is required</p>}
            </div>
            {/* email */}
            <div className="px-2 md:px-20 flex-col w-full items-center">
              <p className="label-text">Email*</p>
              <input type="email" className="w-full p-3 rounded-lg" placeholder="asif@gmail.com" {...register("email", { required: true })} />
              {errors.email && <p className="text-sm text-red-700">This field is required</p>}
            </div>
            {/* password */}
            <div className="px-2 md:px-20 flex-col">
              <p className="label-text">Password*</p>
              <div className="relative">
                {
                  visibleOne ?
                    <AiFillEye onClick={() => setVisibleOne(!visibleOne)} className="w-5 h-5 absolute end-1 top-4 cursor-pointer"></AiFillEye>
                    :
                    <AiFillEyeInvisible onClick={() => setVisibleOne(!visibleOne)} className="w-5 h-5 absolute end-1 top-4 cursor-pointer"></AiFillEyeInvisible>
                }
                <input name="password" type={visibleOne ? 'text' : 'password'} className="w-full p-3 rounded-lg" {...register("password",
                  {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                  })} />
              </div>
              {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one uppercase one lowercase one number and one special character</p>}
              {errors.password?.type === 'required' && <p className="text-red-600">password is required</p>}
              {errors.password?.type === 'minLength' && <p className="text-red-600">password must be 6 characters</p>}
              {errors.password?.type === 'maxLength' && <p className="text-red-600">password must be less than 20 characters</p>}
            </div>
            {/* confirm password */}
            <div className="px-2 md:px-20 flex-col">
              <p className="label-text">Confirm Password*</p>
              <div className="relative">
                {
                  visibleTwo ?
                    <AiFillEye onClick={() => setVisibleTwo(!visibleTwo)} className="w-5 h-5 absolute end-1 top-4 cursor-pointer"></AiFillEye>
                    :
                    <AiFillEyeInvisible onClick={() => setVisibleTwo(!visibleTwo)} className="w-5 h-5 absolute end-1 top-4 cursor-pointer"></AiFillEyeInvisible>
                }
                <input name="conPassword" type={visibleTwo ? 'text' : 'password'} className="w-full p-3 rounded-lg" {...register("conPassword", { required: true })} />
              </div>
              {errors.conPassword && <p className="text-sm text-red-700">This field is required</p>}
            </div>
            {/* image upload */}
            <div className="px-2 md:px-20 flex-col">
              <label className="label">
                <span className="label-text">Your Image*</span>
              </label>
              <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
            </div>
            {
              errorMessage && (
                <div className='border border-red-400 text-center rounded-lg w-2/3 mx-auto text text-red-600 m-2 '>
                  {
                    errorMessage.slice(0, 9) === 'Firebase:' ? (
                      errorMessage === 'Firebase: Error (auth/email-already-in-use).' ?
                        <p>Email already used</p> :
                        errorMessage === 'Firebase: Error (auth/invalid-email).' ?
                          <p>Email is not formatted correctly</p> :
                          errorMessage === 'Firebase: Error (auth/too-many-requests).' ?
                            <p>Too many attempts, try again later</p> :
                            <p>There was an error while trying to create your account. Please try again later.</p>
                    ) :
                      <p>{errorMessage}</p>
                  }
                </div>
              )
            }
            <button onClick={() => setErrorMessage(null)} className="btn-gl" type="submit">Submit</button>
          </form>
          <div className="divider">OR</div>
          <div className="flex flex-col items-center">
            <p>Social Login</p>
            <AiFillGoogleCircle onClick={handleGoogleSignIn} className="w-12 h-12 cursor-pointer"></AiFillGoogleCircle>
          </div>
          <div className="mt-5 flex flex-col items-center">
            <p>Already have an account? <span> </span>
              <Link to='/login'><span className="underline">Login</span></Link>
            </p>
          </div>
        </div>

      </div>
    </>
  );
};

export default Registration;