import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { removeItem as removeItemAction } from 'actions';
import PropTypes from 'prop-types';
import withContext from 'hoc/withContext';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Heading from 'components/atoms/Heading/Heading';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import Trash from 'assets/icons/iconmonstr-trash-can-1.svg';
import Edit from 'assets/icons/iconmonstr-pencil-9.svg';

const StyledWrapper = styled.div`
  margin: 0 0 30px 0;
  width: 100%;
  min-height: 380px;
  border-radius: 10px;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  overflow: hidden;
  display: grid;
  grid-template-rows: 0.1fr 1fr;

  @media (min-width: 600px) {
    margin: 0 0 30px 10px;
    flex: 0 0 47%;
    max-width: 47%;
  }

  @media (min-width: 872px) {
    margin: 0 0 30px 2%;
    flex: 0 0 31%;
    max-width: 31%;
  }
`;

const InnerWrapper = styled.div`
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : 'white')};
  padding: 17px 30px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  :first-of-type {
    z-index: 999;
  }
`;

const StyledHeading = styled(Heading)`
  margin: 5px 0 0;
`;

const StyledIconsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  a {
    margin-right: 10px;
    background-color: rgb(239, 239, 239);
  }
`;

const Card = ({ id, pageContext, title, content, removeItem }) => (
  <StyledWrapper>
    <InnerWrapper activeColor={pageContext}>
      <StyledHeading as="h2">{title}</StyledHeading>
    </InnerWrapper>
    <InnerWrapper>
      <Paragraph>{content}</Paragraph>
      <StyledIconsWrapper>
        <ButtonIcon as={Link} to={`${pageContext}/${id}`} icon={Edit}>
          <span className="sr-only">Edit note</span>
        </ButtonIcon>
        <ButtonIcon icon={Trash} onClick={() => removeItem(pageContext, id)}>
          <span className="sr-only">Remove note</span>
        </ButtonIcon>
      </StyledIconsWrapper>
    </InnerWrapper>
  </StyledWrapper>
);

Card.propTypes = {
  id: PropTypes.string.isRequired,
  pageContext: PropTypes.oneOf([
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday',
  ]),
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  removeItem: PropTypes.func.isRequired,
};

Card.defaultProps = {
  pageContext: 'monday',
};

const mapDispatchToProps = dispatch => ({
  removeItem: (itemType, id) => dispatch(removeItemAction(itemType, id)),
});

export default connect(null, mapDispatchToProps)(withContext(Card));
