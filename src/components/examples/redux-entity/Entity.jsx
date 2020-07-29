import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import isEmpty from 'lodash/isEmpty';

import Icon from '../../common/Icon';
import NoEntity from '~components/examples/redux-entity/NoEntity';
import { Button } from '~components/common';

class Entity extends Component {
  componentDidMount() {
    this.props.fetchEntity();
  }

  renderContent(name, entity) {
    const { append } = this.props;
    const { isFetching, data, error } = entity;

    if (error) {
      return (
        <div className="m-top--small m-bottom--small">
          <Icon icon="exclamation-triangle" className="has-text-danger" />
          &nbsp;Failed to fetch&nbsp;<code>{name}</code>
          &nbsp;due to&nbsp;<code className="has-text-danger">{error.toString()}</code>
        </div>
      );
    }

    if (isFetching) {
      return <div className="m-top--small m-bottom--small">Fetching fresh data!</div>;
    }

    if (isEmpty(data)) {
      return (
        <div className="m-top--small m-bottom--small">
          Entity <code>{name}</code> is reset.
        </div>
      );
    }

    const action = append ? 'Appending to ' : 'Fetch for ';

    return (
      <div className="m-top--small m-bottom--small">
        <Icon icon="check" className="has-text-success" />
        &nbsp;
        {action}
        <code>{name}</code>
        <span>
          &nbsp;@&nbsp;<code>{data.lastUpdated && format(new Date(data.lastUpdated), 'pp')}</code>
        </span>
      </div>
    );
  }

  render() {
    const { name, entity, fetchEntity } = this.props;

    if (isEmpty(entity)) {
      return (
        <Fragment>
          <NoEntity name={name} />
          <Button icon="download" onClick={fetchEntity} theme="is-info">
            Fetch
          </Button>
        </Fragment>
      );
    }

    const { isFetching } = entity;
    const { resetEntity, deleteEntity } = this.props;

    return (
      <div>
        {this.renderContent(name, entity)}
        <div className="field has-addons">
          <Button icon="download" onClick={fetchEntity} disabled={isFetching} loading={isFetching} theme="is-info">
            Fetch
          </Button>
          <Button icon="history" onClick={() => resetEntity(name)} disabled={isFetching}>
            Reset
          </Button>
          <Button icon="trash" onClick={() => deleteEntity(name)} disabled={isFetching} theme="is-danger">
            Delete
          </Button>
        </div>
      </div>
    );
  }
}

export default Entity;

Entity.propTypes = {
  name: PropTypes.string.isRequired,
  append: PropTypes.bool,
  entity: PropTypes.shape({
    isFetching: PropTypes.bool,
    lastUpdated: PropTypes.Date,
    data: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object, PropTypes.array]),
    error: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
  runFetchEntityOnMount: PropTypes.bool,
  fetchEntity: PropTypes.func.isRequired,
  resetEntity: PropTypes.func.isRequired,
  deleteEntity: PropTypes.func.isRequired,
};
