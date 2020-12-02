import React from "react";
import { useRecoilState } from "recoil";
import { fusionItemsForm } from "../../state/adminFormState";

const FusionsForm = () => {
  return (
    <>
      <h1>Fusions</h1>
      <form>
        <label>
          Purple Items
          <FusionItemOptions fusionType="purple" />
        </label>
        <label>
          Purple +1 Items
          <FusionItemOptions fusionType="purple_1" />
        </label>
        <label>
          Purple +2 Items
          <FusionItemOptions fusionType="purple_2" />
        </label>
        <label>
          Purple +3 Items
          <FusionItemOptions fusionType="purple_3" />
        </label>
        <label>
          Purple +4 Items
          <FusionItemOptions fusionType="purple_4" />
        </label>
        <label>
          Orange Items
          <FusionItemOptions fusionType="orange" />
        </label>
        <label>
          Orange +1 Items
          <FusionItemOptions fusionType="orange_1" />
        </label>
        <label>
          Orange +2 Items
          <FusionItemOptions fusionType="orange_2" />
        </label>
      </form>
    </>
  );
};

export default FusionsForm;

const FusionItemOptions = ({ fusionType }) => {
  const [formValues, setFormValues] = useRecoilState(fusionItemsForm);

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [fusionType]: { ...formValues[fusionType], [name]: value },
    });
  };

  return (
    <>
      <ol>
        <li>
          <input
            name="slot_1"
            type="text"
            onChange={changeHandler}
            value={formValues[fusionType].slot_1}
          />
        </li>
        <li>
          <input
            name="slot_2"
            type="text"
            onChange={changeHandler}
            value={formValues[fusionType].slot_2}
          />
        </li>
        <li>
          <input
            name="slot_3"
            type="text"
            onChange={changeHandler}
            value={formValues[fusionType].slot_3}
          />
        </li>
        <li>
          <input
            name="slot_4"
            type="text"
            onChange={changeHandler}
            value={formValues[fusionType].slot_4}
          />
        </li>
        <li>
          <input
            name="slot_5"
            type="text"
            onChange={changeHandler}
            value={formValues[fusionType].slot_5}
          />
        </li>
        <li>
          <input
            name="slot_6"
            type="text"
            onChange={changeHandler}
            value={formValues[fusionType].slot_6}
          />
        </li>
      </ol>
    </>
  );
};
