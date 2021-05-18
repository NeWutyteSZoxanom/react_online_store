import React, { useContext } from "react";
import { Context } from "../index";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { SHOP_ROUTE } from "../utils/const";
import { NavLink } from "react-router-dom";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  title: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const { user } = useContext(Context);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className="toolbar">
          <div>
            <NavLink to={SHOP_ROUTE} className="divh1">
              <Typography variant="h5" className={classes.title}>
                <div className="divh1">Купи девайс </div>
              </Typography>
            </NavLink>
          </div>
          <div className="toolbar">
            <NavLink to={SHOP_ROUTE} className="divh1">
              <Typography variant="h6" className={classes.title}>
                <div className="divh1et">Купи девайс</div>
              </Typography>
            </NavLink>
            <NavLink to={SHOP_ROUTE} className="divh1">
              <Typography variant="h6" className={classes.title}>
                <div className="divh1et">Купи девайс</div>
              </Typography>
            </NavLink>
            <NavLink to={SHOP_ROUTE} className="divh1">
              <Typography variant="h6" className={classes.title}>
                <div className="divh1et">Купи девайс</div>
              </Typography>
            </NavLink>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;