import { BrowserRouter, Switch, Route } from "react-router-dom";
import DefaultRoute from "./components/molecules/DefaultRoute";
import PrivateRoute from "./components/molecules/PrivateRoute";
import Product from "./components/pages/Product";
import ProductList from "./components/pages/ProductList";
import SignIn from "./components/pages/SignIn";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <DefaultRoute path="/" exact />
        <Route path="/signIn">
          <SignIn />
        </Route>
        <PrivateRoute path="/productList">
          <ProductList />
        </PrivateRoute>
        <PrivateRoute path="/product/:id">
          <Product />
        </PrivateRoute>
      </Switch>
    </BrowserRouter>
  );
}
