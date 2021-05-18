import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { NavLink, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/const";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div className="auth_con">
      <Card className={classes.root} className="auth_card">
        <CardContent>
          <Typography variant="h5" component="h2">
            {isLogin ? "Authorization" : "Registration"}
          </Typography>
          <TextField
            id="outlined-full-width"
            label="Email"
            style={{ margin: 8 }}
            placeholder="Введите email"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
          <TextField
            id="outlined-full-width"
            label="Password"
            style={{ margin: 8 }}
            placeholder="Введите пороль"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
        </CardContent>
        <Button variant="contained" color="primary">
          {isLogin ? "Войти" : "Регистрироватся"}
        </Button>
        {isLogin ? (
          <NavLink to={REGISTRATION_ROUTE}>Регистрация</NavLink>
        ) : (
          <NavLink to={LOGIN_ROUTE}>Войдите</NavLink>
        )}
      </Card>
    </div>
  );
};

export default Auth;
