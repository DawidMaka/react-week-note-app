import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import withContext from 'hoc/withContext';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { addItem as addItemAction } from 'actions';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import Input from 'components/atoms/Input/Input';

const StyledWrapper = styled.div`
  background-color: white;
  border-left: 10px solid ${({ theme, activecolor }) => theme[activecolor]};
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  height: 100vh;
  width: 100vw;
  padding: 30px 15px;
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 0;
  top: 0;
  transform: translate(${({ isVisible }) => (isVisible ? '0' : '100%')});
  transition: transform 0.25s ease-in-out;
  z-index: 9999;

  @media (min-width: 620px) {
    padding: 30px 90px;
    width: 620px;
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

const SignupSchema = Yup.object().shape({
  title: Yup.string()
    .min(1, 'Too Short!')
    .max(999, 'Too Long!')
    .required('Required'),
  content: Yup.string().required('Required'),
});

const NewItemBar = ({ pageContext, isVisible, addItem, handleClose }) => (
  <StyledWrapper activecolor={pageContext} isVisible={isVisible}>
    <Heading big>Add new note</Heading>
    <Formik
      initialValues={{ title: '', content: '' }}
      validationSchema={SignupSchema}
      onSubmit={(values, { resetForm }) => {
        addItem(pageContext, values);
        handleClose();
        resetForm({ values: '' });
      }}
    >
      {({ values, handleChange, handleBlur, errors, touched }) => (
        <StyledForm>
          <Input
            as={Field}
            type="text"
            name="title"
            placeholder="Title"
            className={errors.title && touched.title ? 'is-invalid' : ''}
          />
          <StyledTextArea
            as="textarea"
            onChange={handleChange}
            onBlur={handleBlur}
            name="content"
            value={values.content}
            placeholder="Description"
            className={errors.content && touched.content ? 'is-invalid' : ''}
          />
          <Button activecolor={pageContext} type="submit">
            Add Note
          </Button>
        </StyledForm>
      )}
    </Formik>
  </StyledWrapper>
);

NewItemBar.propTypes = {
  pageContext: PropTypes.oneOf([
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday',
  ]),
  isVisible: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

NewItemBar.defaultProps = {
  pageContext: 'monday',
};

const mapDispatchToProps = dispatch => ({
  addItem: (itemType, itemContent) => dispatch(addItemAction(itemType, itemContent)),
});

export default connect(null, mapDispatchToProps)(withContext(NewItemBar));
