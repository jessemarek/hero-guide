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
    const { value } = event.target;

    const newValue = value
      .split("\n")
      .join("")
      .split('[template_part path="../../shhg-templates/fusion-items/')
      .join("")
      .split('"]');

    const newObj = {
      slot_1: newValue[0],
      slot_2: newValue[1],
      slot_3: newValue[2],
      slot_4: newValue[3],
      slot_5: newValue[4],
      slot_6: newValue[5],
    };

    setFormValues({
      ...formValues,
      [fusionType]: newObj,
    });
  };

  return (
    <textarea
      name={fusionType}
      onChange={changeHandler}
      value={Object.values(formValues[fusionType])}
    />
  );
};
