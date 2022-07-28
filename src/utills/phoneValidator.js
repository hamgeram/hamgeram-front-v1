export const phoneValidator = phoneNum => {
    const hexRegExp = new RegExp("^(\\+0|0098|98|0)?9\\d{9}$");
    return hexRegExp.test(phoneNum);
};
