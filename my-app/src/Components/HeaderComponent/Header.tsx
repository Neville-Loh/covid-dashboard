import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import { GlobalData } from '../../Common/Interfaces';

function Header(global: GlobalData){
    return(<div>
        <CardDeck>
          <Card style={{ margin: "10px" }}>

            <Card.Body>
              <Card.Title>Global Confirmed Cases</Card.Title>
              <Card.Text>
                {global.TotalConfirmed}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card bg="danger" text={"white"} style={{ margin: "10px" }}>
            <Card.Body>
              <Card.Title>Total Deaths</Card.Title>
              <Card.Text>
                {global.TotalDeaths}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small>Last updated </small>
            </Card.Footer>
          </Card>
          <Card bg="success" text={"white"} style={{ margin: "10px" }}>
            <Card.Body>
              <Card.Title>Recovered</Card.Title>
              <Card.Text>
                {global.TotalRecovered}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small>Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardDeck>
    </div>)
}

export default Header;