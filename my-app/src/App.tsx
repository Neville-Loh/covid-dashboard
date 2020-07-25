import React, { useEffect, useState } from 'react';
import logo from './logo_2.svg';
import './App.css';
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Form from "react-bootstrap/Form"

interface GlobalData{
  NewConfirmed: number;
  TotalConfirmed: number;
  NewDeaths: number;
  TotalDeaths: number;
  NewRecovered: number;
  TotalRecovered: number;
}
interface CountryData{
  Country: String;
  CountryCode: String;
  Slug: String;
  NewConfirmed: number;
  TotalConfirmed: number;
  NewDeaths: number
  TotalDeaths: number
  NewRecovered: number;
  TotalRecovered: number;
  Date: String;
}
interface IState{
  Global: GlobalData;
  Countries: CountryData[];
}

function App() {

  // Fetching data
  const [latest, setLatest] = useState<IState | null>(null);
  const [searchCountries, setSearchCountries] = useState("");
  useEffect(() => {
    axios
      .get("https://api.covid19api.com/summary")
      .then(res => {
        setLatest(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, [])


  if (latest != null){
    const filterCountries = latest.Countries.filter(item => {
      return searchCountries !== "" ? item.Country.includes(searchCountries) : item;
    })
    const contries = filterCountries.map(data => {
      return (
        <Card
          bg ="light"
          text="dark"
          className="text-center"
          style={{margin : "10px"}}
          >
            <Card.Body>
              <Card.Title>{data.Country}</Card.Title>
              <Card.Text>Cases {data.TotalConfirmed}</Card.Text>
            </Card.Body>
          </Card>
      );
    });
  return (
    <div>
      <CardDeck>
        <Card style ={{ margin: "10px"}}>

          <Card.Body>
            <Card.Title>Global Confirmed Cases</Card.Title>
            <Card.Text>
              {latest.Global.TotalConfirmed}
      </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card bg="danger" text={"white"} style ={{ margin: "10px"}}>
          <Card.Body>
            <Card.Title>Total Deaths</Card.Title>
            <Card.Text>
              {latest.Global.TotalDeaths}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small>Last updated {latest.Countries[0].Date}</small>
          </Card.Footer>
        </Card>
        <Card bg="success" text={"white"} style ={{ margin: "10px"}}>
          <Card.Body>
            <Card.Title>Recovered</Card.Title>
            <Card.Text>
              {latest.Global.TotalRecovered}
      </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small>Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardDeck>
      <Form>
            <Form.Group controlId="formGroupSearch">
                <Form.Label>Search</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Search a country"
                  onChange={e => setSearchCountries(e.target.value)} />
            </Form.Group>
        </Form>
      {contries}
    </div>
  );
} else {
  return (<div>
    <h1>Very bad stuff happen</h1>
  </div>)
}
}

export default App;
