import moment from "moment";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./styles";
import WeatherIcon from "./WeatherIcon";



function Forecast({ forecasts }) {
  return (
    <div>
      <Container>
        <h1>Forecast</h1>
        <Row>
          {forecasts.map((val, index) => (
            <Col style={styles.col} xs={3} md={2} key={index}>
              <div style={styles.label}>
                {index ? val?.day ?? "No-Data" : "Today"}
              </div>
              <div>{moment.unix(val?.date ?? "No-Data").format("MMM D")}</div>
              <WeatherIcon weatherCode={val?.code ?? "0"} />
              <marquee behavior="scroll" direction="left" scrollamount="5">
                {val?.text ?? "No-Data"}
              </marquee>
              <div>
                {`${val?.high ?? "No-Data"}/${val?.low ?? "No-Data"}`} &#8451;
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Forecast;
