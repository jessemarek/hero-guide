import React from "react";

const CreditCard = ({ avatar, member_name, guild }) => {
  return (
    <li className="hero-card credits-card">
      <img src={avatar} alt="" />
      <p className="card-title">
        {member_name}
        <span className="tiny-text">{guild}</span>
      </p>
    </li>
  );
};

export default CreditCard;
