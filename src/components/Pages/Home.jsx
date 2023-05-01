import React from "react";

const Home = () => {
  return (
    <div className="banner-part">
     <div className="container">
     <div className="row ">
      <div className="col-md-4 mt-5 ps-5">
        <h2 className="text-white mt-5 pt-5 fw-bolder">Delicious Burger & French Fry</h2>
        <p className="text-white">Progressively simplify effective e-toilers and process-centric methods of empowerment. Quickly pontificate parallel.</p>
        <button className="btn btn-warning">Order Now</button>
      </div>
      <div className="col-md-8">
        <div>
            <img className="img-fluid mt-5" src="https://dilicious-demo.pbminfotech.com/burger/wp-content/uploads/sites/3/2023/03/burger-01.png" alt="" />
        </div>
      </div>
      </div>
     </div>
    </div>
  );
};

export default Home;
