import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ContactsView from '../../Views/ContactsView/ContactsView';
import HomeView from '../../Views/HomeView';
import RegisterView from '../../Views/RegisterView/RegisterView';
import LoginView from '../../Views/LoginView/LoginView';
import Container from '../Container/Container';
import AppBar from '../AppBar/AppBar';

export default function App () {
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