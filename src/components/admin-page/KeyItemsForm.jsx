import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { keyItemsForm } from "../../state/adminFormState";
import { formatText } from "../../utils";

const KeyItemsForm = () => {
  const initFormState = { item: "", quantity: "" };
  const [formValues, setFormValues] = useState(initFormState);
  const [itemList, setItemList] = useRecoilState(keyItemsForm);

  const changeHandler = (event) => {
    const { name, value } = event.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const buttonHandler = (event) => {
    event.preventDefault();
    setItemList([...itemList, formValues]);
    setFormValues(initFormState);
  };
  return (
    <>
      <h1>Key Items</h1>
      <ol>
        {itemList.map((item, idx) => (
          <li key={idx}>
            {formatText(item.item)} x {item.quantity}
          </li>
        ))}
      </ol>
      <form>
        <label>
          Item
          <ItemSelectDropDown
            formValues={formValues}
            changeHandler={changeHandler}
          />
        </label>
        <label>
          Quantity
          <input
            name="quantity"
            type="number"
            onChange={changeHandler}
            value={formValues.quantity}
          />
        </label>
        <button type="button" onClick={buttonHandler}>
          Add Item
        </button>
      </form>
    </>
  );
};

export default KeyItemsForm;

const ItemSelectDropDown = ({ formValues, changeHandler }) => {
  return (
    <select name="item" onChange={changeHandler} value={formValues.item}>
      <option value="">-- Select Item --</option>

      <option value="ancient-royal-sword">Ancient Royal Sword</option>
      <option value="ancient-rune">Ancient Rune</option>
      <option value="bandit's-dagger">Bandit's Dagger</option>
      <option value="blade-of-chaos">Blade of Chaos</option>
      <option value="blade-of-illusion">Blade of Illusion</option>
      <option value="clasp-of-life">Clasp of Life</option>
      <option value="champion's-cloak">Champion's Cloak</option>
      <option value="commander's-blade">Commander's Blade</option>
      <option value="crystal-staff">Crystal Staff</option>
      <option value="destruction">Destruction</option>
      <option value="doomsday-armor">Doomsday Armor</option>
      <option value="ethereal-cloak">Ethereal Cloak</option>
      <option value="ghostly-mantle">Ghostly Mantle</option>
      <option value="goblet-of-the-ancients">Goblet of the Ancients</option>
      <option value="grim-slasher">Grim Slasher</option>
      <option value="healing-stone">Healing Stone</option>
      <option value="helmet-of-darkness">Helmet of Darkness</option>
      <option value="ironbark-warbow">Ironbark Warbow</option>
      <option value="jupiter's-hammer">Jupiter's Hammer</option>
      <option value="kretonian-talisman">Kretonian Talisman</option>
      <option value="lost-epic">Lost Epic</option>
      <option value="mystic-dragonscale">Mystic Dragonscale</option>
      <option value="natural-remedy">Natural Remedy</option>
      <option value="nemean-hide">Nemean Hide</option>
      <option value="oracle's-robe">Oracle's Robe</option>
      <option value="phantom-jar">Phantom Jar</option>
      <option value="primordial-stone">Primordial Stone</option>
      <option value="sage-wand">Sage Wand</option>
      <option value="sapphire-bracelet">Sapphire Bracelet</option>
      <option value="scepter-of-the-abyss">Scepter of the Abyss</option>
      <option value="scepter-of-truth">Scepter of Truth</option>
      <option value="shuriken">Shuriken</option>
      <option value="spartan-dagger">Spartan Dagger</option>
      <option value="staff-of-illumination">Staff of Illumination</option>
      <option value="stealth-cape">Stealth Cape</option>
      <option value="stormrider-armor">Stormrider Armor</option>
      <option value="titanic-axe">Titanic Axe</option>
      <option value="torch-of-destruction">Torch of Destruction</option>
      <option value="wellspring-water">Wellspring Water</option>
      <option value="whisperwind-bow">Whisperwind Bow</option>
    </select>
  );
};
