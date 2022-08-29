import Brand from "./brand/Brand"
import Search from "./search/Search"
import NotificationUser from "./notification-user/NotificationUser"

const Navbar = () => {
    return (
        <>
            <nav class="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
                <Brand />
                <div class="navbar-menu-wrapper d-flex align-items-center justify-content-end">
                    <Search />
                    <NotificationUser />
                </div>
            </nav>
        </>
    )
}
export default Navbar;