import React from 'react';
import { withRouter, Route, useHistory, useLocation } from 'react-router-dom';

// @ts-ignore
import { Tab, Tabs } from 'react-tabify';

import { Icon } from '~components/common';
import Loadable from 'react-loadable';

const AsyncIncrement = Loadable({
  loader: () => import('~components/Sections/ReactRouter/Routes/IncrementRoute'),
  loading() {
    return <Icon icon="cog fa-spin" />;
  },
});

const AsyncDecrement = Loadable({
  loader: () => import('~components/Sections/ReactRouter/Routes/DecrementRoute'),
  loading() {
    return <Icon icon="cog fa-spin" />;
  },
});

const AsyncReset = Loadable({
  loader: () => import('~components/Sections/ReactRouter/Routes/ResetRoute'),
  loading() {
    return <Icon icon="cog fa-spin" />;
  },
});

const AsyncTabbedRouter = () => {
  const location = useLocation();
  const history = useHistory();

  return (
    <div className="notification m-t-sm">
      <Tabs
        id="router-example-tabs"
        activeKey={location.pathname}
        onSelect={(eventKey: string) => history.push(eventKey)}
      >
        <Tab eventKey="/" label="Increment">
          <Route exact path="/" component={AsyncIncrement} />
        </Tab>
        <Tab eventKey="/decrement" label="Decrement">
          <Route path="/decrement" component={AsyncDecrement} />
        </Tab>
        <Tab eventKey="/reset" label="Reset">
          <Route path="/reset" component={AsyncReset} />
        </Tab>
      </Tabs>
    </div>
  );
};

export default AsyncTabbedRouter;
