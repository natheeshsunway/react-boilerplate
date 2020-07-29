import { connect } from 'react-redux';

import Entity from '~components/examples/redux-entity/Entity';

import { ResetEntity, DeleteEntity } from 'redux-entity';

const mapDispatchToProps = {
  resetEntity: ResetEntity,
  deleteEntity: DeleteEntity,
};

export default connect(undefined, mapDispatchToProps)(Entity);
