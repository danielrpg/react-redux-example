export interface User {
    userName: string;
    userPassword: string;
}

export interface UserPayload {
    message: string;
    isFetching: boolean;
    isError: boolean;
    data?: User[]
}

