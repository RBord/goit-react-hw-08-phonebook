import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
import authSelectors from '../../Redux/Auth/Auth-selectors';

const Navigation = () => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    return (
        <nav>
            <NavLink to='/' exact className={s.link} activeClassName={s.activeLink}>
                Home
            </NavLink>
            {isLoggedIn && (
                <NavLink to='/contacts' exact className={s.link} activeClassName={s.activeLink} >
                Contacts
                </NavLink>
            )}
        </nav>
    )
};

export default Navigation;

