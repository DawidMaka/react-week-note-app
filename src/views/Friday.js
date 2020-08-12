import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchItems as fetchItemsAction } from 'actions';
import PropTypes from 'prop-types';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

class Friday extends Component {
  componentDidMount() {
    const { fetchFriday } = this.props;

    fetchFriday();
  }

  render() {
    const { friday } = this.props;

    return (
      <GridTemplate>
        {friday.map(({ _id: id, title, content }) => (
          <Card key={id} id={id} title={title} content={content} />
        ))}
      </GridTemplate>
    );
  }
}

Friday.propTypes = {
  friday: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ),
};

Friday.defaultProps = {
  friday: [],
};

const mapStateToProps = state => {
  const { friday } = state;

  return { friday };
};

const mapDispatchToProps = dispatch => ({
  fetchFriday: () => dispatch(fetchItemsAction('friday')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Friday);
