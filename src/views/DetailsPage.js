import React, { Component } from 'react';
import { connect } from 'react-redux';
import withContext from 'hoc/withContext';
import axios from 'axios';
import DetailsTemplate from 'templates/DetailsTemplate';

class DetailsPage extends Component {
  state = {
    item: {
      title: '',
      content: '',
    },
  };

  componentDidMount() {
    const {
      activeItem,
      match: { params },
    } = this.props;

    if (activeItem) {
      const [item] = activeItem;

      this.setState({ item });
    } else {
      const { id } = params;

      axios
        .get(`http://localhost:9000/api/note/${id}`)
        .then(({ data }) => {
          this.setState({ item: data });
        })
        .catch(err => console.log(err));
    }
  }

  render() {
    const { item } = this.state;
    const {
      match: {
        params: { id },
      },
    } = this.props;

    return (
      <>
        <DetailsTemplate id={id} title={item.title} content={item.content} />
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  if (state[ownProps.pageContext]) {
    return {
      activeItem: state[ownProps.pageContext].filter(item => item._id === ownProps.match.params.id),
    };
  }

  return {};
};

export default withContext(connect(mapStateToProps)(DetailsPage));
