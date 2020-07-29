import React from 'react';
import PropTypes from 'prop-types';

import Icon from '~components/common/Icon';

const Button = ({ icon, disabled, loading, onClick, children, theme = '' }) => (
  <p key="Fetch" className="control">
    <a className={`button ${theme} ${loading && 'is-loading'}`} disabled={disabled} onClick={onClick}>
      <span className="icon">
        <Icon icon={icon} />
      </span>
      <span>{children}</span>
    </a>
  </p>
);

Button.propTypes = {
  icon: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  theme: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
