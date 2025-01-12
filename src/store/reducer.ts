import {combineReducers} from '@reduxjs/toolkit';
import {Namespace} from '../const.ts';
import {optionsReducers} from './options/options-reducers.ts';
import {userReducers} from './users/user-reducers.ts';
import {offersReducers} from './offers/offers-reducers.ts';


export const reducer = combineReducers({
  [Namespace.Options]: optionsReducers.reducer,
  [Namespace.User]: userReducers.reducer,
  [Namespace.Offers]: offersReducers.reducer,
});
