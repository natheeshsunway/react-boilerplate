import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames/bind';

import ReduxEntity from './examples/redux-entity/ReduxEntity';
import ReduxState from './examples/ReduxState';
import AsyncTabbedRouter from './examples/router/AsyncTabbedRouter';

import Icon from './common/Icon';
import NavBar from './common/bulma/Navbar';
import Footer from './Footer';

import styles from '~components/styles/App.scss';
import ConnectedReduxEntity from '~components/examples/redux-entity/ConnectedReduxEntity';

const URL = {
  REDUX_ENTITY: 'https://github.com/mikechabot/redux-entity',
  REACT_ROUTER: 'https://github.com/ReactTraining/react-router',
  BOILERPLATE: 'http://www.github.com/mikechabot/react-boilerplate'
};

const cx = classnames.bind(styles);

const ColumnBody = ({ title, subtitle, icon, body }) => (
  <Fragment>
    <div>
      <h1 className="title">
        <Icon icon={icon} className="has-text-info"/>&nbsp;{title}
      </h1>
      <h2 className="subtitle ">
        <Icon icon="angle-right"/>&nbsp;
        {subtitle}
      </h2>
    </div>
    {body}
  </Fragment>
);

const Body = ({
  location,
  history
}) => {
  return (
    <section className="hero">
      <div className="hero-body">
        <div className="container">

          {/* Show router example */}
          <div className="columns">
            <div className="column">
              <ColumnBody
                icon="link"
                title="Router"
                subtitle={(
                  <span>
                      Utilizes <a href={URL.REACT_ROUTER}>react-router</a>&nbsp;v4 for client-side routing
                  </span>
                )}
                body={<AsyncTabbedRouter location={location} history={history}/>}
              />
            </div>
          </div>

          {/* Show redux-entity (AJAX example) */}
          <div className="columns">
            <div className="column">
              <ColumnBody
                icon="sitemap"
                title="State Management"
                subtitle={ (
                  <span>Utilizes&nbsp;
                    <a href={URL.REDUX_ENTITY}>redux-entity</a>&nbsp;for domain entity management
                  </span>
                )}
                body={<ConnectedReduxEntity />}
              />
            </div>

            {/* Show redux state */}
            <div className="column">
              <ColumnBody
                icon="tree"
                title="State Tree"
                subtitle={(
                  <span>
                    Open devtools to view dispatched actions
                  </span>
                )}
                body={<ReduxState />}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const App = ({ location, history }) => {
  return (
    <div className={cx('app-container')}>
      <div>
        <NavBar
          url={URL.BOILERPLATE}
          label="react-boilerplate"
        />
      </div>
      <Body location={location} history={history}/>
      <Footer/>
    </div>
  );
};

ColumnBody.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.node.isRequired,
  icon: PropTypes.string.isRequired,
  body: PropTypes.node.isRequired
};

App.propTypes = {
  location: PropTypes.instanceOf(Object),
  history: PropTypes.instanceOf(Object)
};

Body.propTypes = {
  location: PropTypes.instanceOf(Object),
  history: PropTypes.instanceOf(Object)
};

export default withRouter(App);
