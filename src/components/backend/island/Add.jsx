import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import ApiURLs from '../../../api/ApiURLs';
import { DASHBOARD } from '../../routes/backend';
import Layout from '../layout/Layout'
import Loader from '../loader/Loader';

const Add = () => {
    const history = useHistory();
    const [islandName, setIslandName] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        let name = islandName;
        axios.post(ApiURLs.ISLANDS, { name })
            .then((res) => {
                setTimeout(() => {
                    setIsLoading(false);
                    toast.success('Island added');
                }, 300);
                history.push(DASHBOARD.ISLANDS);
            })
            .catch((err) => {
                setIsLoading(false);
                toast.error('Server error');
                console.error(err);
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
                    <div className="row">
                        <div className="col-12 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Add Island</h4>
                                    <form className="forms-sample" onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <label htmlFor="island_name">Name</label>
                                            <input
                                                onChange={(e) => setIslandName(e.target.value)}
                                                type="text" className="form-control form-control-sm" id="island_name" placeholder="island name" />
                                        </div>
                                        <button type="submit" className="btn btn-sm btn-primary mr-2">Add</button>
                                        <button className="btn btn-sm btn-light">Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </Layout>
                {/* <ToastContainer /> */}
            </>
        )
    }
}
export default Add;