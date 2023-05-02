import React from "react";
import Header from "../components/shared/Header/Header";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../components/shared/Footer/Footer";

const Main = () => {
  const navigation = useNavigation();
  return (
    <div>
      <Header></Header>
      {/* Loader */}
      <div>
        {navigation.state === "loading" && (
          <div className="text-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
      </div>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
