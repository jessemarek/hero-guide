import { selector } from "recoil";
import { formatText } from "../../utils";
import {
  heroInfoForm,
  statsForm,
  abilitiesForm,
  fusionItemsForm,
  keyItemsForm,
  academyTreesForm,
  awakeningQuestForm,
} from "./atoms";

export const newHeroSubmission = selector({
  key: "newHeroSubmission",
  get: ({ get }) => {
    const info = get(heroInfoForm);
    const stats = get(statsForm);
    const abilities = get(abilitiesForm);
    const fusions = get(fusionItemsForm);
    const key_items = get(keyItemsForm);
    const academy = get(academyTreesForm);
    const awakening = get(awakeningQuestForm);

    const formatForgeBonus = [
      awakening.forge_bonus[1],
      awakening.forge_bonus[2],
      awakening.forge_bonus[3],
    ];

    return {
      info,
      stats,
      abilities,
      fusions,
      key_items,
      academy: [academy.tree_1, academy.tree_2],
      awakening: {
        ...awakening,
        forge_bonus: formatForgeBonus,
      },
    };
  },
});

export const fusionItemList = selector({
  key: "fusionItemList",
  get: ({ get }) => {
    const fusionItems = get(fusionItemsForm);
    const itemList = {};

    for (const [key, value] of Object.entries(fusionItems)) {
      const list = value.map((item) => ` ${formatText(item)}`);

      itemList[key] = list;
    }

    return itemList;
  },
});
