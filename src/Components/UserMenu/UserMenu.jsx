import React from 'react';
import s from './UserMenu.module.css';
import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../../Redux/Auth/Auth-selectors';
import { logOut } from '../../Redux/Auth/Auth-operations';

function UserMenu() {
    const dispatch = useDispatch();
    const name = useSelector(authSelectors.getUsername);

    return (
        <div>
            <span className={s.title}>Welcome! {name}</span>
            <button className={s.btn} type='button' onClick={()=> dispatch(logOut())}>Logout</button>
        </div>
    )
};

export default UserMenu;