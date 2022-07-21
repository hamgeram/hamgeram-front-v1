import { toast } from "react-toastify";

export const successMessage = message => {
    toast.success(message, {
        position: "top-right",
        closeOnClick: true
    });
};

const errorMessage = message => {
    toast.error(message, {
        position: "top-right",
        closeOnClick: true
    });
};
export default errorMessage;
