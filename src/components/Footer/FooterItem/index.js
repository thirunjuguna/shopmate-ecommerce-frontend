import React from 'react';
import { Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const FooterItem = ({ header, items }) => (

  <Grid.Column>
    <h3 className="ui header">{header}</h3>
    <div className="ui link list">
      {items.map(item => (
        <a href="#sdf" key={item} className="item">{item}</a>
      ))}
    </div>
  </Grid.Column>
);


FooterItem.propTypes = {
  header: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

FooterItem.defaultProps = {
  header: '',
};

export default FooterItem;
