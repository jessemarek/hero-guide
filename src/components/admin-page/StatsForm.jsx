import React from "react";
import { useRecoilState } from "recoil";
import { statsForm } from "../../state/adminFormState";

const StatsForm = () => {
  return (
    <>
      <h1>Stats</h1>
      <form>
        <BaseStatsForm />
        <MaxStatsForm />
        <MedallionsForm />
      </form>
    </>
  );
};

export default StatsForm;

const BaseStatsForm = () => {
  const [formValues, setFormValues] = useRecoilState(statsForm);

  const changeHandler = (event) => {
    const { name, value } = event.target;

    setFormValues({
      ...formValues,
      base_stats: { ...formValues.base_stats, [name]: value },
    });
  };
  return (
    <>
      <p>Base Stats</p>
      <label>
        Health{" "}
        <input
          name="health"
          type="number"
          onChange={changeHandler}
          value={formValues.base_stats.health}
        />
      </label>
      <label>
        Physical Attack{" "}
        <input
          name="p_attack"
          type="number"
          onChange={changeHandler}
          value={formValues.base_stats.p_attack}
        />
      </label>
      <label>
        Magic Attack{" "}
        <input
          name="m_attack"
          type="number"
          onChange={changeHandler}
          value={formValues.base_stats.m_attack}
        />
      </label>
      <label>
        Physical Armor{" "}
        <input
          name="p_armor"
          type="number"
          onChange={changeHandler}
          value={formValues.base_stats.p_armor}
        />
      </label>
      <label>
        Magic Armor{" "}
        <input
          name="m_armor"
          type="number"
          onChange={changeHandler}
          value={formValues.base_stats.m_armor}
        />
      </label>
      <br />
    </>
  );
};

const MaxStatsForm = () => {
  const [formValues, setFormValues] = useRecoilState(statsForm);

  const changeHandler = (event) => {
    const { name, value } = event.target;

    setFormValues({
      ...formValues,
      max_stats: { ...formValues.max_stats, [name]: value },
    });
  };
  return (
    <>
      <p>Max Stats</p>
      <label>
        Health{" "}
        <input
          name="health"
          type="number"
          onChange={changeHandler}
          value={formValues.max_stats.health}
        />
      </label>
      <label>
        Physical Attack{" "}
        <input
          name="p_attack"
          type="number"
          onChange={changeHandler}
          value={formValues.max_stats.p_attack}
        />
      </label>
      <label>
        Magic Attack{" "}
        <input
          name="m_attack"
          type="number"
          onChange={changeHandler}
          value={formValues.max_stats.m_attack}
        />
      </label>
      <label>
        Physical Armor{" "}
        <input
          name="p_armor"
          type="number"
          onChange={changeHandler}
          value={formValues.max_stats.p_armor}
        />
      </label>
      <label>
        Magic Armor{" "}
        <input
          name="m_armor"
          type="number"
          onChange={changeHandler}
          value={formValues.max_stats.m_armor}
        />
      </label>
      <br />
    </>
  );
};

const MedallionsForm = () => {
  const [formValues, setFormValues] = useRecoilState(statsForm);

  const radioChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  return (
    <>
      <p>Medallions</p>
      <label>
        <input
          name="medallions"
          type="radio"
          onChange={radioChangeHandler}
          value=""
          checked={formValues.medallions === ""}
        />{" "}
        None
      </label>
      <label>
        <input
          name="medallions"
          type="radio"
          onChange={radioChangeHandler}
          value="1"
          checked={formValues.medallions === "1"}
        />{" "}
        Sorceress' Medallion
      </label>
    </>
  );
};
