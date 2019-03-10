import React from 'react';
import { Input, Icon, Label } from 'semantic-ui-react';

const FixedMenu = () => (
  <div className="ui large top secondary inverted menu">
    <div className="ui container navbar">
      <div className="item logo">SHOPMATE</div>
      <a href="#sdff" className="item">Women</a>
      <a href="#sdf" className="item">Men</a>
      <a href="#sdf" className="item">Kids</a>
      <a href="#sdf" className="item">Shoes</a>
      <a href="#sdf" className="item">Brands</a>
      <div className="right menu">
        <div className="item">
          <Input
            icon="search"
            iconPosition="left"
            placeholder="Search..."
            className="item__search"
          />
        </div>
        <div className="item">
          <Icon name="shopping bag" size="large">
            <Label circular floating>
        22
            </Label>

          </Icon>
        </div>
      </div>
    </div>
  </div>
);

export default FixedMenu;
