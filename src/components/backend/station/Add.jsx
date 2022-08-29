import axios from 'axios';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import ApiURLs from '../../../api/ApiURLs';
import { DASHBOARD } from '../../routes/backend';
import Layout from '../layout/Layout'
import Loader from '../loader/Loader';

const Add = () => {
    const history = useHistory();
    const [itemId, setItemId] = useState("");
    const [placeId, setPlaceId] = useState("");
    const [file, setFile] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [items, setItems] = useState([]);
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        axios.get(ApiURLs.PLACES_DATA)
            .then((res) => {
                setItems(res.data['items']);
                setPlaces(res.data['places']);
                setTimeout(() => {
                    setIsLoading(false);
                }, 900);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        let formData = new FormData();
        formData.append("item_id", itemId);
        formData.append("place_id", placeId);
        formData.append("file", file);

        axios.post(ApiURLs.STATIONS, formData)
            .then((res) => {
                setTimeout(() => {
                    setIsLoading(false);
                    toast.success('Crafting station added');
                }, 300);
                history.push(DASHBOARD.STATIONS);
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
                                    <h4 className="card-title">Add Crafting Station</h4>
                                    <form className="forms-sample" onSubmit={handleSubmit}>

                                        <div className="form-group">
                                            <label htmlFor="place">Place</label>
                                            <select
                                                onChange={(e) => setPlaceId(e.target.value)}
                                                name="place"
                                                id="place"
                                                className="form-control form-control-sm"
                                            >
                                                {places.map((place, i) => (
                                                    <option value={place.id} key={i}>{place.name} ( {place.type} )</option>
                                                ))}
                                            </select>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="item">Item</label>
                                            <select
                                                onChange={(e) => setItemId(e.target.value)}
                                                name="item"
                                                id="item"
                                                className="form-control form-control-sm"
                                            >
                                                {items.map((item, i) => (
                                                    <option value={item.id} key={i}>{item.name}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="file">Image</label>
                                            <input
                                                onChange={(e) => setFile(e.target.files[0])}
                                                type="file"
                                                name="file"
                                                id="file"
                                                class="form-control-file form-control-sm "
                                            />
                                        </div>
                                        <button type="submit" className="btn btn-primary btn-sm mr-2">Add</button>
                                        <button className="btn btn-light btn-sm">Cancel</button>
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