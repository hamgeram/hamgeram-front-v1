export const instageramUserReducer = (state = {}, action) => {
    switch (action.type) {
        case "SET_INSTAGERAM_USER":
            return { ...action.payload }; //spread Operator
        case "CLEAR_INSTAGERAM_USER":
            return { ...action.payload };
        default:
            return state;
    }
};
