import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames/bind';
import Entity from './Entity';
import { connect } from 'react-redux';

import { fetchFoo, fetchBar, fetchBaz } from '../../../redux/actions/thunks';
import { ENTITY_KEY } from '../../../common/app-const';

import styles from '~components/examples/redux-entity/styles/ReduxEntity.scss';

const cx = classnames.bind(styles);

const ReduxEntity = ({
  entities,
  fetchFoo,
  fetchBar,
  fetchBaz
}) => {
  const getLoadEntityThunk = (key) => {
    switch (key) {
      case ENTITY_KEY.FOO:
        return fetchFoo;
      case ENTITY_KEY.BAR:
        return fetchBar;
      case ENTITY_KEY.BAZ:
        return fetchBaz;
    }
  };
  return (
    <div className={`${cx('redux-entity--container')} notification is-light m-top--small`}>
      {
        Object.keys(ENTITY_KEY).map((key, index) => {
          const entityKey = ENTITY_KEY[key];
          return (
            <Entity
              key={index}
              name={entityKey}
              append={entityKey === ENTITY_KEY.BAR}
              runFetchEntityOnMount={true}
              entity={entities[entityKey]}
              fetchEntity={getLoadEntityThunk(entityKey)}/>
          );
        })
      }
    </div>
  );
};

ReduxEntity.propTypes = {
  entities: PropTypes.object.isRequired,
  fetchFoo: PropTypes.func.isRequired,
  fetchBar: PropTypes.func.isRequired,
  fetchBaz: PropTypes.func.isRequired
};

export default ReduxEntity;
