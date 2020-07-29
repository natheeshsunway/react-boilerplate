import React from 'react';

import RouteContent from '~components/examples/router/RouteContent';

import { reset } from '~redux/actions/action-creators';

const ResetRoute = () => <RouteContent icon="history" path="/reset" label="Reset" action={reset} />;

export default ResetRoute;
