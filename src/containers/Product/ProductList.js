import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/product/list';
import Products from '../../components/Product/ProductList';

export class ProductList extends Component {
  static propTypes = {
    products: PropTypes.shape({}).isRequired,
    fetchProducts: PropTypes.func.isRequired,
  }

 state = {}

 componentDidMount() {
   const { fetchProducts } = this.props;
   fetchProducts({});
 }

 render() {
   return (
     <Products {...this.props} />
   );
 }
}

const mapStateToProps = state => ({
  products: state.productList,
});

const mapDispatchToProps = {
  fetchProducts: actions.fetchProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
