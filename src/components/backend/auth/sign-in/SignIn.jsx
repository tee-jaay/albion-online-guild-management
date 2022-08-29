import axios from 'axios';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import ApiURLs from '../../../../api/ApiURLs';
import SessionHelper from '../../../../session-helper/SessionHelper';
import { AUTH } from '../../../routes/auth';
import { DASHBOARD } from '../../../routes/backend';
import logo from '../../assets/images/logo.svg'

const SignIn = () => {

    const history = useHistory();

    const [ign, setIgn] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        let sendData = new FormData();
        // sendData.append("ign", ign);
        sendData.append("email", email);
        sendData.append("password", password);

        axios.post(ApiURLs.LOGIN, sendData)
            .then((res) => {
                if (res.status === 200) {
                    localStorage.setItem('auth_token', res.data.access_token);
                    localStorage.setItem('ign', res.data.user.ign);
                    localStorage.setItem('name', res.data.user.name);
                    localStorage.setItem('role', res.data.user.role);
                    localStorage.setItem('status', res.data.user.status);
                    localStorage.setItem('avatar', res.data.user.avatar);
                    toast.success(res.data.message);
                    history.push(DASHBOARD.INDEX);
                }
            })
            .catch((err) => {
                console.error(err);
            });
    }

    return (
        <>
            <div class="container-scroller">
                <div class="container-fluid page-body-wrapper full-page-wrapper">
                    <div class="content-wrapper d-flex align-items-stretch auth auth-img-bg">
                        <div class="row flex-grow">
                            <div class="col-lg-6 d-flex align-items-center justify-content-center">
                                <div class="auth-form-transparent text-left p-3">
                                    <div class="brand-logo">
                                        <img src={SessionHelper.getSiteInfo() && SessionHelper.getSiteInfo().logo} alt="logo" />
                                    </div>
                                    <h4>Welcome back!</h4>
                                    <h6 class="font-weight-light">Happy to see you again!</h6>
                                    <form class="pt-3" id="sign-in" onSubmit={handleSubmit}>
                                        {/* <div class="form-group">
                                            <label for="ign">IGN</label>
                                            <div class="input-group">
                                                <div class="input-group-prepend bg-transparent">
                                                    <span class="input-group-text bg-transparent border-right-0">
                                                        <i class="mdi mdi-account-outline guild-color"></i>
                                                    </span>
                                                </div>
                                                <input
                                                    onChange={(e) => setIgn(e.target.value)}
                                                    type="text"
                                                    class="form-control form-control-sm border-left-0"
                                                    id="ign"
                                                    placeholder="In game name"
                                                />
                                            </div>
                                        </div> */}
                                        <div class="form-group">
                                            <label for="email">Email</label>
                                            <div class="input-group">
                                                <div class="input-group-prepend bg-transparent">
                                                    <span class="input-group-text bg-transparent border-right-0">
                                                        <i class="mdi mdi-account-outline guild-color"></i>
                                                    </span>
                                                </div>
                                                <input
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    type="email"
                                                    class="form-control form-control-sm border-left-0"
                                                    id="email"
                                                    placeholder="Your email"
                                                />
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="inputPassword">Password</label>
                                            <div class="input-group">
                                                <div class="input-group-prepend bg-transparent">
                                                    <span class="input-group-text bg-transparent border-right-0">
                                                        <i class="mdi mdi-lock-outline guild-color"></i>
                                                    </span>
                                                </div>
                                                <input
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    type="password" class="form-control form-control-sm border-left-0" id="inputPassword" placeholder="Password" />
                                            </div>
                                        </div>
                                        <div class="my-2 d-flex justify-content-between align-items-center">
                                            <div class="form-check">
                                                <label class="form-check-label text-muted">
                                                    <input type="checkbox" class="form-check-input" />
                                                    Keep me signed in
                                                </label>
                                            </div>
                                            <a href="#" class="auth-link text-black">Forgot password?</a>
                                        </div>
                                        <div class="my-3">
                                            <button class="btn btn-block guild-bg-color text-light btn-sm font-weight-medium auth-form-btn">LOGIN</button>
                                        </div>

                                        <div class="text-center mt-4 font-weight-light">
                                            Don't have an account? <Link to={AUTH.SIGN_UP} class="guild-color">Create</Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="col-lg-6 login-half-bg d-flex flex-row" style={{ background: 'url("https://res.cloudinary.com/ddshzl0qo/image/upload/v1633737099/extra/login-bg.7593b671_qocp92.jpg")', backgroundSize: 'cover' }}>
                                {/* Todo: copyright text */}
                                <p class="text-white font-weight-medium text-center flex-grow align-self-end">Copyright &copy; 2020  All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                    {/* <!-- content-wrapper ends --> */}
                </div>
                {/* <!-- page-body-wrapper ends --> */}
            </div>
            <ToastContainer />
        </>
    )
}
export default SignIn;