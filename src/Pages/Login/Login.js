import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext/UserContext';



const Login = () => {
  const {providerLogIn, login} =useContext(AuthContext);
  const location = useLocation();
  const navigate  = useNavigate();
  const from = location?.state?.from?.pathname || "/";

  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () =>{
    providerLogIn(googleProvider)
    .then(result =>{
      const user = result.user;
      console.log(user);
    })
    .catch(error =>console.error(error))
  }

  const handleSubmit = event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password)

    login(email, password)
    .then(result =>{
      const user = result.user;
      console.log(user);
      navigate(from, {replace: true});
    })

  }
  return (
    <div className="hero  bg-base-200">
  <div className="hero-content flex-col w-4/5">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" />
          <label className="label">
            <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <p className='text-center'>New on website? <Link to='/signup' className='hover:underline text-orange-500 text-lg'>Create an account</Link></p>
      </form>
      <button onClick={handleGoogleSignIn} className="btn no-animation"><FcGoogle className='text-3xl'></FcGoogle>Please sign up with google</button>
    </div>
  </div>
</div>
  );
};

export default Login;