import { Container, Row, Col } from "react-grid-system";
import { createUseStyles } from "react-jss";
import { useSpring, animated } from "react-spring";

import Card from "../components/Card";

const useStyles = createUseStyles(() => ({
  leftCol: {
    boxSizing: "border-box",
    borderRight: "2px solid #FBC403",
  },
}));

const Battle = () => {
  const classes = useStyles();
  const props = useSpring({ to: { opacity: 0.5 }, from: { opacity: 0 } });
  const AnimatedCard = animated(Card)

  return (
    <Container>
      <Row>
        <Col className={classes.leftCol} md={6}>
            <AnimatedCard style={props} image="Pictures/Zeus.jpg" level={4} fight={true} />
        </Col>

        <Col md={6}>
          <Card image="Pictures/poseidon.jpg" fight={false} level={2} />
        </Col>
      </Row>
    </Container>
  );
};

export default Battle;
