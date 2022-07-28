export const clearUser = () => {
    return async dispatch => {
        await dispatch({ type: "CLEAR_USER", payload: {} });
    };
};

export const addUser = user => {
    return async dispatch => {
        await dispatch({ type: "SET_USER", payload: user });
    };
};
