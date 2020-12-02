import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { abilitiesForm } from "../../state/adminFormState";

const AbilitiesForm = () => {
  const initFormValues = {
    name: "",
    description: "",
    attributes: "none",
    stats: "",
  };

  const [formValues, setFormValues] = useState(initFormValues);
  const [abilityList, setAbilityList] = useRecoilState(abilitiesForm);

  const changeHandler = (event) => {
    let { name, value } = event.target;

    if (name === "stats") {
      value = value.split(". ").join(";").split("\n").join(";");
    }

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const clickHandler = (event) => {
    event.preventDefault();

    const statsList = formValues.stats.split(";");

    const newAbility = {
      name: formValues.name,
      description: formValues.description,
      attributes: formValues.attributes,
      stats: statsList,
    };

    setAbilityList([...abilityList, newAbility]);
    setFormValues(initFormValues);
  };

  return (
    <>
      <h1>Abilities</h1>
      <ol>
        {abilityList.map((ability, idx) => (
          <li key={idx}>
            Name: {ability.name} Attriubte: {ability.attributes} Stats:{" "}
            {ability.stats}
          </li>
        ))}
      </ol>
      <form>
        <label>
          Name{" "}
          <input
            name="name"
            type="text"
            onChange={changeHandler}
            value={formValues.name}
          />
        </label>
        <label>
          Description{" "}
          <textarea
            name="description"
            onChange={changeHandler}
            value={formValues.description}
          />
        </label>
        <label>
          Stats{" "}
          <textarea
            name="stats"
            placeholder="indicate new line with a ;"
            onChange={changeHandler}
            value={formValues.stats}
          />
        </label>
        <p>Attributes</p>
        <label>
          <input
            name="attributes"
            type="radio"
            onChange={changeHandler}
            value="none"
            checked={formValues.attributes === "none"}
          />{" "}
          None
        </label>
        <label>
          <input
            name="attributes"
            type="radio"
            onChange={changeHandler}
            value="fire"
            checked={formValues.attributes === "fire"}
          />{" "}
          Fire
        </label>
        <label>
          <input
            name="attributes"
            type="radio"
            onChange={changeHandler}
            value="ice"
            checked={formValues.attributes === "ice"}
          />{" "}
          Ice
        </label>
        <label>
          <input
            name="attributes"
            type="radio"
            onChange={changeHandler}
            value="lightning"
            checked={formValues.attributes === "lightning"}
          />{" "}
          Lightning
        </label>
        <button type="button" onClick={clickHandler}>
          Add Ability
        </button>
      </form>
    </>
  );
};

export default AbilitiesForm;
