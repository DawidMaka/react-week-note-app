import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchItems as fetchItemsAction } from 'actions';
import PropTypes from 'prop-types';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

class Monday extends Component {
  componentDidMount() {
    const { fetchMonday } = this.props;

    fetchMonday();
  }

  render() {
    const { monday } = this.props;

    return (
      <GridTemplate>
        {monday.map(({ _id: id, title, content }) => (
          <Card key={id} id={id} title={title} content={content} />
        ))}
      </GridTemplate>
    );
  }
}

Monday.propTypes = {
  monday: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ),
};

Monday.defaultProps = {
  monday: [],
};

const mapStateToProps = state => {
  const { monday } = state;

  return { monday };
};

const mapDispatchToProps = dispatch => ({
  fetchMonday: () => dispatch(fetchItemsAction('monday')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Monday);
