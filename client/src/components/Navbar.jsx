import React, { useContext } from "react";
import { Context } from "../index";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/const";
import { NavLink, useHistory } from "react-router-dom";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  title: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const history = useHistory();
  const classes = useStyles();
  const { user } = useContext(Context);

  const logOut = () => {
    user.setUser({});
    user.setAuth(false);
  };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Container fixed>
          <Toolbar className="toolbar">
            <div>
              <NavLink to={SHOP_ROUTE} className="divh1">
                <Typography variant="h5" className={classes.title}>
                  <div className="divh1">Купи девайс </div>
                </Typography>
              </NavLink>
            </div>
            <div className="toolbar">
              <>
                <div className="toolbarb">
                  <Button
                    variant="outlined"
                    color="intherit"
                    onClick={() => history.push(ADMIN_ROUTE)}
                  >
                    ADMIN
                  </Button>
                </div>
                <div className="toolbarb">
                  <Button
                    variant="outlined"
                    color="intherit"
                    onClick={() => logOut()}
                  >
                    LOG OUT
                  </Button>
                </div>
              </>

              <div className="toolbarb">
                <Button
                  variant="outlined"
                  color="intherit"
                  onClick={() => history.push(LOGIN_ROUTE)}
                >
                  LOGIN
                </Button>
              </div>

              {/* <NavLink to={SHOP_ROUTE} className="divh1">
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
              </NavLink> */}
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Navbar;
