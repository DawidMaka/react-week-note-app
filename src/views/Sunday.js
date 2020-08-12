import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchItems as fetchItemsAction } from 'actions';
import PropTypes from 'prop-types';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

class Sunday extends Component {
  componentDidMount() {
    const { fetchSunday } = this.props;

    fetchSunday();
  }

  render() {
    const { sunday } = this.props;

    return (
      <GridTemplate>
        {sunday.map(({ _id: id, title, content }) => (
          <Card key={id} id={id} title={title} content={content} />
        ))}
      </GridTemplate>
    );
  }
}

Sunday.propTypes = {
  sunday: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ),
};

Sunday.defaultProps = {
  sunday: [],
};

const mapStateToProps = state => {
  const { sunday } = state;

  return { sunday };
};

const mapDispatchToProps = dispatch => ({
  fetchSunday: () => dispatch(fetchItemsAction('sunday')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sunday);
