import React from "react";
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField} from "material-ui";
import Button from "../CustomButtons/Button";

export default function FormDialog() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = () => {
        setOpen(false)
    }

    return (
        <div >
            <Button variant="outlined" onClick={handleClickOpen}>
                Open form dialog
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText style={{textAlign: "right"}}>
                                     لطفا ادرس پیج مورد نظر خود را وارد کنید
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="آدرس پیج"
                        type="email"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>ثبت ادرس پیج</Button>
                    <Button onClick={handleClose}>خروج</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
