import React from 'react';
import { Visibility, Icon, Label } from 'semantic-ui-react';
import { getCartCount } from '../../utils/session';

export const onOnScreen = () => {
  const banner = document.querySelectorAll('.top.inverted');
  banner[0].classList.remove('fixed');
};

export const offScreen = () => {
  const banner = document.querySelectorAll('.top.inverted');
  banner[0].classList.add('fixed');
};

const Menu = () => (
  <Visibility continuous onOnScreen={onOnScreen} onOffScreen={offScreen}>
    <div className="ui large top secondary  normal menu">
      <div className="ui container navbar">
        <div className="item logo">
          Hi! &nbsp;
          <a className="fg-red-pink ui pointing cursor" href="/login">
            Signin
          </a>
          &nbsp; or &nbsp;
          <a className="fg-red-pink ui pointing cursor" href="/signup">
            Register
          </a>
        </div>
        <a href="#sdff" className="item">
          &nbsp;&nbsp;
        </a>
        <a href="#sdf" className="item">
          Daily Deals
        </a>
        <a href="#sdff" className="item">
          &nbsp;&nbsp;
        </a>
        <a href="#sdf" className="item">
          Sell
        </a>
        <a href="#sdff" className="item">
          &nbsp;&nbsp;
        </a>
        <a href="#sdf" className="item">
          Help & Contact
        </a>
        <div className="right menu">
          <div className="item">
            <a href="/cart">
              <Icon color="black" name="shopping bag" size="large">
                <Label circular floating>
                  {getCartCount()}
                </Label>
              </Icon>
            </a>
          </div>
          <div className="item">
            <span>Your bag: £3.99</span>
          </div>
        </div>
      </div>
    </div>
  </Visibility>
);

export default Menu;
