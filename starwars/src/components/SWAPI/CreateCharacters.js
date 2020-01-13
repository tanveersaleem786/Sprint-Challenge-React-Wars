import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, Col} from "reactstrap";

const CreateCharacters = props => {
  return (  
 
    <Col xs="12" s="6" md="4">
      <Card className="card-border">  
          <CardBody className="card-body">
          <CardTitle>{props.character.name}</CardTitle> 
            <CardSubtitle>Height: {props.character.height}</CardSubtitle>
            <CardSubtitle>Mass: {props.character.mass}</CardSubtitle>
            <CardSubtitle>Hair Color: {props.character.hair_color}</CardSubtitle>
            <CardSubtitle>Skin Color: {props.character.skin_color}</CardSubtitle>
            <CardSubtitle>Eye Color: {props.character.eye_color}</CardSubtitle>
            <CardSubtitle>Birth Year: {props.character.birth_year}</CardSubtitle>
            <CardSubtitle>Gender: {props.character.gender}</CardSubtitle>
            <CardSubtitle>Url: {props.character.url}</CardSubtitle>
          </CardBody>
      </Card>
    </Col>    
    
  );
  
};
export default CreateCharacters;
