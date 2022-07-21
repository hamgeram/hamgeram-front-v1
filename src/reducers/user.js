export const userReducer = (state = {}, action) => {
    switch (action.type) {
        case "SET_USER":
            return { ...action.payload }; //spread Operator
        case "CLEAR_USER":
            return { ...action.payload };
        default:
            return state;
    }
};
