import { GiTrumpetFlag } from "react-icons/gi";

export default [
  {
    name: "Zeus",
    tier: "S",

    description:
      "The God of Gods, the Emperor of Olympia, God of the skies and fate.",
    image: "Pictures/Zeus.jpg",
    attack: {
      name: "Thunder Bolt",
      description:
        "Zeus strikes down his enemy using his thunderbolts, dealing 8,000 damage",
      value: 8000,
      icon: "images.jpg",
      rageConsume: -20,
    },
    abilities: [
      {
        name: "Arc Lightning",
        description:
          "Zeus strikes his enemies with Arc Lightning, dealing 10,000 damage",
        active: true,
        variant: "damage",
        value: 10000,
        icon: "arc-lightning.jpg",
        rageConsume: 10,
      },
      {
        name: "Pegasus Charge",
        description:
          "Zeus commands Pegasus to charge at the enemy, stunning one ability for 2 rounds, and deals 5,000 damage",
        active: true,
        variant: "debuff",
        debuffVariant: "stun",
        rounds: 2,
        value: 5000,
        icon: "ability_hunter_beastcall.png",
        rageConsume: 10,
      },
      {
        name: "Aegis of Zeus",
        description:
          "Zeus uses his Aegis to defend himself from harm, reducing all incoming damage by 20% for 2 rounds.",
        active: true,
        variant: "buff",
        buffVariant: "resistanceBoost",
        rounds: 2,
        value: "20%",
        icon: "lightning-shield_hexagon.png",
        rageConsume: -25,
      },
      {
        name: "Divine Authority",
        description:
          "As the God of gods and the ruler of Olympia, Zeus passively deals 10% more damage against all enemies.",
        active: false,
        variant: "buff",
        buffVariant: "damageBoost",
        rounds: 1000,
        value: 10,
        icon: "spell_frost_wizardmark.png",
      },
      {
        name: "Ultimate: Fury of the Skies",
        description:
          "Zeus calls down the lightning from the sky to strike down his enemies 3 times, dealing 8,000 damage each time.",
        active: true,
        variant: "debuff",
        debuffVariant: "damage",
        rounds: 2,
        value: [8000, 8000],
        impactValue: 8000,
        icon: "Nimbus_icon.png",
        rageConsume: 55,
      },
    ],
  },
  {
    name: "Poseidon",
    tier: "S",

    description: "The God of the Oceans, Commander of all bodies of water.",
    image: "Pictures/Poseidon.jpg",
    attack: {
      name: "Trident Of Ocean",
      description:
        "Zeus strikes down his enemy using his thunderbolts, dealing 7,000 damage",
      value: 7000,
      icon: "trident.jpg",
      rageConsume: -20,
    },
    abilities: [
      {
        name: "Water Drain",
        description:
          "Poseidon drains the water out of the enemies body, infusing himself with their power. Reduces the enemy's max energy by 20%, increasing Poseidon's max energy by 10%",
        active: true,
        variant: "debuff",
        debuffVariant: "damageAndHealPercent",
        rounds: 2,
        value: "5%",
        icon: "spell_shadow_siphonmana.png",
        rageConsume: 10,
      },
      {
        name: "Fury of Atlantis",
        description:
          "Poseidon brings forth the fury of Atlantis, dealing 7,500 damage to the enemy",
        active: true,
        variant: "damage",
        value: 7500,
        icon: "spell_frost_icestorm.png",
        rageConsume: 10,
      },
      {
        name: "Call of the Cyclops",
        description:
          "Poseidon calls his Cyclops to shield him in battle, providing a 7,500 shield that will expire when destroys",
        active: true,
        variant: "buff",
        buffVariant: "shield",
        rounds: "∞",
        value: 7500,
        icon: "spell_frost_frostarmor.png",
        rageConsume: -10,
      },
      {
        name: "Icey Veins",
        description:
          "Poseidon's watery figure reduces all incoming damage by 10%",
        active: false,
        variant: "buff",
        debuffVariant: "resistanceBoost",
        rounds: "∞",
        value: "10%",
        icon: "spell_frost_frostward.png",
      },
      {
        name: "Ultimate: Earth-Shaker",
        description:
          "Poseidon rumbles the earth beneath the feet of his enemies, dealing a massive 25,000 damage.",
        active: true,
        variant: "damage",
        value: [25000],
        icon: "spell_frost_frozencore.png",
        rageConsume: 55,
      },
    ],
  },
  {
    name: "Hera",
    tier: "S",

    image: "Pictures/Hera.jpg",
    description:
      "The Goddess of Childbirth, The empress of the skies, The Divine Woman",
    attack: {
      name: "Staff of the All-Mother",
      description:
        "Hera will smash his powerful staff in the soul of her enemies.",
      value: 9000,
      icon: "herastaff.png",
      rageConsume: -20,
    },
    abilities: [
      {
        name: "The Curse of the Goddess",
        description:
          "Hera curses the enemy, making them suffer 3k damage each round for 3 rounds, this damage stacks up.",
        active: true,
        variant: "debuff",
        debuffVariant: "damage",
        rounds: 2,
        value: [3000, 3000],
        impactValue: 3000,
        icon: "heraspell1.png",
        rageConsume: 15,
      },
      {
        name: "The Divine Mother’s blessing",
        description:
          "Hera blesses herself with divine power, healing her for 5k instantly and 3k over time for 1 round.",
        active: true,
        variant: "buff",
        buffVariant: "heal",
        rounds: 1,
        value: [3000],
        impactValue: 3000,
        icon: "heralheal.png",
        rageConsume: 10,
      },
      {
        name: "Divine Beauty",
        description:
          "Hera mesmerizes the enemies with her beauty, making them deal 10 percent less damage for the next round.",
        active: true,
        variant: "debuff",
        buffVariant: "damageDebuff",
        rounds: 1,
        value: "10%",
        icon: "heraspell3.png",
        rageConsume: -10,
      },
      {
        name: "Patron of all women",
        description:
          "Hera passively takes 10% reduced damage from all sources.",
        active: false,
        variant: "buff",
        buffVariant: "resistanceBoost",
        rounds: "∞",
        value: "10%",
        icon: "Herapssive.png",
      },
      {
        name: "Supreme Goddess of the Skies",
        description:
          "Hera brings down the fury of the skies, dealing 17.5k damage to her enemies.",
        active: true,
        variant: "damage",
        value: 17500,
        icon: "HeraUlt.png",
        rageConsume: 55,
      },
    ],
  },
  {
    name: "Hephaestus",
    description: "The God of Fire, The God of Volcanoes, The God of the Anvil",
    tier: "S",
    image: "Pictures/Hephaestus.jpg",
    attack: {
      name: "The Hammer of Fire",
      description:
        "Swirls his fiery hammer at the enemy, dealing 6,000 damage.",
      value: 6000,
      icon: "HephAtt.png",
      rageConsume: -20,
    },
    abilities: [
      {
        name: "Firestorm",
        description:
          "Brings down fire from the volcanoes to the enemy side, dealing 7.5k damage.",
        active: true,
        variant: "damage",
        value: 7500,
        icon: "spell_fire_meteorstorm.png",
        rageConsume: 10,
      },
      {
        name: "The Shield-Maker",
        description:
          "Spawns a shield to block 7.5k incoming damage from the enemy, lasts until destroyed.",
        active: true,
        variant: "buff",
        buffVariant: "shield",
        rounds: "∞",
        value: 7500,
        icon: "Heph2.png",
        rageConsume: 10,
      },
      {
        name: "Call of the Goldmaidens",
        description:
          "Hephaestus calls on his Goldmaidens that aid him in battle, increasing all damage done by him by 20%.",
        active: true,
        variant: "buff",
        buffVariant: "damageBoost",
        rounds: 2,
        value: "20%",
        icon: "Heph3.png",
        rageConsume: -10,
      },
      {
        name: "The First Blacksmith",
        description:
          "Hephaestus’s tick fiery skin protects him from all damages, reducing all incoming damage by 10 percent.",
        active: false,
        variant: "buff",
        debuffVariant: "resistanceBoost",
        rounds: 1000,
        value: 10,
        icon: "Heph4.png",
      },
      {
        name: "Ultimate: The Trapmaster",
        description:
          "Hephaestus casts his golden chains to entangle the enemy, locking 2 spells for 2 rounds.",
        active: true,
        variant: "debuff",
        buffVariant: "stun",
        rounds: [2, 2],
        icon: "HephUlt.png",
        rageConsume: 45,
      },
    ],
  },
  {
    name: "Enyo",
    description: "The Goddess of War, The Waster of Cities",
    image: "Pictures/Enyo.jpg",
    tier: "A",
    attack: {
      name: "Spear of War",
      description:
        "Enyo swings her spear towards the enemy, dealing 5k damage.",
      value: 5000,
      icon: "0EnyoSpear.png",
      rageConsume: -20,
    },
    abilities: [
      {
        name: "Flame Strike",
        description:
          "Enyo infuses her sword with fires of war and strikes her enemy instantly dealing 4k damage and an additional 4k damage over time until the next round.",
        active: true,
        variant: "debuff",
        debuffVariant: "damage",
        rounds: 1,
        value: [4000],
        impactValue: 4000,
        icon: "0Enyo1.png",
        rageConsume: 10,
      },
      {
        name: "Battle Roar",
        description:
          "Enyo roars in the arena at her enemies intimidating them, reducing their damage done by 10%.",
        active: true,
        variant: "debuff",
        debuffVariant: "damageReduction",
        rounds: 2,
        value: "10%",
        icon: "Incinerate.png",
        rageConsume: -10,
      },
      {
        name: "Path of Flame",
        description:
          "Enyo uses her torch to draw a path of flame beneath her enemies dealing 2k damage over time for 3 rounds That can be stacked.",
        active: true,
        variant: "debuff",
        debuffVariant: "damage",
        rounds: 2,
        value: [2000, 2000],
        impactValue: 2000,
        icon: "StormEarthFire.png",
        rageConsume: 15,
      },
      {
        name: "Helmet of Enyo",
        description: "Reduces all incoming damage by 7.5%",
        active: false,
        variant: "buff",
        debuffVariant: "resistanceBoost",
        rounds: 1000,
        value: "7.5%",
        icon: "95_2.png",
      },
      {
        name: "Ultimate: Waster of Cities",
        description: "Calls down fire from the sky, incinerating her enemies!",
        active: true,
        variant: "damage",
        value: 17000,
        icon: "PlayingWithFire.png",
        rageConsume: 55,
      },
    ],
  },
];
