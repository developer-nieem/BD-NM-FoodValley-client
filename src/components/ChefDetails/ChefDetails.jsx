import React from "react";
import { FaCalendarAlt, FaHamburger, FaThumbsUp, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import LazyLoad from 'react-lazy-load';

const ChefDetails = ({ chefItem }) => {
    const {id, chef_picture, chef_name, years_of_experience, num_of_recipes, likes} = chefItem
  return (
    <>
      <div className="col">
        <div className="card h-100">
          <LazyLoad height={250} offset={100} >
          <img src={chef_picture} className="card-img-top " alt="..." style={{height:'250px'}} />
          </LazyLoad>
          <div className="card-body">
            <h5 className="card-title">Name: {chef_name}</h5>
            <p className="pt-2">
             <div className="d-flex justify-content-between">
                <div>
                    <FaCalendarAlt></FaCalendarAlt> Experience: {years_of_experience}y
                </div>
                <div>
                    <FaHamburger></FaHamburger> Recipes: {num_of_recipes}
                </div>
                <div >
                <FaThumbsUp></FaThumbsUp> {num_of_recipes}
            </div>
             </div>
             <div className="pt-5 text-center">
                <Link to={`/chef/${id}`} className="btn btn-primary w-100"> View Recipes</Link>
            </div>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChefDetails;
