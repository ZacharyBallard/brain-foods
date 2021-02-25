import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Header = () => {
  return (
      <Jumbotron fluid id="headerJumbo">
        <Container fluid>
          <h1 className="display-3">Brain Foods</h1>
          <p className="lead">a better way to eat</p>
        </Container>
      </Jumbotron>
  );
};

export default Header;