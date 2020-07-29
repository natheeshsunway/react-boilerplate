import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import { connect } from 'react-redux';

import Icon from '~components/common/Icon';

import styles from '~components/examples/router/styles/RouteContent.scss';

const cx = classnames.bind(styles);

const RouteContent = ({
  path,
  label,
  counter,
  dispatch,
  action,
  icon
}) => {
  return (
    <div className={cx('route-content--container')}>
      <div className={cx('route-content--heading')}>
        <Icon icon="angle-right"/>
        &nbsp;Connected to the Redux store at the&nbsp;<code>{path || '/'}</code>&nbsp;route
      </div>
      <div className={cx('route-content--counter')}>
        <Icon icon="angle-right"/>
        &nbsp;<code>counter</code>: <code>{counter}</code>
      </div>
      <br/>
      <div className="m-top--small">
        <button
          className="button"
          onClick={dispatch.bind(this, action())}>
          <Icon icon={icon}/>&nbsp;{label} counter
        </button>
      </div>
    </div>
  );
};

RouteContent.propTypes = {
  label: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired,
  path: PropTypes.string,
  icon: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default connect(
  (state) => {
    return {
      ...{ counter: state.counter }
    };
  }
)(RouteContent);
