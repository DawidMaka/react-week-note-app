import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import withContext from 'hoc/withContext';

const StyledNav = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  padding: 25px 0;
  width: 110px;
  height: 100vh;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : theme.note)};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
`;

const StyledList = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const StyledListItem = styled.li`
  padding: 8px 0;
`;

const StyledListLink = styled.a`
  border-bottom: 1px solid transparent;
  border-top: 1px solid transparent;
  padding: 8px 10px;
  display: block;
  font-weight: 600;
  font-size: 1.4rem;
  color: black;
  text-decoration: none;

  &.active {
    background-color: white;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
  }
`;

const Sidebar = ({ pageContext }) => (
  <StyledNav activeColor={pageContext}>
    <StyledList>
      <StyledListItem>
        <StyledListLink as={NavLink} to="/monday" activeclass="active">
          Monday
        </StyledListLink>
      </StyledListItem>
      <StyledListItem>
        <StyledListLink as={NavLink} to="/tuesday" activeclass="active">
          Tuesday
        </StyledListLink>
      </StyledListItem>
      <StyledListItem>
        <StyledListLink as={NavLink} to="/wednesday" activeclass="active">
          Wednesday
        </StyledListLink>
      </StyledListItem>
      <StyledListItem>
        <StyledListLink as={NavLink} to="/thursday" activeclass="active">
          Thursday
        </StyledListLink>
      </StyledListItem>
      <StyledListItem>
        <StyledListLink as={NavLink} to="/friday" activeclass="active">
          Friday
        </StyledListLink>
      </StyledListItem>
      <StyledListItem>
        <StyledListLink as={NavLink} to="/saturday" activeclass="active">
          Saturday
        </StyledListLink>
      </StyledListItem>
      <StyledListItem>
        <StyledListLink as={NavLink} to="/sunday" activeclass="active">
          Sunday
        </StyledListLink>
      </StyledListItem>
    </StyledList>
  </StyledNav>
);

Sidebar.propTypes = {
  pageContext: PropTypes.oneOf([
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday',
  ]),
};

Sidebar.defaultProps = {
  pageContext: 'monday',
};

export default withContext(Sidebar);
