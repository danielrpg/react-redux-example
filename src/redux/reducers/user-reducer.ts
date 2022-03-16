import { UserPayload } from '../../models/user-entity';
import { UserActionType } from '../action-types/intex';

const initialState: UserPayload = {
    message: '',
    isFetching: false,
    isError: false,
};

type Action = {
    type: string;
    payload?: UserPayload;
} 

const userReducer = (state: UserPayload = initialState, action: Action): UserPayload => {
    switch (action.type) {
        case UserActionType.USER_FETCHING:
            return {...state,  isFetching: true, isError: false};
        case UserActionType.USER_FAILED:
            return {...state,  isFetching: false, isError: true, data: action.payload?.data};
        case UserActionType.USER_SUCCESS:
            return {...state, isFetching: false, isError: false, data: action.payload?.data};
        default:
            return state;
    }
}

export default userReducer;