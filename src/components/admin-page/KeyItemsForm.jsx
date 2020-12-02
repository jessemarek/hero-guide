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

      <optgroup label="Purple Items">
        <option value="adamantite-scimitar">Adamantite Scimitar</option>
        <option value="ancient-royal-sword">Ancient Royal Sword</option>
        <option value="ancient-rune">Ancient Rune</option>
        <option value="art-of-war">Art of War</option>
        <option value="athena's-blessing">Athena's Blessing</option>
        <option value="azrael's-roar">Azrael's Roar</option>
        <option value="butterfly-swords">Butterfly Swords</option>
        <option value="cap-of-souls">Cap of Souls</option>
        <option value="carnage-mallet">Carnage Mallet</option>
        <option value="chain-pendant">Chain Pendant</option>
        <option value="clasp-of-life">Clasp of Life</option>
        <option value="conjuring-chain">Conjuring Chain</option>
        <option value="conqueror's-chestplate">Conqueror's Chestplate</option>
        <option value="crystal-staff">Crystal Staff</option>
        <option value="dark-wizard's-figurine">Dark Wizard's Figurine</option>
        <option value="demolisher">Demolisher</option>
        <option value="destruction">Destruction</option>
        <option value="doomsday-armor">Doomsday Armor</option>
        <option value="doomsday-blade">Doomsday Blade</option>
        <option value="elvish-etude">Elvish Etude</option>
        <option value="explosive-scepter">Explosive Scepter</option>
        <option value="eye-of-death">Eye of Death</option>
        <option value="fire-ruby">Fire Ruby</option>
        <option value="frozen-teardrop">Frozen Teardrop</option>
        <option value="ghostly-mantle">Ghostly Mantle</option>
        <option value="goblet-of-the-ancients">Goblet of the Ancients</option>
        <option value="goblin's-scimitar">Goblin's Scimitar</option>
        <option value="grand-staff">Grand Staff</option>
        <option value="grim-slasher">Grim Slasher</option>
        <option value="guardian-plate">Guardian Plate</option>
        <option value="healing-stone">Healing Stone</option>
        <option value="heavenly-amulet">Heavenly Amulet</option>
        <option value="heavy-ballista">Heavy Ballista</option>
        <option value="heavy-club">Heavy Club</option>
        <option value="ice-smasher">Ice Smasher</option>
        <option value="light-battleaxe">Light Battleaxe</option>
        <option value="lilith-staff">Lilith Staff</option>
        <option value="maiden's-trinket">Maiden's Trinket</option>
        <option value="natural-remedy">Natural Remedy</option>
        <option value="nature's-power">Nature's Power</option>
        <option value="phantom-jar">Phantom Jar</option>
        <option value="pride's-protector">Pride's Protector</option>
        <option value="recovery-potion">Recovery Potion</option>
        <option value="runic-crystal-ball">Runic Crystal Ball</option>
        <option value="sage-wand">Sage Wand</option>
        <option value="sapphire-bracelet">Sapphire Bracelet</option>
        <option value="scepter-of-the-abyss">Scepter of the Abyss</option>
        <option value="scepter-of-time">Scepter of Time</option>
        <option value="scorching-spear">Scorching Spear</option>
        <option value="shuriken">Shuriken</option>
        <option value="soul-stealing-necklace">Soul Stealing Necklace</option>
        <option value="spartan-dagger">Spartan Dagger</option>
        <option value="stealth-cape">Stealth Cape</option>
        <option value="tribal-battleaxe">Tribal Battleaxe</option>
        <option value="tri-spirit-orb">Tri Spirit Orb</option>
        <option value="voodoo-manuscript">Voodoo Manuscript</option>
        <option value="wellspring-water">Wellspring Water</option>
        <option value="whisperwind-bow">Whisperwind Bow</option>
      </optgroup>
      <optgroup label="Orange Items">
        <option value="aegis">Aegis</option>
        <option value="angelic-fan">Angelic Fan</option>
        <option value="angel's-wings">Angel's Wings</option>
        <option value="ares'-spear">Ares' Spear</option>
        <option value="armor-of-shadows">Armor of Shadows</option>
        <option value="atlantean-battleaxe">Atlantean Battleaxe</option>
        <option value="bandit's-dagger">Bandit's Dagger</option>
        <option value="beastly-guardian">Beastly Guardian</option>
        <option value="blade-of-cataclysm">Blade of Cataclysm</option>
        <option value="blade-of-chaos">Blade of Chaos</option>
        <option value="blade-of-illusion">Blade of Illusion</option>
        <option value="blade-of-time">Blade of Time</option>
        <option value="book-of-mysteries">Book of Mysteries</option>
        <option value="caduceus">Caduceus</option>
        <option value="champion's-cloak">Champion's Cloak</option>
        <option value="commander's-blade">Commander's Blade</option>
        <option value="cosmic-shield">Cosmic Shield</option>
        <option value="demonic-visage">Demonic Visage</option>
        <option value="demon's-skull">Demon's Skull</option>
        <option value="ethereal-cloak">Ethereal Cloak</option>
        <option value="fire-hardened-steel">Fire Hardened Steel</option>
        <option value="gaia's-cutlass">Gaia's Cutlass</option>
        <option value="helira's-mask">Helira's Mask</option>
        <option value="helmet-of-darkness">Helmet of Darkness</option>
        <option value="ironbark-warbow">Ironbark Warbow</option>
        <option value="jewel-of-helios">Jewel of Helios</option>
        <option value="jupiter's-hammer">Jupiter's Hammer</option>
        <option value="kalerian-granite">Kalerian Granite</option>
        <option value="kretonian-talisman">Kretonian Talisman</option>
        <option value="lost-epic">Lost Epic</option>
        <option value="midnight-dream">Midnight Dream</option>
        <option value="mystic-dragonscale">Mystic Dragonscale</option>
        <option value="nemean-hide">Nemean Hide</option>
        <option value="oracle's-robe">Oracle's Robe</option>
        <option value="poseidon's-trident">Poseidon's Trident</option>
        <option value="priestly-scepter">Priestly Scepter</option>
        <option value="primordial-stone">Primordial Stone</option>
        <option value="renegade's-armor">Renegade's Armor</option>
        <option value="scepter-of-truth">Scepter of Truth</option>
        <option value="shadow-slayer">Shadow Slayer</option>
        <option value="staff-of-illumination">Staff of Illumination</option>
        <option value="stormrider-armor">Stormrider Armor</option>
        <option value="sword-of-olympus">Sword of Olympus</option>
        <option value="thunderbolt">Thunderbolt</option>
        <option value="titanic-axe">Titanic Axe</option>
        <option value="torch-of-destruction">Torch of Destruction</option>
        <option value="transforming-mask">Transforming Mask</option>
        <option value="underworld-saber">Underworld Saber</option>
        <option value="victory's-scepter">Victory's Scepter</option>
        <option value="zealot-battleplate">Zealot Battleplate</option>
      </optgroup>
    </select>
  );
};
