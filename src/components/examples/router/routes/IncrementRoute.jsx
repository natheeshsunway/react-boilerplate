import React from 'react';

import RouteContent from '~components/examples/router/RouteContent';

import { incrementAction } from '~reducers/counter/actions';

const IncrementRoute = () => <RouteContent icon="plus" path="/" label="Increment" action={incrementAction} />;

export default IncrementRoute;
