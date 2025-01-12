import {State} from '../../types/state';
import {Namespace} from '../../const';

export const getAuthorizationStatus = (state: Pick<State, Namespace.User>) => state[Namespace.User].authorizationStatus;
export const getUserEmail = (state: Pick<State, Namespace.User>) => state[Namespace.User].userEmail;
