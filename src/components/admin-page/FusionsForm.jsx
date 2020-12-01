import React from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { fusionItemsForm, fusionItemList } from "../../state/adminFormState";

const FusionsForm = () => {
  return (
    <>
      <h1>Fusions</h1>
      <form>
        <label>
          Purple Items
          <FusionItemOptions name="purple" />
        </label>
        <label>
          Purple +1 Items
          <FusionItemOptions name="purple_1" />
        </label>
        <label>
          Purple +2 Items
          <FusionItemOptions name="purple_2" />
        </label>
        <label>
          Purple +3 Items
          <FusionItemOptions name="purple_3" />
        </label>
        <label>
          Purple +4 Items
          <FusionItemOptions name="purple_4" />
        </label>
        <label>
          Orange Items
          <FusionItemOptions name="orange" />
        </label>
        <label>
          Orange +1 Items
          <FusionItemOptions name="orange_1" />
        </label>
        <label>
          Orange +2 Items
          <FusionItemOptions name="orange_2" />
        </label>
      </form>
    </>
  );
};

export default FusionsForm;

const FusionItemOptions = ({ name }) => {
  const itemList = useRecoilValue(fusionItemList);
  const [formValues, setFormValues] = useRecoilState(fusionItemsForm);

  const changeHandler = (event) => {
    const { name, value } = event.target;

    if (formValues[name].length < 6) {
      setFormValues({
        ...formValues,
        [name]: [...formValues[name], value],
      });
    }
  };
  return (
    <>
      <ol>
        {itemList[name].map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ol>
      <select
        name={name}
        onChange={changeHandler}
        defaultValue=""
        disabled={formValues[name].length === 6}
      >
        <option value="">-- Select Item --</option>
        <optgroup label="Unknown">
          <option value="unknown">Unknown</option>
        </optgroup>
        <optgroup label="Blue Items">
          <option value="banshee-essence">Banshee Essence</option>
          <option value="black-dragon's-tailbone">
            Black Dragon's Tailbone
          </option>
          <option value="bracer-of-salvation">Bracer of Salvation</option>
          <option value="broadsword">Broadsword</option>
          <option value="bulwark-of-vitality">Bulwark of Vitality</option>
          <option value="charger-boots">Charger Boots</option>
          <option value="chipped-blade">Chipped Blade</option>
          <option value="cloud-walkers">Cloud Walkers</option>
          <option value="demonic-longsword">Demonic Longsword</option>
          <option value="dwarvish-chestplate">Dwarvish Chestplate</option>
          <option value="emerald-cuirass">Emerald Cuirass</option>
          <option value="gem-of-fortitude">Gem of Fortitude</option>
          <option value="gem-of-vigor">Gem of Vigor</option>
          <option value="golden-mallet">Golden Mallet</option>
          <option value="heavy-breastplate">Heavy Breastplate</option>
          <option value="legendary-gemstone">Legendary Gemstone</option>
          <option value="luna's-boots">Luna's Boots</option>
          <option value="mask-of-sacrifice">Mask of Sacrifice</option>
          <option value="obsidian-tome">Obsidian Tome</option>
          <option value="ritual-blade">Ritual Blade</option>
          <option value="rotating-hacksaw">Rotating Hacksaw</option>
          <option value="runic-eulogy">Runic Eulogy</option>
          <option value="scepter-of-prophecy">Scepter of Prophecy</option>
          <option value="soothsayer-handwraps">Soothsayer Handwraps</option>
          <option value="thorned-pauldrons">Thorned Pauldrons</option>
          <option value="viking-helmet">Viking Helmet</option>
        </optgroup>
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
        <optgroup label="Red Items">
          <option value="cloak-of-wisdom">Cloak of Wisdom</option>
          <option value="crescent-staff">Cresent Staff</option>
          <option value="hurricane-blade">Hurricane Blade</option>
          <option value="master's-cap">Master's Cap</option>
          <option value="paladins-chestplate">Paladin's Chestplate</option>
          <option value="pure-jade-chest">Pure Jade Chest</option>
          <option value="songbird-ring">Songbird Ring</option>
          <option value="sphere-of-the-sands">Sphere of the Sands</option>
          <option value="tyrants-helmet">Tyrant's Helmet</option>
          <option value="widowmaker">Widowmaker</option>
        </optgroup>
      </select>
    </>
  );
};
