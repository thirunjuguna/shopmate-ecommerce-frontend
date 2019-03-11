import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProductList from '../Product/ProductList';
import Intro from '../../components/Intro';
import Heading from '../../components/Heading/index';
import Category from '../Category';

export class HomePage extends Component {
  static propTypes = {
    login: PropTypes.shape({}).isRequired,
  }

  state ={}

  render() {
    return (
      <React.Fragment>
        <Intro />
        <Heading />
        <Category />
        <ProductList />

      </React.Fragment>

    );
  }
}

const mapStateToProps = state => ({
  login: state.login,
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
