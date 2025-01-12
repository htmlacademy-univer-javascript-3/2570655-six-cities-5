import {State} from '../../types/state';
import {Namespace} from '../../const';

export const getError = (state: Pick<State, Namespace.Options>) => state[Namespace.Options].error;
export const getOffersDataLoadingStatus = (state: Pick<State, Namespace.Options>) => state[Namespace.Options].isOffersDataLoading;
