import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import { GlobalData } from '../../Common/Interfaces';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron'

function Header(global: GlobalData) {
  return (<div>
      <Jumbotron>
        <h1>Covid 19 Tracker</h1>
        <p>
          This is a simple demostration of React FrontEnd website, with continous
          deployment using Azure Pipeline. This website tracks covid 19 cases from
          all countries by using covid19api.
         </p>
      <CardDeck>
        <Card className="text-center" style={{ margin: "10px" }}>

          <Card.Body>
            <Card.Title>Global Confirmed Cases</Card.Title>
            <Card.Text>
              {new Intl.NumberFormat().format(global.TotalConfirmed)}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card className="text-center" bg="danger" text={"white"} style={{ margin: "10px" }}>
          <Card.Body>
            <Card.Title>Total Deaths</Card.Title>
            <Card.Text>
              {new Intl.NumberFormat().format(global.TotalDeaths)}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small>Last updated </small>
          </Card.Footer>
        </Card>
        <Card className="text-center" bg="success" text={"white"} style={{ margin: "10px" }}>
          <Card.Body>
            <Card.Title>Recovered</Card.Title>
            <Card.Text>
              {new Intl.NumberFormat().format(global.TotalRecovered)}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small>Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardDeck>
      </Jumbotron>
  </div>)
}

export default Header;