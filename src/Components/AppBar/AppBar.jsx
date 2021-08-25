import { useSelector } from 'react-redux';
import s from './AppBar.module.css';
import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";
import authSelectors from '../../Redux/Auth/Auth-selectors';

function AppBar() {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
    return (
        <div className ={s.container}>
            <Navigation />
            {isLoggedIn ?  <UserMenu /> : <AuthNav/> }
        </div>
    )
};

export default AppBar;