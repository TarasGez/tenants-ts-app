import React from "react";
import { Switch, Route } from "react-router-dom";
import TenantsContainer from './pages/TenantsContainer';
import Tenant from './pages/Tenant';

export default function AppRouter() {
  return (
    <Switch>
      <Route path="/tenant/:id">
        <Tenant />
      </Route>
      <Route path="/">
        <TenantsContainer />
      </Route>
    </Switch>
  );
}
