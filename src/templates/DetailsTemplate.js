import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { editItem as editItemAction } from 'actions';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import withContext from 'hoc/withContext';
import UserPageTemplate from 'templates/UserPageTemplate';
import Input from 'components/atoms/Input/Input';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import Accept from 'assets/icons/iconmonstr-check-mark-2.svg';
import Back from 'assets/icons/iconmonstr-arrow-72.svg';

const StyledWrapper = styled.div`
  padding: 25px 20px 25px 130px;
  max-width: 100vw;
  position: relative;

  @media (min-width: 620px) {
    max-width: 80vw;
    padding: 25px 50px 25px 130px;
  }
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

const StyledTextArea = styled(Input)`
  margin: 30px 0 20px;
  height: 30vh;
  border-radius: 20px;
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  a {
    margin-left: 10px;
  }
`;

const StyledButtonIcon = styled(ButtonIcon)`
  border: 2px solid black;
  transition: 0.2s;
  transform: ${({ scale }) => scale};
`;

const fields = {
  title: "input[name='title']",
  content: "textarea[name='content']",
};

class DetailsTemplate extends Component {
  state = {
    scale: 'scale(0)',
  };

  handleValueChange() {
    const { title, content } = this.props;
    const currentTitle = document.querySelector(fields.title).value;
    const currentContent = document.querySelector(fields.content).value;

    if (title === currentTitle && content === currentContent) {
      this.setState({ scale: 'scale(0)' });
    } else {
      this.setState({ scale: 'scale(1)' });
    }
  }

  render() {
    const { scale } = this.state;
    const { id, pageContext, title, content, editItem } = this.props;

    return (
      <UserPageTemplate>
        <StyledWrapper>
          <Formik
            enableReinitialize
            initialValues={{ title: `${title}`, content: `${content}` }}
            onSubmit={values => {
              editItem(id, pageContext, values);
              this.setState({ scale: 'scale(0)' });
            }}
          >
            {({ values, handleChange, handleBlur }) => (
              <StyledForm>
                <Input
                  as={Field}
                  type="text"
                  name="title"
                  placeholder="Title"
                  value={values.title}
                  onChange={e => {
                    handleChange(e);
                    this.handleValueChange();
                  }}
                />
                <StyledTextArea
                  as="textarea"
                  onChange={e => {
                    handleChange(e);
                    this.handleValueChange();
                  }}
                  onBlur={handleBlur}
                  name="content"
                  value={values.content}
                  placeholder="Description"
                />
                <StyledButtonWrapper>
                  <StyledButtonIcon
                    icon={Accept}
                    type="submit"
                    activecolor={pageContext}
                    scale={scale}
                  >
                    <span className="sr-only">Accept changes</span>
                  </StyledButtonIcon>
                  <StyledButtonIcon
                    as={Link}
                    to={`/${pageContext}`}
                    type="button"
                    icon={Back}
                    activecolor={pageContext}
                  >
                    <span className="sr-only">Go back</span>
                  </StyledButtonIcon>
                </StyledButtonWrapper>
              </StyledForm>
            )}
          </Formik>
        </StyledWrapper>
      </UserPageTemplate>
    );
  }
}

DetailsTemplate.propTypes = {
  id: PropTypes.string.isRequired,
  pageContext: PropTypes.string.isRequired,
  title: PropTypes.string,
  content: PropTypes.string,
  editItem: PropTypes.func.isRequired,
};

DetailsTemplate.defaultProps = {
  title: '',
  content: '',
};

const mapDispatchToProps = dispatch => ({
  editItem: (id, itemType, itemContent) => dispatch(editItemAction(id, itemType, itemContent)),
});

export default connect(null, mapDispatchToProps)(withContext(DetailsTemplate));
