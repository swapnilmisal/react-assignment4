import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const styles = {
  grid: {
    first: { span: 3, offset: 3 },
    second: { span: 3, offset: 0 }
  },
  label: {
    fontWeight: "bold"
  }
};

function Astronomy({ astronomy }) {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={styles.grid.first}>
            <div style={styles.label}>Sunrise</div>
            <div>{`${astronomy?.sunrise}`}</div>
          </Col>
          <Col xs={styles.grid.second}>
            <div style={styles.label}>Sunset</div>
            <div>{`${astronomy?.sunset}`}</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Astronomy;
