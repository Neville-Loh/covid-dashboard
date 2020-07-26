import React, { useEffect, useState } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Form from "react-bootstrap/Form";
//import SearchBar from "./Components/SearchBarComponent/SearchBar"
import Header from "./Components/HeaderComponent/Header";
import CovidDataTable from "./Components/Table/CovidDataTable"
import Loading from "./Components/SpinnerComponent/Loading";
import { IState } from "./Common/Interfaces";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {

  // Fetching data
  const [latest, setLatest] = useState<IState | null>(null);
  const [searchCountries, setSearchCountries] = useState("");
  //const [UserInput, setUserInput] = useState("");
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


  if (latest != null) {
    const filterCountries = latest.Countries.filter(item => {
      return searchCountries !== "" ? item.Country.toLowerCase().includes(searchCountries.toLowerCase()) : item;
    })



    return (
      <div>
        <title>COVID 19 tracker</title>
        <Container>
          <Row>
            <Col>
              {Header(latest.Global)}
            </Col>
          </Row>
          <Row>
            {/* SearchBar */}
            <Col>
            <Form>
              <Form.Group controlId="formGroupSearch">
                <Form.Label>Search</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Search a country"
                  onChange={e => setSearchCountries(e.target.value)} />
              </Form.Group>
            </Form>
            </Col>
            {/*End of SearchBar */}
          </Row>
          <Row>
            <Col>
            {CovidDataTable(filterCountries)}
            </Col>
          </Row>
        </Container>
      </div>
    );
  } else {
    return (<div>
      <Loading />
    </div>)
  }
}

export default App;
