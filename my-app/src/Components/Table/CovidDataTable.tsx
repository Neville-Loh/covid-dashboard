import React from 'react';
import Table from "react-bootstrap/Table";
import { CountryData } from '../../Common/Interfaces';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function formatNumbers(num: number){
    return new Intl.NumberFormat().format(num)
}

function CovidDataTable(countries: CountryData[]){

    countries.sort( (a,b) => (a.TotalConfirmed < b.TotalConfirmed) ? 1 : -1);

    const tableBody = countries.map(data => {
        return(
          <tr>
                <th>{data.Country}</th>
                <th>{formatNumbers(data.TotalConfirmed)}</th>
                <th>{formatNumbers(data.NewConfirmed)}</th>
                <th>{formatNumbers(data.TotalDeaths)}</th>
                <th>{formatNumbers(data.NewDeaths)}</th>
                <th>{formatNumbers(data.TotalRecovered)}</th>
                <th>{formatNumbers(data.NewRecovered)}</th>
              </tr>
        );
      })

    return(<div>
        <Table responsive>
          <thead>
            <tr>
              <th>Country</th>
              <th>Total Confirmed</th>
              <th>New Confirmed</th>
              <th>Total Deaths</th>
              <th>New Deaths</th>
              <th>Total Recovered</th>
              <th>New Recovered</th>
            </tr>
          </thead>
          <tbody>
            {tableBody}
          </tbody>
        </Table>

    </div>)
}

export default CovidDataTable