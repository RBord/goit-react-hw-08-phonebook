import { Switch, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ContactsView from '../../Views/ContactsView/ContactsView';
import HomeView from '../../Views/HomeView';
import RegisterView from '../../Views/RegisterView/RegisterView';
import LoginView from '../../Views/LoginView/LoginView';
import Container from '../Container/Container';
import AppBar from '../AppBar/AppBar';
import { refresh } from '../../Redux/Auth/Auth-operations';

export default function App() {
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(refresh());
    }, [dispatch]);

    return (
        <Container>
            <AppBar />
            <Switch>
                <Route exact path='/' component={HomeView} />
                <Route path='/register' component={RegisterView} />
                <Route path='/login' component={LoginView} />
                <Route path='/contacts' component={ContactsView}/>
            </Switch>
       </Container>
    )
};