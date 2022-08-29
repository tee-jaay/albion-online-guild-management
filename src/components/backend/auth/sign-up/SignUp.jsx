import axios from 'axios';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import ApiURLs from '../../../../api/ApiURLs';
import SessionHelper from '../../../../session-helper/SessionHelper';
import { AUTH } from '../../../routes/auth';
import { DASHBOARD } from '../../../routes/backend';
import logo from '../../assets/images/logo.svg'

const SignUp = () => {

    const history = useHistory();

    const [ign, setIgn] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        let sendData = new FormData();
        sendData.append("ign", ign);
        sendData.append("name", name);
        sendData.append("email", email);
        sendData.append("password", password);

        axios.post(ApiURLs.REGISTER, sendData)
            .then((res) => {
                if (res.status === 201) {
                    localStorage.setItem('auth_token', res.data.access_token);
                    localStorage.setItem('ign', res.data.user.ign);
                    localStorage.setItem('name', res.data.user.name);
                    localStorage.setItem('role', res.data.user.role);
                    localStorage.setItem('status', res.data.user.status);
                    localStorage.setItem('avatar', res.data.user.avatar);
                    toast.success(res.data.message);
                    history.push(DASHBOARD.INDEX);
                    return res.data;
                }
                if (res.data.validation_error !== '') {
                    setError(res.data.validation_error['ign']);
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
                                    <h4>New here?</h4>
                                    <h6 class="font-weight-light">Join us today! It takes only few steps</h6>
                                    <form class="pt-3" id="sign-up" onSubmit={handleSubmit}>
                                        <div class="form-group">
                                            <label htmlFor="ign">IGN</label>
                                            <div class="input-group">
                                                <div class="input-group-prepend bg-transparent">
                                                    <span class="input-group-text bg-transparent border-right-0">
                                                        <i class="mdi mdi-gamepad-variant guild-color"></i>
                                                    </span>
                                                </div>
                                                <input
                                                    onChange={(e) => setIgn(e.target.value)}
                                                    type="text"
                                                    class="form-control form-control-sm border-left-0"
                                                    placeholder="In Game Name"
                                                    id="ign"
                                                />
                                            </div>
                                            {error && <h5 className="text-danger text-sm mt-1">{error}</h5>}
                                        </div>
                                        <div class="form-group">
                                            <label htmlFor="your-name">Name <span className="text-secondary">(optional)</span></label>
                                            <div class="input-group">
                                                <div class="input-group-prepend bg-transparent">
                                                    <span class="input-group-text bg-transparent border-right-0">
                                                        <i class="mdi mdi-account-outline guild-color"></i>
                                                    </span>
                                                </div>
                                                <input
                                                    onChange={(e) => setName(e.target.value)}
                                                    type="text"
                                                    class="form-control form-control-sm border-left-0"
                                                    placeholder="Your name"
                                                    id="your-name"
                                                />
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label htmlFor="email">Email <span className="text-secondary">(optional)</span></label>
                                            <div class="input-group">
                                                <div class="input-group-prepend bg-transparent">
                                                    <span class="input-group-text bg-transparent border-right-0">
                                                        <i class="mdi mdi-email-outline guild-color"></i>
                                                    </span>
                                                </div>
                                                <input
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    type="email"
                                                    class="form-control form-control-sm border-left-0"
                                                    placeholder="Email"
                                                    id="email"
                                                />
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label htmlFor="password">Password <span className="text-secondary">(optional)</span></label>
                                            <div class="input-group">
                                                <div class="input-group-prepend bg-transparent">
                                                    <span class="input-group-text bg-transparent border-right-0">
                                                        <i class="mdi mdi-lock-outline guild-color"></i>
                                                    </span>
                                                </div>
                                                <input
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    type="password" class="form-control form-control-sm border-left-0" id="password"
                                                    placeholder="Password" />
                                            </div>
                                        </div>
                                        <div class="mt-3">
                                            <button class="btn btn-block guild-bg-color text-light btn-sm font-weight-medium auth-form-btn">SIGN UP</button>
                                        </div>
                                        <div class="text-center mt-4 font-weight-light">
                                            Already have an account? <Link to={AUTH.SIGN_IN} class="guild-color">Login</Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="col-lg-6 register-half-bg d-flex flex-row" style={{ background: 'url("https://res.cloudinary.com/ddshzl0qo/image/upload/v1633737096/extra/register-bg.951d1612_tzgdz5.jpg")', backgroundSize: 'cover' }}>
                                <p class="text-white font-weight-medium text-center flex-grow align-self-end">Copyright &copy; 2020  All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                    {/* <!-- content-wrapper ends --> */}
                </div>
                {/* <!-- page-body-wrapper ends --> */}
            </div>

        </>
    )
}
export default SignUp;