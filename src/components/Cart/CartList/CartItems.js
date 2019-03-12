import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';
import ContentLoader from 'react-content-loader';

const LoaderCell = (props) => (
  <ContentLoader
    rtl
    width={400}
    speed={2}
    height={150}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
    {...props}
  >
    <rect x="25" y="105" rx="5" ry="5" width="220" height="150" />
  </ContentLoader>
);

const RowLoaderCell = Array.from({ length: 5 }, (v, k) => k + 1).map((item) => {
  return (
    <Table.Cell key={item}>
      <LoaderCell />
    </Table.Cell>
  );
});

const CartItems = (props) => {
  const { cart } = props;
  return (
    <Table striped>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Item</Table.HeaderCell>
          <Table.HeaderCell>Qty</Table.HeaderCell>
          <Table.HeaderCell>Price</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {cart.data.map((item, index) => {
          return (
            // eslint-disable-next-line
            <Table.Row key={index}>
              <Table.Cell>{item.name}</Table.Cell>
              <Table.Cell>{item.quantity}</Table.Cell>
              <Table.Cell className="fg-red-pink">£ {item.price}</Table.Cell>
            </Table.Row>
          );
        })}
        {cart.data.length < 1 && <Table.Row>{RowLoaderCell}</Table.Row>}
      </Table.Body>
    </Table>
  );
};

CartItems.propTypes = {
  cart: PropTypes.shape({}),
};

CartItems.defaultProps = {
  cart: { data: [] },
};
export default CartItems;
