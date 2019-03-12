import React from 'react';
import { Icon, Label } from 'semantic-ui-react';
import Search from '../../containers/Search';
import { getCartCount } from '../../utils/session';

const FixedMenu = () => (
  <div className="ui large top secondary inverted menu">
    <div className="ui container navbar">
      <div className="item logo">
        <a href="/">SHOPMATE</a>
      </div>
      <a href="#women" className="item">
        Women
      </a>
      <a href="#men" className="item">
        Men
      </a>
      <a href="#kids" className="item">
        Kids
      </a>
      <a href="#shoes" className="item">
        Shoes
      </a>
      <a href="#brand" className="item">
        Brands
      </a>
      <div className="right menu">
        <div className="item">
          <Search />
        </div>
        <div className="item">
          <a href="/cart">
            <Icon name="shopping bag" size="large">
              <Label circular floating>
                {getCartCount()}
              </Label>
            </Icon>
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default FixedMenu;
