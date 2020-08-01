import { connect } from 'react-redux';
import { fetchBar, fetchBaz, fetchFoo } from '~reducers/entities/actions';

import ReduxEntity from '~components/examples/redux-entity/ReduxEntity';

const mapStateToProps = (state) => ({
  entities: state.entities,
});

const mapDispatchToProps = { fetchFoo, fetchBar, fetchBaz };

export default connect(mapStateToProps, mapDispatchToProps)(ReduxEntity);
