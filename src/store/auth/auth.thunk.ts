import {TokenT} from '@/models/auth.interface';
import {AppThunk} from '../store';
import {setToken} from './auth.slice';

export const loginThunk =
  (token: TokenT): AppThunk =>
  dispatch => {
    dispatch(setToken(token));
  };
