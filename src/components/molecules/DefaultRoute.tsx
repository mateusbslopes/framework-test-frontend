import { useSelector } from "react-redux";
import { Redirect, Route as ReactRoute } from "react-router";

export default function DefaultRoute({ ...rest }) {
  const token = useSelector((state: any) => state.auth.token);
  return (
    <ReactRoute
      {...rest}
      render={({ location }) =>
        token ? (
          <Redirect
            to={{
              pathname: "/productList",
              state: { from: location },
            }}
          />
        ) : (
          <Redirect
            to={{
              pathname: "/signIn",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
