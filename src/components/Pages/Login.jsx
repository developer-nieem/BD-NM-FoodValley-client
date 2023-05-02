import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-25 mx-auto ">
      <div className="card p-4 my-5">
      <form >
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
          Login
        </button>
        <p><small>Don’t have an account? <Link to="/register">Create an account</Link></small> </p>
      </form>
      <div>
      <div className="list-group">
  <Link className="list-group-item list-group-item-action " aria-current="true">
   <FaGoogle></FaGoogle> Login with Google
  </Link>
  <Link  className="list-group-item list-group-item-action"><FaGithub></FaGithub> Login with GitHub</Link>
 
</div>
      </div>
      </div>
    </div>
  );
};

export default Login;
