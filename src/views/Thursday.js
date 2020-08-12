import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchItems as fetchItemsAction } from 'actions';
import PropTypes from 'prop-types';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

class Thursday extends Component {
  componentDidMount() {
    const { fetchThursday } = this.props;

    fetchThursday();
  }

  render() {
    const { thursday } = this.props;

    return (
      <GridTemplate>
        {thursday.map(({ _id: id, title, content }) => (
          <Card key={id} id={id} title={title} content={content} />
        ))}
      </GridTemplate>
    );
  }
}

Thursday.propTypes = {
  thursday: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ),
};

Thursday.defaultProps = {
  thursday: [],
};

const mapStateToProps = state => {
  const { thursday } = state;

  return { thursday };
};

const mapDispatchToProps = dispatch => ({
  fetchThursday: () => dispatch(fetchItemsAction('thursday')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Thursday);
