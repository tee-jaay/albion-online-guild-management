import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import ApiURLs from "../../../api/ApiURLs";
import { DASHBOARD } from "../../routes/backend";
import Layout from "../layout/Layout";
import Loader from "../loader/Loader";

const CrafterEdit = () => {
    const history = useHistory();
    const { ign } = useParams();
    const [crafter, setCrafter] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [avatar, setAvatar] = useState("https://i.pravatar.cc/300");
    const [role, setRole] = useState("");
    const [status, setStatus] = useState("");

    useEffect(() => {
        axios.get(ApiURLs.CRAFTERS_LIST + "/" + ign)
            .then((response) => {
                setCrafter(response.data);
                setTimeout(() => {
                    setIsLoading(false);
                }, 900);
            })
            .catch((err) => {
                console.error(err);
            });
    }, [setCrafter]);

    const handleUpdate = (e) => {
        e.preventDefault();
        setIsLoading(true);

        let sendData = new FormData();
        sendData.append("name", name);
        sendData.append("email", email);
        sendData.append("avatar", avatar);
        sendData.append("role", role);
        sendData.append("status", status);

        axios.put(ApiURLs.CRAFTERS_LIST + "/" + ign, sendData)
            .then((res) => {
                setTimeout(() => {
                    console.log(res.data);
                    setIsLoading(false);
                    history.push(DASHBOARD.CRAFTERS);
                }, 700);
            }).catch((err) => {
                console.error(err);
                setIsLoading(false);
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
                                <h4 className="card-title">Update crafter</h4>
                                <form className="forms" onSubmit={handleUpdate}>
                                    {/* <div className="form-group">
                                        <label for="ign">IGN</label>
                                        <input type="text" className="form-control form-control-sm" id="ign" placeholder="in game name" />
                                    </div> */}
                                    <div className="form-group">
                                        <label for="crafter_name">Name</label>
                                        <input
                                            onChange={(e) => setName(e.target.value)}
                                            type="text"
                                            className="form-control form-control-sm"
                                            id="crafter_name"
                                            placeholder={crafter['user'].name} />
                                    </div>
                                    <div className="form-group">
                                        <label for="email">Email address</label>
                                        <input
                                            onChange={(e) => setEmail(e.target.value)}
                                            type="email"
                                            className="form-control form-control-sm"
                                            id="email"
                                            placeholder={crafter['user'].email} />
                                    </div>
                                    <div className="form-group">
                                        <label for="role_select">Role</label>
                                        <select
                                            className="form-control form-control-sm"
                                            id="role_select"
                                            onChange={(e) => setRole(e.target.value)}>
                                            <option value="0">Crafter</option>
                                            {
                                                crafter['user'].role == 1 ?
                                                    <option value="1" selected>Officer</option>
                                                    :
                                                    <option value="1">Officer</option>
                                            }
                                        </select>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-sm-3 col-form-label">Status</label>
                                        <div className="col-sm-4">
                                            <div className="form-check">
                                                <label className="form-check-label">
                                                    {crafter['user'].status == 1 ?
                                                        <input
                                                            onChange={(e) => setStatus(1)}
                                                            type="radio"
                                                            className="form-check-input"
                                                            name="status"
                                                            id="status_1"
                                                            value="1"
                                                            checked
                                                        />
                                                        :
                                                        <input
                                                            onChange={(e) => setStatus(1)}
                                                            type="radio"
                                                            className="form-check-input"
                                                            name="status"
                                                            id="status_1"
                                                            value="1"
                                                        />
                                                    }
                                                    Active
                                                    <i className="input-helper"></i></label>
                                            </div>
                                        </div>
                                        <div className="col-sm-5">
                                            <div className="form-check">
                                                <label className="form-check-label">
                                                    {crafter['user'].status == 0 ?
                                                        <input
                                                            onChange={(e) => setStatus(0)}
                                                            type="radio"
                                                            className="form-check-input"
                                                            name="status"
                                                            id="status_2"
                                                            value="0"
                                                            checked
                                                        />
                                                        :
                                                        <input
                                                            onChange={(e) => setStatus(0)}
                                                            type="radio"
                                                            className="form-check-input"
                                                            name="status"
                                                            id="status_2"
                                                            value="0"
                                                        />
                                                    }
                                                    Inactive
                                                    <i className="input-helper"></i></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="form-group">
                                            <label>Avatar</label>
                                            <input
                                                onChange={(e) => setAvatar(e.target.files[0])}
                                                type="file" name="avatar" className="form-control-file form-control-sm" />
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-warning mr-2 btn-sm">Update</button>
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
export default CrafterEdit;