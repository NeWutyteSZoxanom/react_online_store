import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import GradeOutlinedIcon from "@material-ui/icons/GradeOutlined";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";
import { fetchOneDevices } from "../https/deviceApi";

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.typography.button,
    backgroundColor: theme.palette.info.main,
    padding: theme.spacing(1),
  },
  root_r: {
    ...theme.typography.button,
    padding: theme.spacing(1),
  },
}));

const DevicePage = () => {
  const classes = useStyles();
  const { id } = useParams();
  const [device, setDevice] = useState({ info: [] });
  useEffect(() => {
    fetchOneDevices(id).then((data) => setDevice(data));
  }, []);
  return (
    <div className="device-page">
      <Grid container spacing={3}>
        <Grid item xs={5}>
          <Paper elevation={3} square>
            <div>
              <img
                src={process.env.REACT_APP_API_URL + device.img}
                className="device-img"
              />
            </div>
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper elevation={3} square>
            <div>
              <h1>{device.name}</h1>
            </div>
            <div>
              <GradeOutlinedIcon style={{ fontSize: 100 }}></GradeOutlinedIcon>
            </div>
            <h3>Рейтинг: {device.rating}</h3>
            <h3>Цена :{device.price}</h3>

            <div>
              <Button variant="contained" color="primary" disableElevation>
                Добавить в корзину
              </Button>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={5}>
          <Paper elevation={3} square>
            {device.info.map((info) => (
              <div>
                <div className={classes.root}> {info.title} </div>
                <div className={classes.root_r}> {info.description} </div>
              </div>
            ))}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default DevicePage;
