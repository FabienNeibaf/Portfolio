import React from 'react';
import PropTypes from 'prop-types';

const Toast = ({ msg }) => (
  <div id="Toast">
    {msg}
  </div>
);

Toast.propTypes = {
  msg: PropTypes.string.isRequired,
};

export default Toast;
