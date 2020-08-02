import React from 'react';
import { withRouter, Route, useHistory, useLocation } from 'react-router-dom';

// @ts-ignore
import { Tab, Tabs } from 'react-tabify';

import { CogIcon } from '~components/common/Icon';
import Loadable from 'react-loadable';

const AsyncIncrement = Loadable({
  loader: () => import('~components/Sections/ReactRouter/Routes/IncrementRoute'),
  loading() {
    return <CogIcon />;
  },
  delay: 300,
});

const AsyncDecrement = Loadable({
  loader: () => import('~components/Sections/ReactRouter/Routes/DecrementRoute'),
  loading() {
    return <CogIcon />;
  },
  delay: 300,
});

const AsyncReset = Loadable({
  loader: () => import('~components/Sections/ReactRouter/Routes/ResetRoute'),
  loading() {
    return <CogIcon />;
  },
  delay: 300,
});

const AsyncTabbedRouter = ({ location, history }: { location: any; history: any }) => {
  // const location = useLocation();
  // const history = useHistory();

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
          <Route exact path="/decrement" component={AsyncDecrement} />
        </Tab>
        <Tab eventKey="/reset" label="Reset">
          <Route exact path="/reset" component={AsyncReset} />
        </Tab>
      </Tabs>
    </div>
  );
};

export default withRouter(AsyncTabbedRouter);
