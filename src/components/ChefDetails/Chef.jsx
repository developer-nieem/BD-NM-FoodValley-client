import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ChefDetails from "./ChefDetails";

const Chef = () => {
  const [chefData, setChefData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://assignment10-server-developer-nieem.vercel.app/chef")
      .then((res) => res.json())
      .then((data) => {
        setChefData(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {chefData.map((item) => (
            <ChefDetails key={item.id} chefItem={item}></ChefDetails>
          ))}
        </div>
      )}
    </>
  );
};

export default Chef;
