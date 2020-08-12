import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchItems as fetchItemsAction } from 'actions';
import PropTypes from 'prop-types';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

class Saturday extends Component {
  componentDidMount() {
    const { fetchSaturday } = this.props;

    fetchSaturday();
  }

  render() {
    const { saturday } = this.props;

    return (
      <GridTemplate>
        {saturday.map(({ _id: id, title, content }) => (
          <Card key={id} id={id} title={title} content={content} />
        ))}
      </GridTemplate>
    );
  }
}

Saturday.propTypes = {
  saturday: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ),
};

Saturday.defaultProps = {
  saturday: [],
};

const mapStateToProps = state => {
  const { saturday } = state;

  return { saturday };
};

const mapDispatchToProps = dispatch => ({
  fetchSaturday: () => dispatch(fetchItemsAction('saturday')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Saturday);
