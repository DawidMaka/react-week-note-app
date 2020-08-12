import React from 'react';
import PropTypes from 'prop-types';
import withContext from 'hoc/withContext';
import Sidebar from 'components/organisms/Sidebar/Sidebar';

const UserPageTemplate = ({ children }) => (
  <>
    <Sidebar />
    {children}
  </>
);

UserPageTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
};

export default withContext(UserPageTemplate);
