import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Button } from "reactstrap";
import CreateCharacters from "./CreateCharacters";

export default function GetCharacters()
{
  
  const [characters, setCharacters] = useState('');
  const apiUrl = 'https://swapi.co/api/people/';
 
  useEffect(() => {
    charactersApi(apiUrl);
  }, []);


  const charactersApi = (apiUrl) => {
    axios
        .get(apiUrl)
        // Which we then set to state
        .then(res => setCharacters(res.data))
        // Always include error handling
        .catch(err => console.log(err));
  };

  let showCharacters = function(){};
  let nextCharacters = function(){};
  let previousCharacters = function(){};
  
  if(characters !== '')
  {
    showCharacters = () => {
      let charactersList = [];
      characters.results.map(character => {
        charactersList.push(<CreateCharacters character={character} />);
        return null;
      });
      return charactersList;
    }

    nextCharacters = () => {
      if(characters.next !== '') {
        charactersApi(characters.next);
      }
    }

    previousCharacters = () => {
      if(characters.previous !== '') {
        charactersApi(characters.previous);
      }
    }
  }
  
  return (
  
    <div>

      <div>
        <Button color="primary" onClick={previousCharacters}>Prvious</Button>{'   '} 
        <Button color="primary" onClick={nextCharacters}>Next</Button>             
      </div>
      <Container>
       <Row>
        {showCharacters()}
       </Row>
      </Container>
      
    </div>
  );

  
}


