import React from 'react';
import PropTypes from 'prop-types';

function Error({ children }) {
  return <div className="error">{children}</div>;
}

Error.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Error;
