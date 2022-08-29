import axios from 'axios';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { DASHBOARD } from '../../routes/backend';
import ApiURLs from '../../../api/ApiURLs';
import Layout from '../layout/Layout'
import Loader from '../loader/Loader';
import { toast } from 'react-toastify';


const Add = () => {
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(true);
    const [crafters, setCrafters] = useState([]);
    const [items, setItems] = useState([]);
    const [crafterId, setCrafterId] = useState("");
    const [itemId, setItemId] = useState("");
    const [quantity, setQuantity] = useState("");
    const [tier, setTier] = useState("");
    const [enchantment, setEenchantment] = useState("");

    useEffect(() => {
        axios.get(ApiURLs.TASKS_DATA)
            .then((res) => {
                setCrafters(res.data['crafters']);
                setItems(res.data['items']);
                setTimeout(() => {
                    setIsLoading(false);
                }, 500);
            })
            .catch((err) => {
                console.error(err);
            })
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        let sendData = new FormData();
        sendData.append('user_id', crafterId);
        sendData.append('item', itemId);
        sendData.append('quantity', quantity);
        sendData.append('tier', tier);
        sendData.append('enchantment', enchantment);

        axios.post(ApiURLs.TASKS, sendData)
            .then((res) => {
                setTimeout(() => {
                    setIsLoading(false);
                    toast.success('Task added');
                    return res.data;
                }, 500);
                history.push(DASHBOARD.TASKS);
            })
            .catch((err) => {
                console.error(err);
                setTimeout(() => {
                    setIsLoading(false);
                    toast.error('Server error');
                }, 500);
            });
    }
    if (isLoading) {
        return (
            <Layout>
                <Loader />
            </Layout>
        );
    } else {
        return (
            <>
                <Layout>
                    <div className="col-12 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title m-0">Add a Task</h4>
                            </div>
                            <div className="card-body">
                                <form className="forms-sample" onSubmit={handleSubmit}>

                                    <div className="form-group">
                                        <label htmlFor="crafter">Crafter</label>
                                        <select
                                            onChange={(e) => setCrafterId(e.target.value)}
                                            name="crafter" id="crafter" className="form-control form-control-sm">
                                            <option>Select a Crafter</option>
                                            {crafters && crafters.map((crafter, i) => (
                                                <option value={crafter.id} key={i}>{crafter.ign}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="item">Item</label>
                                        <select
                                            onChange={(e) => setItemId(e.target.value)}
                                            name="item" id="item" className="form-control form-control-sm">
                                            <option value="">Choose an Item</option>
                                            {items && items.map((item, i) => (
                                                <option value={item.id} key={i} className="text-capitalize">{item.name}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="tier">Tier</label>
                                        <select
                                            onChange={(e) => setTier(e.target.value)}
                                            name="tier" id="tier" className="form-control form-control-sm">
                                            <option value="">Choose Tier</option>
                                            <option value="adept's">4 - Adept's</option>
                                            <option value="expert's">5 - Expert's</option>
                                            <option value="master's">6 - Master's</option>
                                            <option value="grandmaster's">7 - Grandmaster's</option>
                                            <option value="elder's">8 - Elder's</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="enchantment">Enchantment</label>
                                        <select
                                            onChange={(e) => setEenchantment(e.target.value)}
                                            name="enchantment" id="enchantment" class="form-control form-control-sm">
                                            <option selected="true" value="0">0</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="quantity">Quantity</label>
                                        <input
                                            onChange={(e) => setQuantity(e.target.value)}
                                            placeholder="15"
                                            type="number" name="quantity" id="quantity" className="form-control form-control-sm" min="0" max="600" />
                                    </div>

                                    <button type="submit" className="btn btn-sm btn-primary mr-2">Add</button>
                                    <button className="btn btn-sm btn-light">Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </Layout>
            </>
        )
    }
}
export default Add;