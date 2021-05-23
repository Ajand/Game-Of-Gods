import { useState, useEffect } from "react";
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

const Battle = () => {
  const classes = useStyles();
  const p1 = Heroes[2];
  const p2 = Heroes[4];

  console.log(p2);

  const [gameState, setGameState] = useState(
    createGameState(
      { energy: 150000, rage: 0, image: p1.image, tier: p1.tier },
      { energy: 150000, rage: 0, image: p2.image, tier: p2.tier }
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
      case "Ultimate: Earth-Shaker":
        return setGameState(
          addToLastRoundeAbilityUsed("Ultimate: Earth-Shaker")(
            changeActionPointUsedInRound(1)(
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
      case "Supreme Goddess of the Skies":
        return setGameState(
          addToLastRoundeAbilityUsed("Supreme Goddess of the Skies")(
            changeActionPointUsedInRound(1)(
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
      case "Firestorm":
        return setGameState(
          addToLastRoundeAbilityUsed("Firestorm")(
            changeActionPointUsedInRound(1)(
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
      case "Ultimate: Waster of Cities":
        return setGameState(
          addToLastRoundeAbilityUsed("Ultimate: Waster of Cities")(
            changeActionPointUsedInRound(1)(
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

  const isAbilityDisabled = (rageConsume, active) => {
    if (!active) return false;
    const currentPlayer =
      gameState.currentPlayer == 0 ? gameState.player1 : gameState.player2;
    if (currentPlayer.rage < rageConsume) return true;
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
                          ability.active
                        ) ||
                          gameState.currentPlayer == 1) &&
                        classes.disabledAbility
                      }`}
                    >
                      <img
                        className={`${classes.abilityImage} ${
                          (isAbilityDisabled(
                            ability.rageConsume,
                            ability.active
                          ) ||
                            gameState.currentPlayer == 1) &&
                          classes.disabledImage
                        } ${
                          !(
                            isAbilityDisabled(
                              ability.rageConsume,
                              ability.active
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
                          ability.active
                        ) ||
                          gameState.currentPlayer == 0) &&
                        classes.disabledAbility
                      }`}
                    >
                      <img
                        className={`${classes.abilityImage} ${
                          (isAbilityDisabled(
                            ability.rageConsume,
                            ability.active
                          ) ||
                            gameState.currentPlayer == 0) &&
                          classes.disabledImage
                        } ${
                          !(
                            isAbilityDisabled(
                              ability.rageConsume,
                              ability.active
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
                <div className={classes.buff}>
                  <img
                    className={classes.buffMage}
                    src="/Pictures/spell_shadow_plaguecloud.png"
                  />
                  <div className={classes.roundsCounter}>3</div>
                </div>
                <div className={classes.buff}>
                  <img
                    className={classes.buffMage}
                    src="/Pictures/spell_shadow_plaguecloud.png"
                  />
                  <div className={classes.roundsCounter}>3</div>
                </div>
                <div className={classes.buff}>
                  <img
                    className={classes.buffMage}
                    src="/Pictures/spell_shadow_plaguecloud.png"
                  />
                  <div className={classes.roundsCounter}>3</div>
                </div>
              </div>
              <div className={classes.debuffContainer}>
                <div className={classes.debuff}>
                  <img
                    className={classes.buffMage}
                    src="/Pictures/spell_shadow_plaguecloud.png"
                  />
                  <div className={classes.roundsCounter}>3</div>
                </div>
                <div className={classes.debuff}>
                  <img
                    className={classes.buffMage}
                    src="/Pictures/spell_shadow_plaguecloud.png"
                  />
                  <div className={classes.roundsCounter}>3</div>
                </div>
                <div className={classes.debuff}>
                  <img
                    className={classes.buffMage}
                    src="/Pictures/spell_shadow_plaguecloud.png"
                  />
                  <div className={classes.roundsCounter}>3</div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Battle;
