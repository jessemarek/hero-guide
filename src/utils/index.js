import React from "react";

//Returns a matching fusion item component from data in props
//Otherwise returns <DefaultComponent /> if no match is found
export const returnComponent = (key, id, componentList, DefaultComponent) => {
  const TagName = componentList[key];

  return TagName ? <TagName key={id} /> : <DefaultComponent key={id} />;
};

//Callback for alphabetizing Hero names
export const sortByProp = (prop) => {
  return (a, b) => (a[prop] < b[prop] ? -1 : 1);
};

//Takes in a number from the hero's abilities array and returns the corresponding ability type
export const returnType = (num) => {
  switch (num) {
    case 1:
      return "Ultimate Ability";

    case 2:
      return (
        <>
          Unlocks with <span className="grn-txt">Green Fusion</span>
        </>
      );

    case 3:
      return (
        <>
          Unlocks with <span className="blu-txt">Blue Fusion</span>
        </>
      );

    case 4:
      return (
        <>
          Unlocks with <span className="prp-txt">Purple Fusion</span>
        </>
      );

    case 5:
      return (
        <>
          Unlocks with <span className="org-txt">Awakening</span>
        </>
      );

    default:
      return "Hero Ability";
  }
};

//Returns a number of star icon <img>s of a specified type
export const returnStars = (num, type) => {
  if (num > 0) {
    return (
      <>
        <img
          src={`/assets/images/icons/hero-info/${
            type === "enchant" ? "enchantment-" : ""
          }star.png`}
          width={`${type === "enchant" ? "12" : "16"}`}
          height={`${type === "enchant" ? "12" : "16"}`}
          alt=""
        />
        {returnStars(num - 1, type)}
      </>
    );
  }
};

//Format text from hero and item data from kabob case into
//regular strings with spaces and capitalize the first letters
export const formatText = (text) => {
  return text
    .split("-")
    .map((i) =>
      i !== "of" && i !== "the" ? i.charAt(0).toUpperCase() + i.slice(1) : i
    )
    .join(" ");
};
