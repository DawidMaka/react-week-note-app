import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchItems as fetchItemsAction } from 'actions';
import PropTypes from 'prop-types';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

class Tuesday extends Component {
  componentDidMount() {
    const { fetchTuesday } = this.props;

    fetchTuesday();
  }

  render() {
    const { tuesday } = this.props;

    return (
      <GridTemplate>
        {tuesday.map(({ _id: id, title, content }) => (
          <Card key={id} id={id} title={title} content={content} />
        ))}
      </GridTemplate>
    );
  }
}

Tuesday.propTypes = {
  tuesday: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ),
};

Tuesday.defaultProps = {
  tuesday: [],
};

const mapStateToProps = state => {
  const { tuesday } = state;

  return { tuesday };
};

const mapDispatchToProps = dispatch => ({
  fetchTuesday: () => dispatch(fetchItemsAction('tuesday')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tuesday);
