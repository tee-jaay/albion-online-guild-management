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
    const [placeName, setPlaceName] = useState("");
    const [placeType, setPlaceType] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        let sendData = new FormData();
        sendData.append("name", placeName);
        sendData.append("type", placeType);
        axios.post(ApiURLs.PLACES, sendData)
            .then((res) => {
                setTimeout(() => {
                    setIsLoading(false);
                    toast.success('Place added');
                }, 300);
                history.push(DASHBOARD.PLACES);
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
                                    <h4 className="card-title">Add Place</h4>
                                    <form className="forms-sample" onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <label htmlFor="place_name">Name</label>
                                            <input
                                                onChange={(e) => setPlaceName(e.target.value)}
                                                type="text" className="form-control form-control-sm" id="place_name" placeholder="" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="place_type">Type</label>
                                            <select
                                                onChange={(e) => setPlaceType(e.target.value)}
                                                name="type" id="place_type" className="form-control form-control-sm">
                                                <option value="city">City</option>
                                                <option value="personal island">Personal Island</option>
                                                <option value="guild island">Guild Island</option>
                                                <option value="hideout">Hideout</option>
                                            </select>
                                        </div>
                                        <button type="submit" className="btn btn-sm btn-primary mr-2">Add</button>
                                        <button className="btn btn-sm btn-light">Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </Layout>
            </>
        )
    }
}
export default Add;