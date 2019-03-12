import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as cartActions from '../../redux/actions/cart';
import Cart from '../../components/Cart/CartList';

export class CartList extends Component {
  static propTypes = {
    fetchCartProducts: PropTypes.func.isRequired,
  };

  state = {};

  componentDidMount() {
    const { fetchCartProducts } = this.props;
    fetchCartProducts();
  }

  render() {
    return <Cart {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

const mapDispatchToProps = {
  fetchCartProducts: cartActions.fetchCartProducts,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CartList);
