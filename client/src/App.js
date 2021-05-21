import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar";
import Container from "@material-ui/core/Container";
import { observer } from "mobx-react-lite";
import { Context } from "./index";
import { check } from "./https/userApi";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

const App = observer(() => {
  const classes = useStyles();

  const { user } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      check()
        .then((data) => {
          user.setUser(true);
          user.setAuth(true);
        })
        .finally(() => setLoading(false));
    }, 500);
  }, []);

  if (loading) {
    return (
      <>
        <Backdrop className={classes.backdrop} open={loading}>
          <CircularProgress color="inherit" />
        </Backdrop>
      </>
    );
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Container fixed>
        <AppRouter />
      </Container>
    </BrowserRouter>
  );
});

export default App;
