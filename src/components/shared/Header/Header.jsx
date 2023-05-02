import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
const Header = () => {
  const {user, logOut} =  useContext(AuthContext);
  console.log(user);

  const logOutHandler = () =>{
    logOut()
    .then(()=>{})
    .then(error=>{
      console.log(error.message);
    })
  }
  return (
    <div className="bg-light">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand fw-bold">BD NM FoodValley</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink className="nav-link" to="/blog">
                  Blog
                </NavLink>
              </li>
            </ul>
            <div>
              {
                user ? <>  <img  data-tooltip-id="my-tooltip"
                data-tooltip-content={user.displayName ? user.displayName: "No Name"}
                style={{ width: "44px", height: "44px" }}
                className="rounded-circle"
                src={user.photoURL ? user.photoURL : 'https://images.unsplash.com/photo-1584999734482-0361aecad844?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'}
                alt=""
              />
              <Tooltip id="my-tooltip" /> <button onClick={logOutHandler} className="btn btn-primary">Log Out</button> </> : <Link to='/login' className="btn btn-info ms-2">LogIn</Link>
              }
             
              
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
