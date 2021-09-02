import { useSelector } from "react-redux";
import { Redirect, Route as ReactRoute} from "react-router";

export default function PrivateRoute({ children, ...rest }: any) {
  const token = useSelector((state: any) => state.auth.token);
  return (
    <ReactRoute
      {...rest}
      render={({ location }) =>
        token ? (
          children
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
