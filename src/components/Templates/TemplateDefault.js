import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../Menu';
import FixedMenu from '../Menu/FixedMenu';
import SidebarMenu from '../Menu/SidebarMenu';
import Footer from '../Footer';

const TemplateDefault = ({ children }) => (
  <React.Fragment>
    <Menu />
    <FixedMenu />
    <SidebarMenu />
    <div className="pusher">
      {children}
      <Footer />
    </div>
  </React.Fragment>
);

TemplateDefault.propTypes = { children: PropTypes.element.isRequired };

export default TemplateDefault;
