import Notification from "./notification/Notification"
import UserMenu from "./user/UserMenu"

const NotificationUser = () => {

    var authButtons = '';
    if (!localStorage.getItem('auth_token')) {
        authButtons = (
            ''
        );
    } else {
        authButtons = (
            <>
                <Notification />
                <UserMenu />
            </>
        );
    }
    return (
        <ul className="navbar-nav navbar-nav-right">
            {authButtons}
        </ul>
    )
}
export default NotificationUser;