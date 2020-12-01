import React from "react";
import { useRecoilState } from "recoil";
import { academyTreesForm } from "../../state/adminFormState";

const AcademyTreesForm = () => {
  const [formValues, setFormValues] = useRecoilState(academyTreesForm);

  const changeHandler = (event) => {
    const { name, value } = event.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  return (
    <>
      <h1>Academy Trees</h1>
      <form>
        <label>
          Academy Tree #1
          <select
            name="tree_1"
            onChange={changeHandler}
            value={formValues.tree_1}
            required
          >
            <option disabled value="">
              -- Select Tree --
            </option>
            <option value="1">Ambush</option>
            <option value="3">Combat</option>
            <option value="4">Combat (DoT)</option>
            <option value="5">Combat (Summoning)</option>
            <option value="6">Defense</option>
            <option value="7">Defense (DoT)</option>
            <option value="8">Defense (Summoning)</option>
            <option value="9">Determination</option>
            <option value="10">Determination (Summoning)</option>
            <option value="11">Discipline</option>
            <option value="12">Discipline (DoT)</option>
            <option value="22">Mysticism</option>
            <option value="23">Mysticism (DoT)</option>
            <option value="24">Mysticism (Summoning)</option>
            <option value="28">Support</option>
            <option value="29">Support (Summoning)</option>
            <option value="30">Tactics</option>
          </select>
        </label>
        <label>
          Academy Tree #2
          <select
            name="tree_2"
            onChange={changeHandler}
            value={formValues.tree_2}
            required
          >
            <option disabled value="">
              -- Select Tree --
            </option>
            <option value="2">Chivalry</option>
            <option value="13">Elemental Magic</option>
            <option value="14">Elemental Magic (Healing)</option>
            <option value="15">Fearlessness</option>
            <option value="16">Heroism</option>
            <option value="17">Heroism (Healing)</option>
            <option value="18">Honor</option>
            <option value="19">Honor (Healing)</option>
            <option value="20">Leadership</option>
            <option value="21">Leadership (Healing)</option>
            <option value="25">Poise</option>
            <option value="26">Poise (Healing)</option>
            <option value="27">Resolve</option>
          </select>
        </label>
      </form>
    </>
  );
};

export default AcademyTreesForm;
