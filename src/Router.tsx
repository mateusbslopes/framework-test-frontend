import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignIn from "./components/pages/SignIn";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <SignIn />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
