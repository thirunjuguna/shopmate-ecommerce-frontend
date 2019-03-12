import React from 'react';
import { Label, Grid, Icon, Input } from 'semantic-ui-react';

function Quantity() {
  return (
    <div>
      <Grid.Row className="cart_quantity">
        <div className="display-flex" width={1}>
          <Label circular>
            <Icon name="minus" />
          </Label>
        </div>
        <div className="quantity_input">
          <Input fluid placeholder="Q" value={80} />
        </div>
        <Grid.Column>
          <Label circular>
            <Icon name="plus" />
          </Label>
        </Grid.Column>
        <Grid.Column width={9} />
      </Grid.Row>
    </div>
  );
}

export default Quantity;
