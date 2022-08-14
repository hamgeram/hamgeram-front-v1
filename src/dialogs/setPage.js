import React, {useEffect} from "react";
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField} from "material-ui";
import Button from "../components/CustomButtons/Button";

export default function FormDialog() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
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
            <Button variant="outlined" onClick={handleOpen}>
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
