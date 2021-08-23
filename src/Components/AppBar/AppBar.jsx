import s from './AppBar.module.css';
import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";

function AppBar() {
    return (
        <div className ={s.container}>
            <Navigation />
            <UserMenu />
            <AuthNav/>
        </div>
    )
};

export default AppBar;