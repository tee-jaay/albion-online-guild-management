import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import { DASHBOARD } from '../../routes/backend';
import ApiURLs from "../../../api/ApiURLs";
import Layout from "../layout/Layout";
import Loader from "../loader/Loader";
import { toast } from "react-toastify";

const CrafterAdd = () => {
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false);

    const [ign, setIgn] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [avatar, setAvatar] = useState("");
    const [role, setRole] = useState("");
    const [status, setStatus] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        let sendData = new FormData();
        sendData.append("ign", ign);
        sendData.append("name", name);
        sendData.append("email", email);
        sendData.append("password", password);
        sendData.append("avatar", avatar);
        sendData.append("role", role);
        sendData.append("status", status);

        axios.post(ApiURLs.CRAFTERS, sendData)
            .then((res) => {
                setTimeout(() => {
                    setIsLoading(false);
                    toast.success('Crafter added.');
                    return res.data;
                }, 500);
                history.push(DASHBOARD.CRAFTERS);
            }).catch((err) => {
                setTimeout(() => {
                    setIsLoading(false);
                    toast.error('Internal error occured.');
                    console.error(err);
                }, 500);
            });
    }

    if (isLoading) {
        return (
            <Layout>
                <Loader />
            </Layout>
        )
    } else {
        return (
            <>
                <Layout>
                    <div className="col-12 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Add a crafter</h4>
                                <form className="forms" onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label for="ign">IGN</label>
                                        <input onChange={(e) => setIgn(e.target.value)} type="text" className="form-control form-control-sm" id="ign" placeholder="in game name" />
                                    </div>
                                    <div className="form-group">
                                        <label for="crafter_name">Name</label>
                                        <input onChange={(e) => setName(e.target.value)} type="text" className="form-control form-control-sm" id="crafter_name" placeholder="(optional)" />
                                    </div>
                                    <div className="form-group">
                                        <label for="email">Email address</label>
                                        <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control form-control-sm" id="email" placeholder="(optional)" />
                                    </div>
                                    <div className="form-group">
                                        <label for="password">Password</label>
                                        <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control form-control-sm" id="password" placeholder="(optional)" />
                                    </div>
                                    <div className="form-group">
                                        <label for="role_select">Role</label>
                                        <select className="form-control form-control-sm" id="role_select" onChange={(e) => setRole(e.target.value)}>
                                            <option value="0">Crafter</option>
                                            <option value="1">Officer</option>
                                        </select>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-sm-3 col-form-label">Status</label>
                                        <div className="col-sm-4">
                                            <div className="form-check">
                                                <label className="form-check-label">
                                                    <input onChange={(e) => setStatus(e.target.value)} type="radio" className="form-check-input" name="status" id="status_1" value="1" checked="1" />
                                                    Active
                                                    <i className="input-helper"></i></label>
                                            </div>
                                        </div>
                                        <div className="col-sm-5">
                                            <div className="form-check">
                                                <label className="form-check-label">
                                                    <input onChange={(e) => setStatus(e.target.value)} type="radio" className="form-check-input" name="status" id="status_2" value="2" />
                                                    Inactive
                                                    <i className="input-helper"></i></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Avatar</label>
                                        <input
                                            onChange={(e) => setAvatar(e.target.files[0])}
                                            type="file" name="avatar" className="form-control-file form-control-sm" />
                                    </div>
                                    <button type="submit" className="btn btn-primary mr-2 btn-sm">Submit</button>
                                    <button className="btn btn-light btn-sm">Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </Layout>
            </>
        )
    }
}
export default CrafterAdd;