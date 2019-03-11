import React from 'react';
import { Image, Grid } from 'semantic-ui-react';

const Card = ({ image }) => (
  <Grid.Column className="department__card">
    <div className="department__image">
      <Image src={image} />
    </div>
  </Grid.Column>
);

export default Card;
