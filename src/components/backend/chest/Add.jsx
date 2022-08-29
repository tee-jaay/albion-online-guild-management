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
    const [islands, setIslands] = useState([]);
    const [crafters, setCrafters] = useState([]);
    const [houses, setHouses] = useState([]);

    const [houseLocImg, setHouseLocImg] = useState("");
    const [chestLocImg, setChestLocImg] = useState("");
    const [island, setIsland] = useState("");
    const [house, setHouse] = useState("");
    const [crafter, setCrafter] = useState("");
    const [chestNo, setChestNo] = useState("");


    useEffect(() => {
        axios.get(ApiURLs.CHESTS_DATA)
            .then((res) => {
                setCrafters(res.data['crafters']);
                setIslands(res.data['islands']);
                setHouses(res.data['houses']);
            })
            .catch((err) => {
                console.error(err);
            })
    }, [])

    const chests = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        // var beforeHash = house.match('^.*(?=(\#))');
        // var beforeHash = house.match('[\s\S]*?(?=#)');
        var beforeHash = house.match('.+?(?=#)');
        var afterHash = house.match('(?<=\#).*');
        // alert(beforeHash);
        // alert(afterHash);

        let sendData = new FormData();
        // sendData.append('house_loc_img', houseLocImg);
        sendData.append('house_id', beforeHash);
        sendData.append('island_id', afterHash);
        sendData.append('chest_loc_img', chestLocImg);
        sendData.append('crafter', crafter);
        // sendData.append('island', island);
        sendData.append('chest_no', chestNo);

        axios.post(ApiURLs.CHESTS, sendData)
            .then((res) => {
                setTimeout(() => {
                    setIsLoading(false);
                    toast.success('Chest added');
                }, 500);
                history.push(DASHBOARD.CHESTS);
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
                                <h4 className="card-title">Add Chest</h4>
                                <form className="forms-sample" onSubmit={handleSubmit}>

                                    <div className="form-group">
                                        <label htmlFor="house">House</label>
                                        <select
                                            onChange={(e) => setHouse(e.target.value)}
                                            id="house"
                                            class="form-control form-control-sm"
                                        >
                                            <option>Which house?</option>
                                            {houses.map((house, i) => (
                                                <option key={i} value={house.id + '#' + house.island_id}>
                                                    {house.house_name} @ {house.island_name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* <div className="form-group">
                                        <label htmlFor="island">Island</label>
                                        <select
                                            onChange={(e) => setIsland(e.target.value)}
                                            class="form-control form-control-sm" id="island">
                                            <option>Which Island?</option>
                                            {islands.map((island, index) => (
                                                <option key={index} value={island.id}>{island.name}</option>
                                            ))}
                                        </select>
                                    </div> */}
                                    {/* <div className="form-group">
                                        <label htmlFor="house_loc_img">House Location</label>
                                        <input
                                            onChange={(e) => setHouseLocImg(e.target.files[0])}
                                            class="form-control-file form-control-sm " type="file" name="house_loc_img" id="house_loc_img" />
                                    </div> */}
                                    <div class="form-group">
                                        <label for="crafter">Crafter</label>
                                        <select
                                            onChange={(e) => setCrafter(e.target.value)}
                                            class="form-control form-control-sm" id="crafter">
                                            <option>Select a Crafter</option>
                                            {crafters.map((crafter, index) => (
                                                <option key={index} value={crafter.id}>{crafter.ign}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="chest_loc_img">Chest Location</label>
                                        <input
                                            onChange={(e) => setChestLocImg(e.target.files[0])}
                                            class="form-control-file form-control-sm " type="file" name="chest_loc_img" id="chest_loc_img" />
                                    </div>
                                    <div class="form-group">
                                        <label for="chest_no">Chest</label>
                                        <select
                                            onChange={(e) => setChestNo(e.target.value)}
                                            class="form-control form-control-sm" id="chest_no">
                                            <option>Select the Chest</option>
                                            {chests.map((chest, index) => (
                                                <option key={index} value={chest}>{chest}</option>
                                            ))}
                                        </select>
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