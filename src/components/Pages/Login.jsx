import React, { useContext, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
const {signInUser, loginWithGoogle, loginWithGithub} = useContext(AuthContext);

const [showError , setShowError] =  useState('')
    const loginHandler= event =>{
        event.preventDefault();

        const form =  event.target;
       
        const email = form.email.value;
        const pass = form.password.value;
        console.log( email,pass );
        form.reset()

        signInUser(email, pass)
        .then(result =>{
            const user =  result.user;
            console.log(user);
            setShowError('');
           
            
        })
        .catch(error=>{
            console.log(error.message);
            setShowError(error.message.slice(9,100))
        })

    }

    // google login
    const googleHandler =() =>{
        loginWithGoogle()
        .then(result =>{
            const user =  result.user;
            console.log(user);
        })
        .catch(error=>{
            console.log(error.message);
        })
    }

    // GitHub login

    const githubHandler =() =>{
        loginWithGithub()
        .then(result =>{
            const user =  result.user;
            console.log(user);
        })
        .catch(error=>{
            console.log(error.message);
        })
    }
  return (
    <div className="mobile-fluid   mx-auto " style={{width:'320px'}}>
      <div className="card p-4 my-5 mx-2">
      <form onSubmit={loginHandler}>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            required
          />
         
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            required
          />
        </div>
                <p>{showError}</p>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
        <p><small>Don’t have an account? <Link to="/register">Create an account</Link></small> </p>
      </form>
      <div>
      <div className="list-group">
  <Link onClick={googleHandler} className="list-group-item list-group-item-action " aria-current="true">
   <FaGoogle></FaGoogle> Login with Google
  </Link>
  <Link onClick={githubHandler}  className="list-group-item list-group-item-action"><FaGithub></FaGithub> Login with GitHub</Link>
 
</div>
      </div>
      </div>
    </div>
  );
};

export default Login;
