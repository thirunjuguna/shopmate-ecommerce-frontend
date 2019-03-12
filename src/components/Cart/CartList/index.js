import React from 'react';
import { Container, Grid } from 'semantic-ui-react';
import CartItems from './CartItems';

export const Cart = (props) => (
  <Container className="content">
    <Grid columns={3} stackable className="cart">
      <Grid.Row>
        <Grid.Column width={4} />
        <Grid.Column width="6" className="">
          <CartItems {...props} />
        </Grid.Column>
        <Grid.Column width={4} />
      </Grid.Row>
    </Grid>
  </Container>
);

export default Cart;
