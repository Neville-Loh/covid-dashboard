import React, { useState } from "react";
import Form from "react-bootstrap/Form";

interface ISearchBarProps{
    SetUserInput: (a: string) => void;
}

function SearchBar(props: ISearchBarProps){
    const [searchCountries, setSearchCountries] = useState("");
    return(<div>
        <Form>
          <Form.Group controlId="formGroupSearch">
            <Form.Label>Search</Form.Label>
            <Form.Control
              type="text"
              placeholder="Search a country"
              onChange={e => props.SetUserInput(e.target.value)} />
          </Form.Group>
        </Form>
    </div>)
}

export default SearchBar;