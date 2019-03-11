import React from 'react';
import { Container, Header } from 'semantic-ui-react';

const Heading = () => (
  <Container className="content">
    <div className="heading">
      <Header as="h1">
   Great stuff
      </Header>
      {/* <div className="heading__next"> */}
      <Header as="h4">More Than 400 000 items</Header>
      {/* </div> */}
    </div>

  </Container>
);

export default Heading;
