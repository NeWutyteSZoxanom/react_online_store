import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Context } from "../index";
import { authRoutes, publicRoutes } from "../routes";
import { SHOP_ROUTE } from "../utils/const";

const AppRouter = () => {
  const { user } = useContext(Context);

  return (
    <div>
      <Switch>
        {user.isAuth &&
          authRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} component={Component} exact></Route>
          ))}
        {publicRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} component={Component} exact></Route>
        ))}
        <Redirect to={SHOP_ROUTE} />
      </Switch>
    </div>
  );
};

export default AppRouter;
