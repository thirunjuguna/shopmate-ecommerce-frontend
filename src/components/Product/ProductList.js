import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Container } from 'semantic-ui-react';
import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
  const { data } = products;
  return (
    <Container className="content">
      <Grid columns="6" stackable equal="true">
        <Grid.Row>
          {data.rows.map(product => (
            <ProductCard key={product.product_id} product={product} />
          ))}
        </Grid.Row>
      </Grid>
    </Container>
  );
};
ProductList.propTypes = {
  products: PropTypes.shape({}),
};
ProductList.defaultProps = {
  products: { count: 0, rows: [] },
};
export default ProductList;
