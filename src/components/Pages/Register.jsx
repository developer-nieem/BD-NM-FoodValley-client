import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Register = () => {

    const {createUser, userProfile} = useContext(AuthContext);

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
            
            userProfile(name, photo)
            .then(()=>{})
            .catch(error=>{
                console.log(error.message);
            })
        })
        .catch(error=>{
            console.log(error.message);
        })
    }
    return (
        <div className="w-25 mx-auto ">
      <div className="card p-4 my-5">
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