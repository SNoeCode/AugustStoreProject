import React from "react";
import backgroundImage from "../../public/Images/depositphotos_79651020-stock-photo-shopping-cart-with-big-car.png";

const backgroundImage = () => {
  return (
    <div
      className="wrapper-detail-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Rest of the component */}
    </div>
  );
};

export default backgroundImage;
