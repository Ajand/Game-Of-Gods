import { createUseStyles } from "react-jss";
import { Container, Row, Col } from "react-grid-system";

import Card from "../components/Card";

import AbilityCompact from "./AbilityCompact";

const useStyles = createUseStyles({
  root: {
    color: "#f8f8f8",
  },
  godImage: {
    //width: 300,
    borderRadius: "1em",
  },
  imageDecor: {
    borderRadius: "1.5em",
    overflow: "hidden",
    padding: "1em",
  },
  imageContainer: {
    borderRadius: "1.5em",
    display: "inline-block",
    background: "rgba( 21, 21, 21, 0.25 )",
    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    backdropFilter: "blur( 4px )",
    borderRadius: "10px",
    border: "1px solid rgba( 255, 255, 255, 0.18 )",
  },
  infoSection: {
    display: "inline-block",
    marginLeft: "2em",
  },
  title: {
    fontSize: "2.5em",
    padding: 8,
  },
  subtitle: {
    fontSize: "1.2em",
    padding: 8,
  },
  description: {
    padding: 8,
  },
  mainInfo: {
    //  width: 600,
  },
  infoSection: {
    //  width: 600,
    boxSizing: "border-box",
    display: "inline-block",
  },
  classbar: {
    padding: 8,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    //  width: 600,
  },
  classbarItem: {
    textAlign: "center",
    paddingTop: 8,
    paddingBottom: 16,
    display: "inline-block",
    width: "50%",
  },
  progressBar: {
    width: 90,
    height: 90,
    position: "absolute",
    bottom: 0,
  },
  mainCard: {
    position: "relative",
  },
  levelInfo: {
    position: "absolute",
    bottom: "-2em",
    left: "-2em",
  },
  progress: {
    position: "absolute",
    bottom: "1em",
    left: "4.1em",
  },
  experienceText: {
    position: "absolute",
    bottom: "2.6em",
    left: "3.5em",
    color: "#f8f8f8",
    background: "#0A0A0A",
    padding: "2px 16px 2px 40px",
    borderRadius: " 0 15px",
  },
  healthText: {
    position: "absolute",
    bottom: "-0.5em",
    textAlign: "center",

    left: "4.1em",
    color: "#151515",
    background: "#FFDD03",
    padding: 3,
    paddingTop: 10,
    width: 200,
    borderRadius: " 0 0px 15px 15px",
  },
  levelupButtonContainer: {
    width: 40,
    height: 40,
    background: "#FBC403",
    borderRadius: 50,
    position: "absolute",
    bottom: "-1em",
    border: `3px solid #151515`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  },
  levelupIcon: {
    color: "#151515",
    fontSize: "1.4em",
  },

  hexa: {
    width: 90,
    height: 90,
    position: "absolute",
    right: "2em",
    top: "-2em",
    zIndex: 100,
  },
  abilitiesContainer: {
    marginTop: "1em",
    padding: "8px",
  },
  abilitiesTitle: {
    fontSize: "1.5em",
    marginBottom: "1em",
  },
});

const CardDetail = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Row>
        <Col md={4}>
          <Card />
        </Col>
        <Col md={8}>
          <div className={classes.colLeft}></div>
          <div className={classes.colRight}>
            <div className={classes.infoSection}>
              <div className={classes.mainInfo}>
                <h1 className={classes.title}>Zeus</h1>

                <h2 className={classes.subtitle}>
                  Emperor of Olympia, God of Gods, The Eagle
                </h2>
                <p className={classes.description}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>

            <div className={classes.abilitiesContainer}>
              <h2 className={classes.abilitiesTitle}>Abilities</h2>
              <Row>
                <Col md={4}>
                  <AbilityCompact />
                </Col>
                <Col md={4}>
                  <AbilityCompact />
                </Col>
                <Col md={4}>
                  <AbilityCompact />
                </Col>
              </Row>
              <Row>
                <Col md={4}>
                  <AbilityCompact />
                </Col>
                <Col md={4}>
                  <AbilityCompact />
                </Col>
                <Col md={4}>
                  <AbilityCompact />
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CardDetail;