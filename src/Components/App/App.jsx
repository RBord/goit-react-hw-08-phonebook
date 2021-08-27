import { Switch, Route } from 'react-router-dom';
import { useEffect, Suspense, lazy } from 'react';
import { useDispatch } from 'react-redux';
import Container from '../Container/Container';
import AppBar from '../AppBar/AppBar';
import { refresh } from '../../Redux/Auth/Auth-operations';

const ContactsView = lazy(() => import('../../Views/ContactsView/ContactsView'));
const HomeView = lazy(() => import('../../Views/HomeView'));
const RegisterView = lazy(() => import('../../Views/RegisterView/RegisterView'));
const LoginView = lazy(() => import('../../Views/LoginView/LoginView'));

export default function App() {
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(refresh());
    }, [dispatch]);

    return (
        <Container>
            <AppBar />
            <Switch>
                <Suspense fallback={<p>Загружаем...</p>}>
                    <Route exact path='/' component={HomeView} />
                    <Route path='/register' component={RegisterView} />
                    <Route path='/login' component={LoginView} />
                    <Route path='/contacts' component={ContactsView}/>
                </Suspense>
            </Switch>
       </Container>
    )
};