import { ENTITY_KEY } from '../../common/app-const';
import { GetEntity } from 'redux-entity';
import ExampleDomainService from '../../services/domain/example-domain-service';

/**
 * Thunk action that simulates a delayed API call
 * @returns {Function}  thunk
 */
export function fetchFoo () {
  return GetEntity(
    ENTITY_KEY.FOO,
    ExampleDomainService.getFakePromise()
  );
}

/**
 * Thunk action that simulates a delayed API call
 * @returns {Function}  thunk
 */
export function fetchBar () {
  return GetEntity(
    ENTITY_KEY.BAR,
    ExampleDomainService.getFakePromise(),
    { append: true }
  );
}

/**
 * Thunk action that simulates a delayed, failed API call
 * @returns {Function}  thunk
 */
export function fetchBaz () {
  return GetEntity(
    ENTITY_KEY.BAZ,
    ExampleDomainService.getFakePromise(true)
  );
}
