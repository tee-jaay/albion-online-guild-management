import '../assets/mdi/css/materialdesignicons.min.css';
import '../assets/css/style.css';
import './layout.css';
import Footer from '../inc/footer/Footer';
import Navbar from '../inc/navbar/Navbar';
import Sidebar from '../inc/sidebar/Sidebar';
import { AUTH } from '../../routes/auth';
import { Redirect } from 'react-router-dom';

const Layout = (props) => {
    if (localStorage.getItem('auth_token')) {
        return (
            <>
                <div className="container-scroller">
                    <Navbar />
                    <div className="container-fluid page-body-wrapper">
                        <Sidebar />
                        <div className="main-panel">
                            <div className="content-wrapper">
                                {props.children}
                            </div>
                            <Footer />
                        </div>
                    </div>
                </div>
            </>
        );
    } else {
        return <Redirect to={AUTH.SIGN_IN} />
    }
}
export default Layout;