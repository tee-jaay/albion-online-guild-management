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
    const [isLoading, setIsLoading] = useState(false);
    const [itemName, setItemName] = useState("");
    // const [tier, setTier] = useState("");
    // const [enchantment, setEenchantment] = useState("");
    // const [itemImageCode, setItemImageCode] = useState("");

    // const handleChange = (enc) => {
    //     setEenchantment(enc);
    //     if (enc != "0") {
    //         setItemImageCode(`${tier} ` + `${itemName}` + `@${enchantment}`)
    //     } else {
    //         setItemImageCode(`${tier} ` + `${itemName}`)
    //     }
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        let sendData = new FormData();
        sendData.append('name', itemName);
        // sendData.append('tier', tier);
        // sendData.append('enchantment', enchantment);
        // sendData.append('image_code', itemImageCode);

        axios.post(ApiURLs.ITEMS, sendData)
            .then((res) => {
                setTimeout(() => {
                    setIsLoading(false);
                    toast.success('Item added');
                    return res.data;
                }, 500);
                history.push(DASHBOARD.ITEMS);
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
        )
    } else {
        return (
            <>
                <Layout>
                    <div className="col-12 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Add Item</h4>
                                <form className="" onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="item_name">Item Name</label>
                                        <input
                                            onChange={(e) => setItemName(e.target.value)}
                                            class="form-control form-control-sm " type="text" name="item_name" id="item_name"
                                            placeholder="hellion jacket"
                                        />
                                    </div>

                                    {/* <div className="form-group">
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
                                    </div> */}
                                    {/* <div class="form-group">
                                        <label for="image_code">Image Code</label>
                                        <input type="text" name="image_code"
                                            onChange={(e) => setItemImageCode(`${tier} ` + `${itemName}` + `@${enchantment}`)}
                                            class="form-control form-control-sm" id="image_code"
                                            placeholder="T8_OFF_SHIELD or, master's bloodleter@1"
                                        />
                                    </div> */}
                                    {/* {itemImageCode &&
                                        <div className="form-group">
                                            <img className="img-thumbnail" src={ApiURLs.ALBION_ONLINE_ITEM + `${itemImageCode}`} alt="" />
                                        </div>
                                    } */}
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