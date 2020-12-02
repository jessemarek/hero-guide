import { atom } from "recoil";

export const heroInfoForm = atom({
  key: "heroInfoForm",
  default: {
    name: "",
    title: "",
    quote: "",
    position: "",
    role: "",
    description: "",
    first_appeared: "",
    card_type: "",
    chest_type: "",
    available_in: "",
  },
});

export const statsForm = atom({
  key: "statsForm",
  default: {
    base_stats: {
      health: "",
      p_attack: "",
      m_attack: "",
      p_armor: "",
      m_armor: "",
    },
    max_stats: {
      health: "",
      p_attack: "",
      m_attack: "",
      p_armor: "",
      m_armor: "",
    },
    medallions: "",
  },
});

export const abilitiesForm = atom({
  key: "abilitiesForm",
  default: [],
});

export const fusionItemsForm = atom({
  key: "fusionItemsForm",
  default: {
    purple: {},
    purple_1: {},
    purple_2: {},
    purple_3: {},
    purple_4: {},
    orange: {},
    orange_1: {},
    orange_2: {},
  },
});

export const keyItemsForm = atom({
  key: "keyItemsList",
  default: [],
});

export const academyTreesForm = atom({
  key: "academyTreesForm",
  default: {
    tree_1: "",
    tree_2: "",
  },
});

export const awakeningQuestForm = atom({
  key: "awakeningQuestForm",
  default: {
    awakened: false,
    quote: "none",
    sig_item: "none",
    quest_1: {
      chapter: "none",
      fragment: "none",
      item_1: "none",
      item_2: "none",
      item_3: "none",
    },
    quest_2: {
      trial_name: "none",
      trial_icon: "none",
      completions: 0,
    },
    quest_3: {
      chapter: "none",
      requirement: "none",
    },
    sig_stats: [
      {
        stat: "none",
        value: 0,
        enchant: 0,
      },
    ],
    forge_bonus: {
      1: {
        stat: "none",
        bonus: "none",
        value: 0,
      },
      2: {
        stat: "none",
        bonus: "none",
        value: 0,
      },
      3: {
        stat: "none",
        bonus: "none",
        value: 0,
      },
    },
  },
});
