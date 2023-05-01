import React from "react";
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
const Footer = () => {
  return (
    <div className="bg-dark text-white">
        <div className="container pt-5 ">
      <div className="row">
        <div className="col-md-6">
          <h2>BD NM FoodValley</h2>
          <p className="pe-5">
            BD NM FoodValley is a region in Bangladesh known for its diverse and
            delicious culinary offerings. From street food to fine dining, this
            area is a food lover's dream. Visitors can expect to indulge in a
            wide range of local and international dishes, each prepared with
            fresh and flavorful ingredients. With its rich food culture and
            welcoming atmosphere, BD NM FoodValley is a must-visit destination
            for anyone looking to experience the best of Bangladesh's food
            scene.
          </p>
        </div>
        <div className="col-md-3">
          <h5>Our company</h5>
          <ul>
            <li>Contact Us</li>
            <li>FAQ</li>
            <li>Report A Bug</li>
            <li>About Us</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="col-md-3">
          <h5>Contact us</h5>
          <ul className="list-group">
            <li className="list-group-item"> <FaMapMarkerAlt></FaMapMarkerAlt> Dhaka,Bangladesh</li>
            <li className="list-group-item"> <FaEnvelope></FaEnvelope> nieem@gmail.com</li>
          </ul>
        </div>
      </div>
    </div>
    <hr />
    <div>
        <p className="text-center pb-3">© 2023 NM FoodValley , All Rights Reserved.</p>
    </div>
    </div>
  );
};

export default Footer;
