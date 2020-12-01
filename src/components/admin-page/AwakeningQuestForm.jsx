import React from "react";
import { useRecoilState } from "recoil";
import { awakeningQuestForm } from "../../state/adminFormState";

const AwakeningQuestForm = () => {
  const [formValues, setFormValues] = useRecoilState(awakeningQuestForm);

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
      </form>
    </>
  );
};

export default AwakeningQuestForm;
