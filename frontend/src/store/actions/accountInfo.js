
import { fetchFromAccount } from './account';
import { ACCOUNT_INFO } from '../actionTypes';

export const fetchAccountInfo = () => fetchFromAccount({
  endpoint: 'info',
  options: { credentials: 'include' },
  FETCH_TYPE: ACCOUNT_INFO.FETCH,
  ERROR_TYPE: ACCOUNT_INFO.FETCH_ERROR,
  SUCCESS_TYPE: ACCOUNT_INFO.FETCH_SUCCESS
});