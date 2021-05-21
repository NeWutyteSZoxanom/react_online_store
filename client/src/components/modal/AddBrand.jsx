import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { createBrand } from "../../https/deviceApi";

const AddBrand = () => {
  const [value, setValue] = useState("");

  const addBrand = () => {
    createBrand({ name: value }).then((data) => setValue(""));
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
        Add Brand
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title"> ADD BRAND</DialogTitle>
        <DialogContent>
          <TextField
            value={value}
            onChange={(e) => setValue(e.target.value)}
            autoFocus
            margin="dense"
            id="name"
            label="  Brand"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={addBrand} color="primary" variant="contained">
            ADD
          </Button>
          <Button onClick={handleClose} color="secondary" variant="contained">
            CLOSE
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddBrand;
