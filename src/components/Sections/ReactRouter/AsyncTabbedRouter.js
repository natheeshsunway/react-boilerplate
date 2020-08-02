import React from 'react';
import loadable from '@loadable/component';
import { Route, useHistory, useLocation } from 'react-router-dom';
import { Tab, Tabs } from 'react-tabify';

import { CogIcon } from '~components/common/Icon';

const AsyncIncrement = loadable(() => import('~components/Sections/ReactRouter/Routes/IncrementRoute'));
const AsyncDecrement = loadable(() => import('~components/Sections/ReactRouter/Routes/DecrementRoute'));
const AsyncReset = loadable(() => import('~components/Sections/ReactRouter/Routes/ResetRoute'));

const AsyncTabbedRouter = () => {
  const location = useLocation();
  const history = useHistory();

  return (
    <div className="notification m-t-sm">
      <Tabs id="router-example-tabs" activeKey={location.pathname} onSelect={(eventKey) => history.push(eventKey)}>
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

export default AsyncTabbedRouter;
