import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-grid-system";
import { createUseStyles } from "react-jss";
import ProgressBar from "@ramonak/react-progress-bar";
import ReactTooltip from "react-tooltip";

import Card from "../components/Card";

const useStyles = createUseStyles(() => ({
  leftCol: {
    boxSizing: "border-box",
    borderRight: "2px solid #FBC403",
  },
  abilityContainer: {
    justifyContent: "space-between",
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
  },
  abilityImage: {
    width: "4.5em",
    height: "4.5em",
  },
  abilityToolTip: {
    maxWidth: 300
  }
}));

const Battle = () => {
  const classes = useStyles();
  const [gameState, setGameState] = useState({
    player1: {
      energy: 1000,
      rage: 0,
    },
    player2: {
      energy: 600,
      rage: 20,
    },
  });

  const changePlayerOneEnergy = (amount) => {
    const newGameState = {
      ...gameState,
      player1: {
        ...gameState.player1,
        energy: gameState.player1.energy + amount,
      },
    };
    setGameState(newGameState);
  };

  const changePlayerOneRage = (amount) => {
    const newGameState = {
      ...gameState,
      player1: {
        ...gameState.player1,
        rage: gameState.player1.rage + amount,
      },
    };
    setGameState(newGameState);
  };

  console.log(gameState);

  return (
    <Container>
      <Row>
        <Col className={classes.leftCol} md={6}>
          <Card image="Pictures/Zeus.jpg" level={4} fight={true} />
          <div className={classes.abilities}>
            <div
              data-tip
              data-for="ability"
              className={classes.abilityContainer}
            >
              <img
                className={classes.abilityImage}
                src="/Pictures/arc-lightning.jpg"
              />
            </div>
            <ReactTooltip id="ability">
              <div className={classes.abilityToolTip}>
              <h1 className="abilityName">
                Arc Lightning
              </h1>
              <span>
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups.
              </span>
              </div>
              
            </ReactTooltip>
          </div>
          <button
            onClick={() => {
              changePlayerOneEnergy(-100);
              //  changePlayerOneRage(10);
            }}
          >
            Fuck Him
          </button>
          <div className={classes.leftEnergyAndRageBar}>
            <ProgressBar
              className={classes.leftHealthBar}
              completed={(gameState.player1.energy / 1000) * 100}
              baseBgColor="#f8f8f8"
              height={30}
              bgColor="#0234d2"
              isLabelVisible={false}
              margin={4}
              padding={3}
            />
            <ProgressBar
              className={classes.leftRageBar}
              completed={gameState.player1.rage}
              baseBgColor="#f8f8f8"
              height={30}
              bgColor="#E81720"
              isLabelVisible={false}
              padding={3}
              margin={4}
            />
          </div>
        </Col>

        <Col md={6}>
          <Card image="Pictures/poseidon.jpg" fight={false} level={2} />
        </Col>
      </Row>
    </Container>
  );
};

export default Battle;
