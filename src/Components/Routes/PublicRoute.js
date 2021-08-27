import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import authSelectors from '../../Redux/Auth/Auth-selectors';

export default function PublicRoute({
    children,
    restricted = false,
    redirectTo = '/',
    ...props
}) {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    const needRedirect = isLoggedIn && restricted;
    return (
        <Route {...props}>
            {needRedirect ? <Redirect to={redirectTo} /> : children}
        </Route>
    );
}