import React from 'react';
import { Grid, Container } from 'semantic-ui-react';
import FooterItem from './FooterItem';

const Footer = () => (
  <div className="ui  vertical footer segment">
    <Container className="navbar">
      <Grid columns={4} stackable equal="true">
        <Grid.Row className="content">
          <FooterItem header="Questions" items={['Help', 'Track Order', 'Returns']} />
          <FooterItem header="What's in store" items={['Women', 'Men', 'Product A-Z', 'Buy Gift Vouchers']} />
          <FooterItem header="Follow us" items={['Facebook', 'Twitter', 'Youtube']} />

          <Grid.Column>
            <div className="ui link list">
              <a href="#copyright" className="item">&copy; 2016 shopemate Ltd</a>
            </div>
          </Grid.Column>
        </Grid.Row>

      </Grid>
    </Container>
  </div>
);

export default Footer;
