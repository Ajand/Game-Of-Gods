import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-grid-system";
import { createUseStyles } from "react-jss";
import ProgressBar from "@ramonak/react-progress-bar";
import ReactTooltip from "react-tooltip";

import Card from "../components/Card";

import Heroes from "./Heros.js";

import {
  createGameState,
  nextGameState,
  heal,
  dealDamage,
  changeRage,
  addToLastRoundeAbilityUsed,
  changeActionPointUsedInRound,
  nextRound,
  addBuff,
  addDebuff,
} from "./GameState";

const useStyles = createUseStyles(() => ({
  leftCol: {
    boxSizing: "border-box",
  },
  abilityContainer: {
    justifyContent: "space-between",
    padding: "0.25em",
    alignItems: "center",
    background: "rgba( 21, 21, 21, 0.25 )",
    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    backdropFilter: "blur( 4px )",
    borderRadius: "10px",
    border: "1px solid rgba( 255, 255, 255, 0.18 )",
    wordSpacing: -1,
    overflow: "hidden",
    width: "4em",
    height: "4em",
    textAlign: "center",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "0.25em",
  },
  disabledAbility: {
    cursor: "not-allowed !important",
  },
  abilityImage: {
    width: "3em",
    height: "3em",
  },
  disabledImage: {
    filter: "grayscale(100%)",
  },
  passiveImage: {
    filter: "drop-shadow(16px 16px 20px red) ",
    cursor: "not-allowed",
  },
  abilityToolTip: {
    maxWidth: 300,
  },
  abilities: {
    marginTop: "1em",
    display: "flex",
    justifyContent: "space-between",
  },
  energyAndRageBar: {
    display: "inline-block",
    width: 400,
    transform: "rotate(-90deg)",
    position: "absolute",
    top: 220,
    right: -40,
  },
  buffDebuffContainer: {
    position: "absolute",
    top: 0,
    right: 0,
  },
  buffMage: {
    width: 35,
    height: 35,
  },
  buffContainer: {
    display: "inline-block",
    marginRight: "1em",
  },
  debuffContainer: {
    display: "inline-block",
  },
  debuff: {
    background: " rgba( 233, 25, 25, 0.2 )",
    boxShadow: " 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    backdropFilter: "blur( 5.0px )",
    borderRadius: "2px",
    border: " 1px solid rgba( 255, 255, 255, 0.18 )",
    padding: "5px 5px 0 5px",
    marginBottom: "0.25em",
    position: "relative",
  },
  buff: {
    background: " rgba( 26, 211, 33, 0.20)",
    boxShadow: " 0 8px 32px 0 rgba( 31, 38, 135, 0.37)",
    backdropFilter: "blur( 5.0px )",
    borderRadius: "2px",
    border: " 1px solid rgba( 255, 255, 255, 0.18 )",
    padding: "5px 5px 0 5px",
    marginBottom: "0.25em",
    position: "relative",
  },
  roundsCounter: {
    position: "absolute",
    background: "#FFDD03",
    zIndex: 205,
    width: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 20,
    borderRadius: 20,
    top: 0,
    right: 0,
  },
}));

const getTwoRandomInt = (max) => {
  var arr = [];
  while (arr.length < 2) {
    var r = Math.floor(Math.random() * (max + 1));
    if (arr.indexOf(r) === -1) arr.push(r);
  }
  return arr;
};

const selectedCards = getTwoRandomInt(4);

const Battle = () => {
  const classes = useStyles();
  const p1 = Heroes[selectedCards[0]];
  const p2 = Heroes[selectedCards[1]];

  console.log(p2);

  const [gameState, setGameState] = useState(
    createGameState(
      {
        energy: 150000,
        rage: 0,
        image: p1.image,
        tier: p1.tier,
        buffs: [
          {
            icon: p1.abilities[3].icon,
            value: p1.abilities[3].value,
            name: p1.abilities[3].name,
            buffVariant: p1.abilities[3].buffVariant,
            description: p1.abilities[3].description,
            rounds: "∞",
          },
        ],
      },
      {
        energy: 150000,
        rage: 0,
        image: p2.image,
        tier: p2.tier,
        buffs: [
          {
            icon: p2.abilities[3].icon,
            value: p2.abilities[3].value,
            name: p2.abilities[3].name,
            buffVariant: p2.abilities[3].buffVariant,
            description: p2.abilities[3].description,
            rounds: "∞",
          },
        ],
      },
      0
    )
  );

  console.log(gameState);

  useEffect(() => {
    if (gameState.actionPointUsedInRound > 2) {
      setGameState(nextRound(gameState));
    }
    //Winner Controller
    if (gameState.player1.energy <= 0 || gameState.player2.energy <= 0) {
      const winner = gameState.player1.energy <= 0 ? 1 : 0;
      alert(`player ${winner + 1} won!`);
    }
  }, [gameState]);

  const actionAbilities = (ability) => {
    switch (ability.name) {
      // Zeus Abilities
      case "Thunder Bolt":
        return setGameState(
          addToLastRoundeAbilityUsed("Thunder Bolt")(
            changeActionPointUsedInRound(1)(
              changeRage(ability.rageConsume)(
                dealDamage(ability.value)(gameState)
              )
            )
          )
        );
      case "Arc Lightning":
        return setGameState(
          addToLastRoundeAbilityUsed("Arc Lightning")(
            changeActionPointUsedInRound(1)(
              changeRage(ability.rageConsume)(
                dealDamage(ability.value)(gameState)
              )
            )
          )
        );
      case "Pegasus Charge":
        return setGameState(
          addDebuff(ability)(
            addToLastRoundeAbilityUsed("Pegasus Charge")(
              changeActionPointUsedInRound(1)(
                changeRage(ability.rageConsume)(
                  dealDamage(ability.value)(gameState)
                )
              )
            )
          )
        );
      case "Aegis of Zeus":
        return setGameState(
          addBuff(ability)(
            addToLastRoundeAbilityUsed("Aegis of Zeus")(
              changeActionPointUsedInRound(1)(
                changeRage(ability.rageConsume)(gameState)
              )
            )
          )
        );
      case "Ultimate: Fury of the Skies":
        return setGameState(
          addDebuff(ability)(
            addToLastRoundeAbilityUsed("Ultimate: Fury of the Skies")(
              changeActionPointUsedInRound(2)(
                changeRage(ability.rageConsume)(
                  dealDamage(ability.impactDamage)(gameState)
                )
              )
            )
          )
        );
      // Posiden Abilities
      case "Trident Of Ocean":
        return setGameState(
          addToLastRoundeAbilityUsed("Trident Of Ocean")(
            changeActionPointUsedInRound(1)(
              changeRage(ability.rageConsume)(
                dealDamage(ability.value)(gameState)
              )
            )
          )
        );
      case "Water Drain":
        return setGameState(
          addDebuff(ability)(
            addToLastRoundeAbilityUsed("Water Drain")(
              changeActionPointUsedInRound(1)(
                changeRage(ability.rageConsume)(gameState)
              )
            )
          )
        );
      case "Fury of Atlantis":
        return setGameState(
          addToLastRoundeAbilityUsed("Fury of Atlantis")(
            changeActionPointUsedInRound(1)(
              changeRage(ability.rageConsume)(
                dealDamage(ability.value)(gameState)
              )
            )
          )
        );
      case "Call of the Cyclops":
        return setGameState(
          addBuff(ability)(
            addToLastRoundeAbilityUsed("Call of the Cyclops")(
              changeActionPointUsedInRound(1)(
                changeRage(ability.rageConsume)(gameState)
              )
            )
          )
        );
      case "Ultimate: Earth-Shaker":
        return setGameState(
          addToLastRoundeAbilityUsed("Ultimate: Earth-Shaker")(
            changeActionPointUsedInRound(2)(
              changeRage(ability.rageConsume)(
                dealDamage(ability.value)(gameState)
              )
            )
          )
        );
      // Hera Abilities
      case "Staff of the All-Mother":
        return setGameState(
          addToLastRoundeAbilityUsed("Staff of the All-Mother")(
            changeActionPointUsedInRound(1)(
              changeRage(ability.rageConsume)(
                dealDamage(ability.value)(gameState)
              )
            )
          )
        );
      case "The Curse of the Goddess":
        return setGameState(
          addDebuff(ability)(
            addToLastRoundeAbilityUsed("The Curse of the Goddess")(
              changeActionPointUsedInRound(1)(
                changeRage(ability.rageConsume)(
                  dealDamage(ability.impactValue)(gameState)
                )
              )
            )
          )
        );

      case "The Divine Mother’s blessing":
        return setGameState(
          addBuff(ability)(
            addToLastRoundeAbilityUsed("The Divine Mother’s blessing")(
              changeActionPointUsedInRound(1)(
                changeRage(ability.rageConsume)(
                  heal(ability.impactValue)(gameState)
                )
              )
            )
          )
        );
      case "Divine Beauty":
        return setGameState(
          addDebuff(ability)(
            addToLastRoundeAbilityUsed("Divine Beauty")(
              changeActionPointUsedInRound(1)(
                changeRage(ability.rageConsume)(
                  dealDamage(ability.impactValue)(gameState)
                )
              )
            )
          )
        );
      case "Supreme Goddess of the Skies":
        return setGameState(
          addToLastRoundeAbilityUsed("Supreme Goddess of the Skies")(
            changeActionPointUsedInRound(2)(
              changeRage(ability.rageConsume)(
                dealDamage(ability.value)(gameState)
              )
            )
          )
        );
      //Hephastues Abilities
      case "The Hammer of Fire":
        return setGameState(
          addToLastRoundeAbilityUsed("The Hammer of Fire")(
            changeActionPointUsedInRound(1)(
              changeRage(ability.rageConsume)(
                dealDamage(ability.value)(gameState)
              )
            )
          )
        );
      case "The Shield-Maker":
        return setGameState(
          addBuff(ability)(
            addToLastRoundeAbilityUsed("The Divine Mother’s blessing")(
              changeActionPointUsedInRound(1)(
                changeRage(ability.rageConsume)(
                  heal(ability.impactValue)(gameState)
                )
              )
            )
          )
        );
      case "Call of the Goldmaidens":
        return setGameState(
          addBuff(ability)(
            addToLastRoundeAbilityUsed("Call of the Goldmaidens")(
              changeActionPointUsedInRound(1)(
                changeRage(ability.rageConsume)(
                  heal(ability.impactValue)(gameState)
                )
              )
            )
          )
        );
      case "The First Blacksmith":
        return setGameState(
          addBuff(ability)(
            addToLastRoundeAbilityUsed("The First Blacksmith")(
              changeActionPointUsedInRound(1)(
                changeRage(ability.rageConsume)(
                  heal(ability.impactValue)(gameState)
                )
              )
            )
          )
        );
      case "Firestorm":
        return setGameState(
          addToLastRoundeAbilityUsed("Firestorm")(
            changeActionPointUsedInRound(2)(
              changeRage(ability.rageConsume)(
                dealDamage(ability.value)(gameState)
              )
            )
          )
        );
      // Enyo Abilities
      case "Spear of War":
        return setGameState(
          addToLastRoundeAbilityUsed("Spear of War")(
            changeActionPointUsedInRound(1)(
              changeRage(ability.rageConsume)(
                dealDamage(ability.value)(gameState)
              )
            )
          )
        );
      case "Flame Strike":
        return setGameState(
          addDebuff(ability)(
            addToLastRoundeAbilityUsed("Flame Strike")(
              changeActionPointUsedInRound(1)(
                changeRage(ability.rageConsume)(
                  dealDamage(ability.impactValue)(gameState)
                )
              )
            )
          )
        );
      case "Battle Roar":
        return setGameState(
          addDebuff(ability)(
            addToLastRoundeAbilityUsed("Battle Roar")(
              changeActionPointUsedInRound(1)(
                changeRage(ability.rageConsume)(gameState)
              )
            )
          )
        );
      case "Path of Flame":
        return setGameState(
          addDebuff(ability)(
            addToLastRoundeAbilityUsed("Path of Flame")(
              changeActionPointUsedInRound(1)(
                changeRage(ability.rageConsume)(
                  dealDamage(ability.impactValue)(gameState)
                )
              )
            )
          )
        );

      case "Ultimate: Waster of Cities":
        return setGameState(
          addToLastRoundeAbilityUsed("Ultimate: Waster of Cities")(
            changeActionPointUsedInRound(2)(
              changeRage(ability.rageConsume)(
                dealDamage(ability.value)(gameState)
              )
            )
          )
        );

      default:
        console.log("ability name");
    }
  };

  const isAbilityDisabled = (rageConsume, active, ability) => {
    if (!active) return false;
    const currentPlayer =
      gameState.currentPlayer == 0 ? gameState.player1 : gameState.player2;
    const otherPlayer =
      gameState.currentPlayer == 1 ? gameState.player1 : gameState.player2;
    console.log(otherPlayer, currentPlayer);
    if (currentPlayer.rage < rageConsume) return true;
    if (otherPlayer.deBuffs.find((debuff) => ability.name === debuff.name))
      return true;
    if (currentPlayer.buffs.find((buff) => ability.name === buff.name))
      return true;
    return false;
  };

  return (
    <Container>
      <Row>
        <Col className={classes.leftCol} md={6}>
          <div>
            <Card
              image={gameState.player1.image}
              level={4}
              usedSpells={gameState.player1.lastRoundAbilityUsed}
              fight={true}
              tier={gameState.player1.tier}
            />
            <div className={classes.energyAndRageBar}>
              <ProgressBar
                className={classes.healthBar}
                completed={(gameState.player1.energy / 150000) * 100}
                baseBgColor="#f8f8f8"
                height={30}
                bgColor="#5B8841"
                isLabelVisible={false}
                margin={4}
                padding={3}
              />
              <ProgressBar
                className={classes.rageBar}
                completed={gameState.player1.rage}
                baseBgColor="#f8f8f8"
                height={30}
                bgColor="#E81720"
                isLabelVisible={false}
                padding={3}
                margin={4}
              />
            </div>
            <div className={classes.abilities}>
              {[p1.attack, ...p1.abilities].map((ability, index) => {
                return (
                  <div
                    key={`${ability.name}p`}
                    onClick={() => {
                      if (
                        gameState.currentPlayer == 0 &&
                        !(!ability.active && ability.active !== undefined) &&
                        !isAbilityDisabled(
                          ability.rageConsume,
                          ability.active,
                          ability
                        )
                      ) {
                        actionAbilities(ability);
                      }
                    }}
                  >
                    <div
                      data-tip
                      data-for={`ability${ability.name}`}
                      className={`${classes.abilityContainer} ${
                        (isAbilityDisabled(
                          ability.rageConsume,
                          ability.active,
                          ability
                        ) ||
                          gameState.currentPlayer == 1) &&
                        classes.disabledAbility
                      }`}
                    >
                      <img
                        className={`${classes.abilityImage} ${
                          (isAbilityDisabled(
                            ability.rageConsume,
                            ability.active,
                            ability
                          ) ||
                            gameState.currentPlayer == 1) &&
                          classes.disabledImage
                        } ${
                          !(
                            isAbilityDisabled(
                              ability.rageConsume,
                              ability.active,
                              ability
                            ) || gameState.currentPlayer == 1
                          ) &&
                          !ability.active &&
                          ability.active !== undefined &&
                          classes.passiveImage
                        }`}
                        src={`/Pictures/${ability.icon}`}
                      />
                    </div>
                    <ReactTooltip id={`ability${ability.name}`}>
                      <div className={classes.abilityToolTip}>
                        <h1 className={classes.abilityName}>{ability.name}</h1>
                        <span>{ability.description}</span>
                      </div>
                    </ReactTooltip>
                  </div>
                );
              })}
            </div>
            <div className={classes.buffDebuffContainer}>
              <div className={classes.buffContainer}>
                {gameState.player1.buffs.map((buff, index) => (
                  <>
                    <div
                      data-tip
                      data-for={`buff${buff.name}`}
                      key={index}
                      className={classes.buff}
                    >
                      <img
                        className={classes.buffMage}
                        src={`/Pictures/${buff.icon}`}
                      />
                      <div className={classes.roundsCounter}>{buff.rounds}</div>
                    </div>
                    <ReactTooltip id={`buff${buff.name}`}>
                      <div className={classes.abilityToolTip}>
                        <h1 className={classes.abilityName}>{buff.name}</h1>
                        <span>{buff.description}</span>
                      </div>
                    </ReactTooltip>
                  </>
                ))}
              </div>
              <div className={classes.debuffContainer}>
                {gameState.player1.deBuffs.map((debuff, index) => (
                  <>
                    <div
                      data-tip
                      data-for={`debuff${debuff.name}`}
                      key={index}
                      className={classes.debuff}
                    >
                      <img
                        className={classes.buffMage}
                        src={`/Pictures/${debuff.icon}`}
                      />
                      <div className={classes.roundsCounter}>
                        {debuff.rounds}
                      </div>
                    </div>
                    <ReactTooltip id={`debuff${debuff.name}`}>
                      <div className={classes.abilityToolTip}>
                        <h1 className={classes.abilityName}>{debuff.name}</h1>
                        <span>{debuff.description}</span>
                      </div>
                    </ReactTooltip>
                  </>
                ))}
              </div>
            </div>
          </div>
        </Col>
        <Col className={classes.leftCol} md={6}>
          <div>
            <Card
              image={gameState.player2.image}
              level={4}
              usedSpells={gameState.player2.lastRoundAbilityUsed}
              fight={true}
              tier={gameState.player2.tier}
            />
            <div className={classes.energyAndRageBar}>
              <ProgressBar
                className={classes.healthBar}
                completed={(gameState.player2.energy / 150000) * 100}
                baseBgColor="#f8f8f8"
                height={30}
                bgColor="#5B8841"
                isLabelVisible={false}
                margin={4}
                padding={3}
              />
              <ProgressBar
                className={classes.rageBar}
                completed={gameState.player2.rage}
                baseBgColor="#f8f8f8"
                height={30}
                bgColor="#E81720"
                isLabelVisible={false}
                padding={3}
                margin={4}
              />
            </div>
            <div className={classes.abilities}>
              {[p2.attack, ...p2.abilities].map((ability, index) => {
                return (
                  <div
                    key={ability.name}
                    onClick={() => {
                      if (
                        gameState.currentPlayer == 1 &&
                        !(!ability.active && ability.active !== undefined)
                      ) {
                        actionAbilities(ability);
                      }
                    }}
                  >
                    <div
                      data-tip
                      data-for={`ability${ability.name}`}
                      className={`${classes.abilityContainer} ${
                        (isAbilityDisabled(
                          ability.rageConsume,
                          ability.active,
                          ability
                        ) ||
                          gameState.currentPlayer == 0) &&
                        classes.disabledAbility
                      }`}
                    >
                      <img
                        className={`${classes.abilityImage} ${
                          (isAbilityDisabled(
                            ability.rageConsume,
                            ability.active,
                            ability
                          ) ||
                            gameState.currentPlayer == 0) &&
                          classes.disabledImage
                        } ${
                          !(
                            isAbilityDisabled(
                              ability.rageConsume,
                              ability.active,
                              ability
                            ) || gameState.currentPlayer == 0
                          ) &&
                          !ability.active &&
                          ability.active !== undefined &&
                          classes.passiveImage
                        }`}
                        src={`/Pictures/${ability.icon}`}
                      />
                    </div>
                    <ReactTooltip id={`ability${ability.name}`}>
                      <div className={classes.abilityToolTip}>
                        <h1 className={classes.abilityName}>{ability.name}</h1>
                        <span>{ability.description}</span>
                      </div>
                    </ReactTooltip>
                  </div>
                );
              })}
            </div>
            <div className={classes.buffDebuffContainer}>
              <div className={classes.buffContainer}>
                {gameState.player2.buffs.map((buff, index) => (
                  <>
                    <div
                      data-tip
                      data-for={`buff${buff.name}`}
                      key={index}
                      className={classes.buff}
                    >
                      <img
                        className={classes.buffMage}
                        src={`/Pictures/${buff.icon}`}
                      />
                      <div className={classes.roundsCounter}>{buff.rounds}</div>
                    </div>
                    <ReactTooltip id={`buff${buff.name}`}>
                      <div className={classes.abilityToolTip}>
                        <h1 className={classes.abilityName}>{buff.name}</h1>
                        <span>{buff.description}</span>
                      </div>
                    </ReactTooltip>
                  </>
                ))}
              </div>
              <div className={classes.debuffContainer}>
                {gameState.player2.deBuffs.map((debuff, index) => (
                  <>
                    <div
                      data-tip
                      data-for={`debuff${debuff.name}`}
                      key={index}
                      className={classes.debuff}
                    >
                      <img
                        className={classes.buffMage}
                        src={`/Pictures/${debuff.icon}`}
                      />
                      <div className={classes.roundsCounter}>
                        {debuff.rounds}
                      </div>
                    </div>
                    <ReactTooltip id={`debuff${debuff.name}`}>
                      <div className={classes.abilityToolTip}>
                        <h1 className={classes.abilityName}>{debuff.name}</h1>
                        <span>{debuff.description}</span>
                      </div>
                    </ReactTooltip>
                  </>
                ))}
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Battle;
