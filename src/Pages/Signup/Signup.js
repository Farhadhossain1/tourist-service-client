import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext/UserContext';



const Signup = () => {
  const {signup, userUpdateProfile} = useContext(AuthContext);

  const handleSubmit = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name,email,password)

    signup(email, password)
    .then(result =>{
      const user = result.user;
      console.log(user);
      handleUpdate(name, photoURL);
      toast.success("Sign Up SuccessFull")
    })
  }

  const handleUpdate = (name, photoURL) =>{
    const profile = {displayName: name, photoURL};
    userUpdateProfile(profile);
  }
  
    return (
      <div className="hero  bg-base-200">
      <div className="hero-content flex-col w-4/5">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign Up!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" name='name' placeholder="name" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input type="text" name='photoURL' placeholder="photoURL" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name='email' placeholder="email" defaultValue={''} className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name='password' placeholder="password" className="input input-bordered" />
                <h3 className='mt-2 text-center'>Already have an account? Please <Link to='/login' className='hover:underline text-orange-500 text-lg'>Login</Link></h3>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    );
};

export default Signup;