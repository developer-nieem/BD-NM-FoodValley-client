import React from "react";

const Home = () => {
  return (
    <>
      <div className="banner-part pb-5">
        <div className="container pb-5">
          <div className="row ">
            <div className="col-md-4 mt-5 ps-5">
              <h2 className="text-white mt-5 pt-5 fw-bolder">
                Delicious Burger & French Fry
              </h2>
              <p className="text-white">
                Progressively simplify effective e-toilers and process-centric
                methods of empowerment. Quickly pontificate parallel.
              </p>
              <button className="btn btn-warning">Order Now</button>
            </div>
            <div className="col-md-8">
              <div>
                <img
                  className="img-fluid mt-5"
                  src="https://dilicious-demo.pbminfotech.com/burger/wp-content/uploads/sites/3/2023/03/burger-01.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Extra section start here  */}
      <div className="container my-4">
        <div className="row">
          <div className="col-md-4">
            <div className="card text-bg-dark">
              <img
                style={{ height: "300px" }}
                src="https://images.unsplash.com/photo-1559528896-c5310744cce8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                className="card-img img-fluid"
                alt="..."
              />
              <div className="card-img-overlay">
                <h5 className="card-title fw-bolder fs-1 text-warning">
                  CHEESY PIZZA
                </h5>
                <p className="card-text">
                  Cheesy pizza is a popular type of pizza that is topped with a
                  generous amount of melted cheese.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-bg-dark my-2">
              <img
                style={{ height: "300px" }}
                src="https://media.istockphoto.com/id/1316673633/photo/close-up-of-hamburger-with-black-background.jpg?b=1&s=170667a&w=0&k=20&c=pC6M4JiM1Q6arp7f0Uppwp5BNootDzPpJwoIwp98s5I="
                className="card-img"
                alt="..."
              />
              <div className="card-img-overlay">
                <h5 className="card-title fw-bolder fs-1 text-warning">
                  Perfect Burger
                </h5>
                <p className="card-text">
                  "Bite into Deliciousness: The Art of Crafting the Perfect
                  Burger" is a title that suggests a focus on the creation and
                  enjoyment of burgers.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-bg-dark my-2">
              <img
                style={{ height: "300px" }}
                src="https://images.unsplash.com/photo-1578160112054-954a67602b88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                className="card-img"
                alt="..."
              />
              <div className="card-img-overlay">
                <h5 className="card-title fw-bolder fs-1 text-warning"> Biryani</h5>
                <p className="card-text">
                Biryani is a popular South Asian rice dish that is made with fragrant basmati rice, a variety of spices, and meat or vegetables.
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
