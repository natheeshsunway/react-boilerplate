import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import isObject from 'lodash/isObject';

const stringifyErrors = (obj) => {
  if (!obj) return;
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop) && obj[prop] && typeof obj[prop] === 'object') {
      if (obj[prop] instanceof Error) {
        obj[prop] = obj[prop].toString();
      } else {
        stringifyErrors(obj[prop]);
      }
    }
  }
};

const getContestAsString = (content) => {
  stringifyErrors(content);
  return isObject(content)
    ? JSON.stringify(content, null, 2)
    : content;
};

class ReduxState extends React.Component {
  render () {
    return (
      <pre className="m-top--small">
        {
          getContestAsString(this.props.state)
            .split('\n')
            .map((line, index) => (
              <div key={index} className="line">
                { line }
              </div>
            ))
        }
      </pre>
    );
  }
}

ReduxState.propTypes = {
  state: PropTypes.object.isRequired
};

export default connect(
  (state) => ({ state })
)(ReduxState);
