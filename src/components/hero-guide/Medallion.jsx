import React from "react";

const Medallion = ({ type }) => {
  return type === "sorceress" ? (
    <div className="medallion-icon">
      <img src="/assets/images/icons/medallions/sorceress-medallion.png" />
      {/* <div className="medallion-tooltip">
        <h4>Sorceress' Medallion</h4>
        <p>
          Heroes owning a Sorceress' Medallion will have their Magic Pierce
          Rating buffed while Awakened Sylphi is on the field
        </p>
      </div> */}
    </div>
  ) : null;
};

export default Medallion;
