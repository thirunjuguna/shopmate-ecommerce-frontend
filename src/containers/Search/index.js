import React, { Component } from 'react';
import _ from 'lodash';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Search } from 'semantic-ui-react';
import * as actions from '../../redux/actions/search';

export class SearchProducts extends Component {
  static propTypes = {
    searchproduct: PropTypes.func,
    loading: PropTypes.bool,
    results: PropTypes.arrayOf(PropTypes.shape({})),
    history: PropTypes.shape({}),
  };

  static defaultProps = {
    loading: false,
    searchproduct: () => {},
    results: [],
    history: { push: () => {} },
  };

  state = {
    value: '',
  };

  componentWillMount() {
    this.resetComponent();
  }

  resetComponent = () => this.setState({ value: '' });

  handleSearchChange = (e, { value }) => {
    const { searchproduct } = this.props;
    this.setState({ value });
    searchproduct({ query: { query_string: value } });
  };

  handleResultSelect = (e, { result }) => {
    const {
      history: { push },
    } = this.props;
    push(`/single/${result.product_id}`);
  };

  render() {
    const { value } = this.state;
    const { loading, results } = this.props;
    return (
      <Search
        fluid
        input={{ icon: 'search', iconPosition: 'left', placeholder: 'search' }}
        loading={loading}
        onResultSelect={this.handleResultSelect}
        onSearchChange={_.debounce(this.handleSearchChange, 2000, {
          leading: true,
        })}
        results={results}
        value={value}
        {...this.props}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.search.loading,
  results: state.search.data,
});

const mapDispatchToProps = {
  searchproduct: actions.searchProduct,
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(SearchProducts),
);
