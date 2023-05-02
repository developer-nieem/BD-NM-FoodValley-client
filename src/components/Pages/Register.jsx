import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="w-25 mx-auto ">
      <div className="card p-4 my-5">
      <form >
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