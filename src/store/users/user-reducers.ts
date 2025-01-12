import {createSlice} from '@reduxjs/toolkit';
import {requireAuthorization, setUserEmail} from '../action.ts';
import {AuthorizationStatus, Namespace} from '../../const.ts';

type UserStateType = {
  authorizationStatus: AuthorizationStatus;
  userEmail: string;
};

const initialState: UserStateType = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userEmail: ''
};

export const userReducers = createSlice({
  name: Namespace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(requireAuthorization, (state, { payload }) => {
        state.authorizationStatus = payload;
      })
      .addCase(setUserEmail, (state, { payload }) => {
        state.userEmail = payload;
      });
  }
});
