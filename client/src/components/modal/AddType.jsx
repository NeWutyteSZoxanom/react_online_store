import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { createType } from "../../https/deviceApi";

const AddType = () => {
  const [value, setValue] = useState("");

  const addType = () => {
    createType({ name: value }).then((data) => setValue(""));
    handleClose();
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="butt_mar">
      <Button
        variant="contained"
        color="primary"
        onClick={handleClickOpen}
        fullWidth="true"
      >
        Add Type
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title"> Add Type</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Type"
            type="email"
            fullWidth
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={addType} color="primary" variant="contained">
            Add
          </Button>
          <Button onClick={handleClose} color="secondary" variant="contained">
            CLOSE
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddType;
