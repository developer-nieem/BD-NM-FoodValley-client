import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Register = () => {

    const {createUser, userProfile} = useContext(AuthContext);
    const [showError , setShowError] =  useState('');

    const registerHandler= event =>{
        event.preventDefault();

        const form =  event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const pass = form.password.value;
       
        console.log(name, photo, email,pass );
        form.reset()
        createUser(email, pass)
        .then(result =>{
            const user =  result.user;
            console.log(user);
            setShowError('')
            userProfile(name, photo)
            .then(()=>{})
            .catch(error=>{
                console.log(error.message);
            })
        })
        .catch(error=>{
            console.log(error.message);
            setShowError(error.message.slice(9,500))
        })
    }
    return (
        <div className="mobile-fluid mx-auto " style={{width:'320px'}}>
      <div className="card p-4 my-5 mx-2">
      <form  onSubmit={registerHandler}>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="name"
          />
         
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Photo URL
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="photo"
          />
         
        </div>
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
          Register
        </button>
        <p><small>Already have an account?  <Link to="/login">Login</Link></small> </p>
      </form>
      </div>
    </div>
    );
};

export default Register;