import React from "react";

const CreditCard = (props) => {
  const { avatar, member_name, guild } = props.data;

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
