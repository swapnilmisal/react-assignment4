import React, { useEffect, useState } from "react";
import { Accordion, Button, Card } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import { connect } from "react-redux";
import getRandomCities from "../../thunks/getRandomCities";
import WeatherCard from "../WeatherCard/index";


function MainCard({ cities, loading, error, getRandomCities }) {
  const [currentWeatherCard, setCurrentWeatherCard] = useState(null);

  useEffect(() => {
    getRandomCities();
  }, []);

  return (
    <Accordion>
      {cities.map((city, index) => (
        <Card key={index}>
          {loading || error ? (
            <Skeleton duration={2} />
          ) : (
            <Card.Header>
              <Accordion.Toggle
                as={Button}
                variant="link"
                eventKey={index}
                onClick={() => setCurrentWeatherCard(index)}
              >
                {city}
              </Accordion.Toggle>
            </Card.Header>
          )}
          <Accordion.Collapse eventKey={index}>
            <Card.Body>
              {currentWeatherCard == index && <WeatherCard city={city} />}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      ))}
    </Accordion>
  );
}

const mapStateToProps = state => ({
  cities: state.randomCities.cities,
  loading: state.randomCities.loading,
  error: state.randomCities.error
});

const mapDispatchToProps = dispatch => ({
  getRandomCities: () => dispatch(getRandomCities())
});

export default connect(mapStateToProps, mapDispatchToProps)(MainCard);
