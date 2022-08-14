export const competitorsReducer = (state = {}, action) => {
    switch (action.type) {
        case "SET_COMPETITOR":
            return { ...action.payload }; //spread Operator
        case "ADD_COMPETITOR":
            return { ...action.payload}
        case "DELETE_COMPETITOR":
            return { ...action.payload}
        case "CLEAR_COMPETITOR":
            return { ...action.payload };
        default:
            return state;
    }
};
