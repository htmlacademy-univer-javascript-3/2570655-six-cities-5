import {createSlice} from '@reduxjs/toolkit';
import {setError, setIsReviewSending, setOffersDataLoadingStatus} from '../action.ts';
import {Namespace} from '../../const.ts';

type OptionsStateType = {
  error: string | null;
  isOffersDataLoading: boolean;
  isReviewSending: boolean;
};

const initialState: OptionsStateType = {
  error: null,
  isOffersDataLoading: false,
  isReviewSending: false
};

export const optionsReducers = createSlice({
  name: Namespace.Options,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(setError, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(setOffersDataLoadingStatus, (state, { payload }) => {
        state.isOffersDataLoading = payload;
      })
      .addCase(setIsReviewSending, (state, { payload }) => {
        state.isReviewSending = payload;
      });
  }
});
