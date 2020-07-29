import React from 'react';
import PropTypes from 'prop-types';

import Icon from '~components/common/Icon';

const NoEntity = ({ name }) => (
  <div className="m-top--small m-bottom--small">
    <Icon icon="exclamation-triangle" className="has-text-danger" />
    &nbsp;Entity&nbsp;<code>{name}</code>&nbsp;does not exist on&nbsp;<code>entities</code>
  </div>
);

NoEntity.propTypes = {
  name: PropTypes.string.isRequired,
};

export default NoEntity;
