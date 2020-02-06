import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./styles";

function Atmosphere({ atmosphere }) {
  return (
    <div>
      <Container>
        <Row>
          <Col style={styles.col}>
            <div style={styles.label}>Humidity</div>
            <span>{`${atmosphere?.humidity}`}</span>
            <span style={styles.units}> %</span>
          </Col>
          <Col style={styles.col}>
            <div style={styles.label}>Visibility</div>
            <span>{`${atmosphere?.visibility}`}</span>
            <span style={styles.units}> km</span>
          </Col>
          <Col style={styles.col}>
            <div style={styles.label}>Pressure</div>
            <span>{`${atmosphere?.pressure}`}</span>
            <span style={styles.units}> mb</span>
          </Col>
          <Col style={styles.col}>
            <div style={styles.label}>Rising</div>
            <div>{`${atmosphere?.rising}`}</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Atmosphere;
