import React from 'react';
import Table from "react-bootstrap/Table";
import { CountryData } from '../../Common/Interfaces';
function CovidDataTable(countries: CountryData[]){

    const tableBody = countries.map(data => {
        return(
          <tr>
                <th>{data.Country}</th>
                <th>{data.TotalConfirmed}</th>
                <th>{data.NewConfirmed}</th>
                <th>{data.TotalDeaths}</th>
                <th>{data.NewDeaths}</th>
                <th>{data.TotalRecovered}</th>
                <th>{data.NewRecovered}</th>
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