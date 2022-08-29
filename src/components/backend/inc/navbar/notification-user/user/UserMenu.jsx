import axios from 'axios';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import ApiURLs from '../../../../../../api/ApiURLs';
import { DASHBOARD } from '../../../../../routes/backend';
import faceImg from '../../../../assets/images/faces/face5.jpg'

const UserMenu = () => {

    const history = useHistory();

    const logout = (e) => {
        e.preventDefault();

        axios.post(ApiURLs.LOGOUT)
            .then((res) => {
                if (res.data.status === 200) {
                    localStorage.removeItem('auth_token');
                    localStorage.removeItem('avatar');
                    localStorage.removeItem('role');
                    localStorage.removeItem('ign');
                    localStorage.removeItem('name');
                    localStorage.removeItem('status');
                    toast.info(res.data.message);
                    history.push('/');
                }
            })
            .catch((err) => {
                console.log(err)
            });
    }

    return (
        <>
            <li className="nav-item nav-profile dropdown">
                <Link to={DASHBOARD.CRAFTERS + "/" + localStorage.getItem('ign')} className="nav-link dropdown-toggle" data-toggle="dropdown" id="profileDropdown">
                    <img src={localStorage.getItem('avatar')} alt={localStorage.getItem('ign')} />
                    <span className="nav-profile-name">{localStorage.getItem('name') ? localStorage.getItem('name') : localStorage.getItem('ign')}</span>
                </Link>
                <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
                    <Link to="/" className="dropdown-item">
                        <i className="mdi mdi-settings text-primary"></i>
                        Settings
                    </Link>
                </div>
            </li>

            <li className="nav-item mx-0">
                <button onClick={logout} type="button" className="dropdown-item">
                    <i className="mdi mdi-logout guild-color"></i>
                    Logout
                </button>
            </li>

        </>
    )
}
export default UserMenu;