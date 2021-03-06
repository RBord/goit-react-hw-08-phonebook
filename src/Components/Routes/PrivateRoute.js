import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import authSelectors from '../../Redux/Auth/Auth-selectors';

export default function PrivateRoute({
  children,
  redirectTo = '/',
  ...props
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Route {...props}>
      {isLoggedIn ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}