import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import { FaRegBookmark } from "react-icons/fa";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ChefViewDetails = () => {
  const chefItem = useLoaderData();
  const [disabeld, setDisabeld] =  useState(false)
  const {
    id,
    chef_picture,
    chef_name,
    years_of_experience,
    num_of_recipes,
    likes,
    chef_bio,
  } = chefItem;

  const favHandlar = (event) =>{
    toast("Added Favorite !");
    event.target.disabled = true;
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 my-5">
          <img
            className="img-fluid rounded-3 shadow-lg"
            src={chef_picture}
            alt=""
          />
        </div>
        <div className="col-md-6 my-5">
          <h1>
            {" "}
            <b>Name: </b> {chef_name}
          </h1>
          <p>
            <b>Bio: </b> {chef_bio}
          </p>
          <p>
            <b>Experience: </b> {years_of_experience} Years
          </p>
          <p>
            <b>Recipes: </b> {num_of_recipes}{" "}
          </p>
          <p>
            <b>Like: </b> {likes}{" "}
          </p>
        </div>
      </div>

      {/* Recipes Card  */}
      <div className="container my-4">
        <h3 className="text-center">Chef Most Top Recipes</h3>
        <div className="card-group">
          {chefItem.recipes.map((recipe, i) => (
            <>
              <div key={i} className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    <b>Recipe Name :</b> {recipe.recipe_name}
                  </h5>
                  <p className="card-text">
                    <span className="fw-semibold text-decoration-underline">
                      Ingredients:
                    </span>
                    <ul className="list-group">
                      {recipe.ingredients.map((ingredient) => (
                        <div>
                          <li className="list-group-item">{ingredient}</li>
                        </div>
                      ))}
                    </ul>
                    <p className="p-3 bg-light mt-2 shadow-lg">
                      {" "}
                      <span className="fw-semibold text-decoration-underline">
                        Cooking method:
                      </span>{" "}
                      {recipe.cooking_method}
                    </p>
                  </p>
                </div>
                <div>
                  <div className="card-footer d-flex justify-content-between align-items-center">
                    <small className="text-body-secondary d-flex">
                      <b>Rating: </b>
                      <Rating style={{ maxWidth: 100 }} value={recipe.rating} readOnly /> {recipe.rating}
                    </small>
                    <button onClick={favHandlar} className="btn btn-dark" > <FaRegBookmark></FaRegBookmark> </button>
                    
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChefViewDetails;
