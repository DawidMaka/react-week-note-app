import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchItems as fetchItemsAction } from 'actions';
import PropTypes from 'prop-types';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

class Wednesday extends Component {
  componentDidMount() {
    const { fetchWednesday } = this.props;

    fetchWednesday();
  }

  render() {
    const { wednesday } = this.props;

    return (
      <GridTemplate>
        {wednesday.map(({ _id: id, title, content }) => (
          <Card key={id} id={id} title={title} content={content} />
        ))}
      </GridTemplate>
    );
  }
}

Wednesday.propTypes = {
  wednesday: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ),
};

Wednesday.defaultProps = {
  wednesday: [],
};

const mapStateToProps = state => {
  const { wednesday } = state;

  return { wednesday };
};

const mapDispatchToProps = dispatch => ({
  fetchWednesday: () => dispatch(fetchItemsAction('wednesday')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wednesday);
