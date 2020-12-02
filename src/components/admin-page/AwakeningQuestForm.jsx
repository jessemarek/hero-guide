import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { awakeningQuestForm } from "../../state/adminFormState";

const AwakeningQuestForm = () => {
  const [formValues, setFormValues] = useRecoilState(awakeningQuestForm);

  const changeHandler = (event) => {
    const { name, value } = event.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const radioHandler = (event) => {
    const { name, value } = event.target;

    setFormValues({
      ...formValues,
      [name]: value === "true" ? true : false,
    });
  };
  return (
    <>
      <h1>Awakening Quest</h1>
      <form>
        <p>Hero Awakened?</p>
        <label>
          <input
            name="awakened"
            type="radio"
            onChange={radioHandler}
            value="false"
            checked={!formValues.awakened}
            required
          />{" "}
          No
        </label>
        <label>
          <input
            name="awakened"
            type="radio"
            onChange={radioHandler}
            value="true"
            checked={formValues.awakened}
            required
          />{" "}
          Yes
        </label>
        {formValues.awakened && (
          <>
            <label>
              Awakened Quote{" "}
              <input
                name="quote"
                type="text"
                onChange={changeHandler}
                value={formValues.quote}
              />
            </label>
            <label>
              Signature Item{" "}
              <input
                name="sig_item"
                type="text"
                onChange={changeHandler}
                value={formValues.sig_item}
              />
            </label>
            <Quest1Form />
            <Quest2Form />
            <Quest3Form />
            <>
              <p>Sig Item Stats</p>
              <textarea
                readOnly
                value={formValues.sig_stats.map(
                  (item) => `{ ${item.stat}, ${item.value}, ${item.enchant} }`
                )}
              />
              <SigStatsForm />
            </>
            <>
              <p>Forge Bonus</p>
              <ForgeBonusForm number={1} />
              <ForgeBonusForm number={2} />
              <ForgeBonusForm number={3} />
            </>
          </>
        )}
      </form>
    </>
  );
};

export default AwakeningQuestForm;

const Quest1Form = () => {
  const [formValues, setFormValues] = useRecoilState(awakeningQuestForm);

  const changeHandler = (event) => {
    const { name, value } = event.target;

    setFormValues({
      ...formValues,
      quest_1: {
        ...formValues.quest_1,
        [name]: value,
      },
    });
  };

  return (
    <>
      <p>Quest 1</p>
      <label>
        Chapter{" "}
        <input
          name="chapter"
          type="text"
          onChange={changeHandler}
          value={formValues.quest_1.chapter}
          placeholder="Ex: Chapter 14 - Predator and Prey"
        />
      </label>
      <label>
        Fragment{" "}
        <input
          name="fragment"
          type="text"
          onChange={changeHandler}
          value={formValues.quest_1.fragment}
          placeholder="Ex: dragon-spaulders"
        />
      </label>
      <label>
        Item 1{" "}
        <input
          name="item_1"
          type="text"
          onChange={changeHandler}
          value={formValues.quest_1.item_1}
          placeholder="Ex: torch-of-destruction"
        />
      </label>
      <label>
        Item 2{" "}
        <input
          name="item_2"
          type="text"
          onChange={changeHandler}
          value={formValues.quest_1.item_2}
          placeholder="Ex: spartan-dagger"
        />
      </label>
      <label>
        Item 3{" "}
        <input
          name="item_3"
          type="text"
          onChange={changeHandler}
          value={formValues.quest_1.item_3}
          placeholder="Ex: scepter-of-the-abyss"
        />
      </label>
    </>
  );
};

const Quest2Form = () => {
  const [formValues, setFormValues] = useRecoilState(awakeningQuestForm);

  const changeHandler = (event) => {
    const { name, value } = event.target;

    setFormValues({
      ...formValues,
      quest_2: {
        ...formValues.quest_2,
        [name]: value,
      },
    });
  };

  return (
    <>
      <p>Quest 2</p>
      <label>
        Trial Name{" "}
        <input
          name="trial_name"
          type="text"
          onChange={changeHandler}
          value={formValues.quest_2.trial_name}
        />
      </label>
      <label>
        Trial Icon{" "}
        <input
          name="trial_icon"
          type="text"
          onChange={changeHandler}
          value={formValues.quest_2.trial_icon}
        />
      </label>
      <label>
        Completions{" "}
        <input
          name="completions"
          type="number"
          onChange={changeHandler}
          value={formValues.quest_2.completions}
        />
      </label>
    </>
  );
};

const Quest3Form = () => {
  const [formValues, setFormValues] = useRecoilState(awakeningQuestForm);

  const changeHandler = (event) => {
    const { name, value } = event.target;

    setFormValues({
      ...formValues,
      quest_3: {
        ...formValues.quest_3,
        [name]: value,
      },
    });
  };

  return (
    <>
      <p>Quest 3</p>
      <label>
        Chapter{" "}
        <input
          name="chapter"
          type="text"
          onChange={changeHandler}
          value={formValues.quest_3.chapter}
          placeholder="Ex: Chapter 14 - Predator and Prey"
        />
      </label>
      <label>
        Requirement{" "}
        <input
          name="requirement"
          type="text"
          onChange={changeHandler}
          value={formValues.quest_3.requirement}
        />
      </label>
    </>
  );
};

const SigStatsForm = () => {
  const [sigStats, setSigStats] = useRecoilState(awakeningQuestForm);
  const [formValues, setFormValues] = useState({
    stat: "none",
    value: 0,
    enchant: 0,
  });

  const changeHandler = (event) => {
    const { name, value } = event.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const clickHandler = (event) => {
    event.preventDefault();

    setSigStats({
      ...sigStats,
      sig_stats: [...sigStats.sig_stats, formValues],
    });
  };

  const clearStats = (event) => {
    event.preventDefault();

    setSigStats({
      ...sigStats,
      sig_stats: [],
    });
  };

  return (
    <>
      <label>
        Stat
        <input
          name="stat"
          type="text"
          onChange={changeHandler}
          value={formValues.stat}
        />
      </label>
      <label>
        Value
        <input
          name="value"
          type="number"
          onChange={changeHandler}
          value={formValues.value}
        />
      </label>
      <label>
        Enchant
        <input
          name="enchant"
          type="number"
          onChange={changeHandler}
          value={formValues.enchant}
        />
      </label>
      <button type="button" onClick={clickHandler}>
        Add Stats
      </button>
      <button type="button" onClick={clearStats}>
        Clear Stats
      </button>
    </>
  );
};

const ForgeBonusForm = ({ number }) => {
  const [formValues, setFormValues] = useRecoilState(awakeningQuestForm);

  const changeHandler = (event) => {
    const { name, value } = event.target;

    setFormValues({
      ...formValues,
      forge_bonus: {
        ...formValues.forge_bonus,
        [number]: {
          ...formValues.forge_bonus[number],
          [name]: value,
        },
      },
    });
  };

  return (
    <>
      <label>
        Bonus {number}{" "}
        <input
          name="stat"
          type="text"
          onChange={changeHandler}
          value={formValues.forge_bonus[number].stat}
        />
        <input
          name="bonus"
          type="text"
          onChange={changeHandler}
          value={formValues.forge_bonus[number].bonus}
        />
        <input
          name="value"
          type="number"
          onChange={changeHandler}
          value={formValues.forge_bonus[number].value}
        />
      </label>
    </>
  );
};
