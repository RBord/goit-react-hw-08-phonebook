import React from 'react';
import s from './UserMenu.module.css';
// import { useDispatch, useSelector } from 'react-redux';

const UserMenu = () => (
    <div>
        <span className={s.title}>Welcome!</span>
        <button className={s.btn}>Logout</button>
    </div>
);

export default UserMenu;