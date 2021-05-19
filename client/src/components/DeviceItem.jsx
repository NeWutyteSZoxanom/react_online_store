import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import GradeOutlinedIcon from "@material-ui/icons/GradeOutlined";
import IconButton from "@material-ui/core/IconButton";
import { DEVICE_ROUTE, LOGIN_ROUTE } from "../utils/const";
import { NavLink, useHistory } from "react-router-dom";
import GradeIcon from "@material-ui/icons/Grade";

const DeviceItem = ({ device }) => {
  const history = useHistory();

  const [ratin, setRatin] = useState(true);

  const handleClick = () => {
    if (ratin) {
      return setRatin(false);
    }
    return setRatin(true);
  };

  return (
    <>
      <Paper
        elevation={3}
        className="decise"
        onClick={() => history.push(DEVICE_ROUTE + "/" + device.id)}
      >
        <img src={device.img} className="decise_img" />

        <div className="decise_price_info">
          <div>
            <h3>{device.name} </h3>
          </div>
          <div className="decise_price_rat">
            <div>
              <p>Цена:{device.price}</p>
            </div>
            <div>
              <IconButton onClick={() => handleClick()}>
                {ratin ? <GradeOutlinedIcon /> : <GradeIcon />}
              </IconButton>
            </div>
          </div>
        </div>
      </Paper>
    </>
  );
};

export default DeviceItem;
