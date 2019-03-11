import React from 'react';
import PropTypes from 'prop-types';
import FooterItem from '../Footer/FooterItem';

const CategoryColumn = ({ categories }) => {
  const items = [];
  categories.map(item => items.push(item.name));
  return (
    <FooterItem header="Categories" items={items} />
  );
};

CategoryColumn.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({})),
};

CategoryColumn.defaultProps = {
  categories: [],
};
export default CategoryColumn;
