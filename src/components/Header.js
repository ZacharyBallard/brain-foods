import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Header = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Brain Foods</h1>
          <p className="lead">a better way to eat</p>
          {/* <img src={props.meals[0].image}/>
          <p>{props.meals[0].name}</p>
          <p>{props.meals[0].description}</p> */}
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Header;