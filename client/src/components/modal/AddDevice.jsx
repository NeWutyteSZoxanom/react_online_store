import React, { useState, useContext, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Context } from "../../index";
import { observer } from "mobx-react-lite";
import { fetchTypes, fetchBrand, createDevice } from "../../https/deviceApi";

const useStyles = makeStyles((theme) => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const AddDevice = observer(() => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [info, setInfo] = useState([]);
  const [file, setFile] = useState(null);

  const { device } = useContext(Context);

  const selectFile = (e) => {
    setFile(e.target.files[0]);
  };

  useEffect(() => {
    fetchTypes().then((data) => device.setTypes(data));
    fetchBrand().then((data) => device.setBrands(data));
  }, []);

  const addInfo = () => {
    setInfo([...info, { title: "", description: "", number: Date.now() }]);
  };

  const removeInfo = (number) => {
    setInfo(info.filter((i) => i.number !== number));
  };

  const changeInfo = (key, value, number) => {
    setInfo(
      info.map((i) => (i.number === number ? { ...i, [key]: value } : i))
    );
  };

  const addDevice = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", `${price}`);
    formData.append("img", file);
    formData.append("brandId", age);
    formData.append("typeId", age_brand);
    formData.append("info", JSON.stringify(info));
    createDevice(formData).then((data) => handleClose());
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();
  const [age, setAge] = React.useState("");
  const [open_sel, setOpen_sel] = React.useState(false);

  const handleChange_sel = (event) => {
    setAge(event.target.value);
  };

  const handleClose_sel = () => {
    setOpen_sel(false);
  };

  const handleOpen_sel = () => {
    setOpen_sel(true);
  };

  const [age_brand, setAge_brand] = React.useState("");
  const [open_sel_brand, setOpen_sel_brand] = React.useState(false);

  const handleChange_sel_brand = (event) => {
    setAge_brand(event.target.value);
  };

  const handleClose_sel_brand = () => {
    setOpen_sel_brand(false);
  };

  const handleOpen_sel_brand = () => {
    setOpen_sel_brand(true);
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
        <DialogTitle id="form-dialog-title">Add Device </DialogTitle>

        <FormControl className={classes.formControl}>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="  Device Name"
            type="email"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            s
          />
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel id="demo-controlled-open-select-label">Type</InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={open_sel}
            onClose={handleClose_sel}
            onOpen={handleOpen_sel}
            value={age}
            onChange={handleChange_sel}
          >
            {device.types.map((type) => (
              <MenuItem value={type.id} key={type.id}>
                {type.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel id="demo-controlled-open-select-label">Brand</InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={open_sel_brand}
            onClose={handleClose_sel_brand}
            onOpen={handleOpen_sel_brand}
            value={age_brand}
            onChange={handleChange_sel_brand}
          >
            {device.brands.map((brand) => (
              <MenuItem value={brand.id} key={brand.id}>
                {brand.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl className={classes.formControl}>
          <TextField
            id="standard-basic"
            label="Price"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <input type="file" onChange={selectFile}></input>
        </FormControl>

        {info.map((i) => (
          <div key={i.number}>
            <div>
              <FormControl className={classes.formControl}>
                <TextField
                  id="standard-basic"
                  label="Свойство"
                  value={i.title}
                  value={i.title}
                  onChange={(e) =>
                    changeInfo("title", e.target.value, i.number)
                  }
                />
              </FormControl>
            </div>
            <div>
              <FormControl className={classes.formControl}>
                <TextField
                  id="standard-basic"
                  label="Описание"
                  value={i.description}
                  onChange={(e) =>
                    changeInfo("description", e.target.value, i.number)
                  }
                />
              </FormControl>
            </div>
            <div>
              <FormControl className={classes.formControl}>
                <Button
                  onClick={() => removeInfo(i.number)}
                  color="secondary"
                  variant="contained"
                >
                  REM
                </Button>{" "}
              </FormControl>
            </div>
          </div>
        ))}
        <FormControl className={classes.formControl}>
          <Button onClick={() => addInfo()} color="primary" variant="contained">
            ADD INFO
          </Button>
        </FormControl>

        <DialogActions>
          <Button onClick={addDevice} color="primary" variant="contained">
            ADD
          </Button>
          <Button onClick={handleClose} color="secondary" variant="contained">
            CLOSE
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
});

export default AddDevice;
