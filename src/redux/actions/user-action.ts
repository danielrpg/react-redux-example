import { Dispatch } from 'redux';
import { UserPayload } from '../../models/user-entity';
import { UserActionType } from '../action-types/intex';
import { httpClient } from '../../utils/HttpClient';

export const setUserStateToFetching = () => ({
    type: UserActionType.USER_FETCHING,
});

export const setUserStateToSuccess = (payload: UserPayload) => ({
    type: UserActionType.USER_SUCCESS,
    payload,
});

export const setUserStateToFailed = (payload: UserPayload) => ({
    type: UserActionType.USER_FAILED,
    payload,
});

export const getUsers = () => {
    return async (dispatch: Dispatch) => {
        try { 
            dispatch(setUserStateToFetching());
            let result = await httpClient.get(`URL_API/getUsers`);

            if(!result.data.isError) {
                dispatch(setUserStateToSuccess(result.data));
            } else {
                dispatch(setUserStateToFailed(result.data));
            }
        } catch (err: any) {
            dispatch(setUserStateToFailed({ message: err.message, isError: true, isFetching: false }));
        }
    }
}