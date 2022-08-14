import {getInsgeramUser} from "../services/insageramUserService";

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
export const handleInsgeramUser = () => {
    return async (dispatch) => {
        const {data, status} = await getInsgeramUser();
        await dispatch({ type: "SET_INSTAGERAM_USER", payload: data });
    }
}
