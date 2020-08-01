import { GetEntity } from 'redux-entity';

import { ENTITY_KEY } from '~common/app-const';

import { fetchMockData } from '~services/domain/domain-service';

/**
 * Thunk action that simulates a delayed API call
 * @returns {Function}  thunk
 */
export function fetchFoo() {
  return GetEntity(ENTITY_KEY.FOO, fetchMockData());
}

/**
 * Thunk action that simulates a delayed API call
 * @returns {Function}  thunk
 */
export function fetchBar() {
  return GetEntity(ENTITY_KEY.BAR, fetchMockData(), { append: true });
}

/**
 * Thunk action that simulates a delayed, failed API call
 * @returns {Function}  thunk
 */
export function fetchBaz() {
  return GetEntity(ENTITY_KEY.BAZ, fetchMockData(true));
}
