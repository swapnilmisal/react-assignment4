import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./styles";
import WeatherIcon from "./WeatherIcon";


function Condition({ condition }) {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <WeatherIcon weatherCode={condition?.code ?? "0"} />
            <div>{condition?.text}</div>
            <div style={styles.temperature}>
              {`${condition?.temperature ?? "No-Data"}`}&#176;
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Condition;
