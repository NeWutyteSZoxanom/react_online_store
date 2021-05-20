import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { NavLink, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/const";
import { login, registration } from "../https/userApi";
import axios from "axios";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
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

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const classes = useStyles();

  const click = async () => {
    if (isLogin) {
      const response = await login();
    } else {
      const response = await registration(email, password);
      console.log(response);
    }
  };

  useEffect(
    () =>
      axios
        .get(`http://localhost:5000/api/type/`)
        .then((response) => console.log(response.data)),
    []
  );

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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
          <TextField
            id="standard-password-input"
            label="Password"
            type="password"
            style={{ margin: 8 }}
            placeholder="Введите пороль"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
        </CardContent>
        <Button variant="contained" color="primary" onClick={click}>
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
