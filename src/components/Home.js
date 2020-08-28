import React from 'react';
import Container from './Container';
import Row from './Row';
import ComponentState from './ComponentState';
import Hooks from './Hooks';

class Home extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <h2>Component State</h2>
          <ComponentState />
        </Row>
        <Row>
          <h2>Hooks</h2>
          <Hooks />
        </Row>
      </Container>
    );
  }
}

export default Home;