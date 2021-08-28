import { Switch } from 'react-router-dom';
import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../Container/Container';
import AppBar from '../AppBar/AppBar';
import PrivateRoute from '../Routes/PrivateRoute';
import PublicRoute from '../Routes/PublicRoute';
import { refresh } from '../../Redux/Auth/Auth-operations';
import authSelectors from '../../Redux/Auth/Auth-selectors';
import Spinner from '../Spinner/Spinner';
import s from './App.module.css';

const ContactsView = lazy(() => import('../../Views/ContactsView/ContactsView'));
const HomeView = lazy(() => import('../../Views/HomeView'));
const RegisterView = lazy(() => import('../../Views/RegisterView/RegisterView'));
const LoginView = lazy(() => import('../../Views/LoginView/LoginView'));

export default function App() {
    
    const dispatch = useDispatch();
    const isRefreshingCurrentUser = useSelector(authSelectors.getIsRefreshing);

    useEffect(() => {
        dispatch(refresh());
    }, [dispatch]);

    return (
        !isRefreshingCurrentUser && (
            <Container>
                <AppBar />
                <Switch>
                    <Suspense fallback={<div className={s.spinner}><Spinner /></div>}>
                        <PublicRoute exact path='/' >
                            <HomeView />
                        </PublicRoute>
                        <PublicRoute exact path='/register' restricted >
                            <RegisterView />
                        </PublicRoute>
                        <PublicRoute exact path='/login' redirectTo='/contacts' restricted >
                            <LoginView />
                        </PublicRoute>
                        <PrivateRoute path='/contacts' redirectTo='/login'>
                            <ContactsView />
                        </PrivateRoute>
                    </Suspense>
                </Switch>
            </Container>
        )
    );
};