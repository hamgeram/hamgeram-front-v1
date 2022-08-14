import React, {useEffect, useState} from "react";
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField} from "material-ui";
import Button from "../components/CustomButtons/Button";
import {registerUser} from "../services/userService";
import errorMessage, {successMessage} from "../utills/massage";
import {hideLoading} from "react-redux-loading-bar";
import {setInsgeramUser} from "../services/insageramUserService";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";

export default function FormDialogRegister(props) {
    useEffect(() => {
        setOpen(props.status);
    }, []);
    const [open, setOpen] = React.useState(false);
    const [id, setId] = useState();

    const dispatch = useDispatch();
    const history = useHistory();


    const handleClickOpen = () => {
        setOpen();
    };

    const handleClose = () => {
        const data = {
            username: id
        }
        dispatch(User(data))

        setOpen(false);
    };

    const handleSubmit = () => {
        setOpen(false)
    }

    const User = (user) => {
        return async dispatch => {
            try {
                const { data, status } = await setInsgeramUser(user);
                if (status === 201) {
                    successMessage("پیج ثبت شد!");
                }
            }
            catch (ex) {
                dispatch(hideLoading());
            }
        };
    };

    return (
        <div >
            {props.button
                ? <Button variant="outlined" onClick={handleClickOpen}>
                   ثبت آدرس پیج
                </Button>
                : <div></div>
            }

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle style={{textAlign: "right"}}>ثبت اطلاعات</DialogTitle>
                <DialogContent>
                    <DialogContentText style={{textAlign: "right"}}>
                         لطفا ادرس پیج خود را وارد کنید احتمال دارد تا برداشت اطلاعت مدتی زمان ببرد
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="آدرس پیج"
                        type="email"
                        fullWidth
                        variant="standard"
                        onChange={(e) => {
                            setId(e.target.value);

                        }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>ثبت ادرس پیج</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
