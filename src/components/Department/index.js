import React from 'react';
import { Grid } from 'semantic-ui-react';
import Card from './Card';
import Nature from '../../assets/images/nature.jpg';
import Regional from '../../assets/images/regional.jpg';
import Trend from '../../assets/images/trend.jpg';

const Department = () => (
  <React.Fragment>
    <Grid stackable>
      <Grid.Row>
        <Card image={Trend} />
      </Grid.Row>
    </Grid>
    <Grid columns={2} stackable>
      <Grid.Row>
        <Card image={Nature} />
        <Card image={Regional} />
      </Grid.Row>
    </Grid>
  </React.Fragment>

);

export default Department;
