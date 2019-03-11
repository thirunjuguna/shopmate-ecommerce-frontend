import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoryList from '../../components/Category';
import * as categoryActions from '../../redux/actions/category';

export class Category extends Component {
  static propTypes = {
    fetchCategories: PropTypes.func.isRequired,
  }

 state = {}

 componentDidMount() {
   const { fetchCategories } = this.props;
   fetchCategories();
 }

 render() {
   return (
     <CategoryList {...this.props} />
   );
 }
}

const mapStateToProps = state => ({
  categories: state.categories.data.rows,
});

const mapDispatchToProps = {
  fetchCategories: categoryActions.fetchCategories,
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
