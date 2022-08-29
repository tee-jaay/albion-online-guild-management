import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ApiURLs from '../../../api/ApiURLs';
import { CRAFTERS } from '../../routes/frontend';
import SessionHelper from "../../../session-helper/SessionHelper";
import Loading from '../common/loading/Loading';


const Home = () => {

    const [siteInfo, setSiteInfo] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    var siteInfoData = '';
    useEffect(() => {
        if (!sessionStorage.getItem("siteInfo")) {
            axios.get(ApiURLs.SETTINGS)
                .then((res) => {
                    siteInfoData = JSON.stringify(res.data.data);
                    SessionHelper.setSiteInfo(siteInfoData);
                    setSiteInfo(JSON.parse(siteInfoData));
                    setTimeout(() => {
                        setIsLoading(false);
                    }, 500);
                })
                .catch((err) => {
                    console.error(err)
                });
        } else {
            setIsLoading(false);
        }
    }, [setSiteInfo]);

    if (!isLoading) {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <div className="oov-img">
                                <img src={SessionHelper.getSiteInfo() && SessionHelper.getSiteInfo().hero_img} alt="oov img" />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex flex-column align-items-end justify-content-center h-100">
                                <h1 className="">{SessionHelper.getSiteInfo() && SessionHelper.getSiteInfo().title}</h1>
                                <div>
                                    <Link to={CRAFTERS.LIST} className="btn btn-dark">
                                        Our Crafters
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    } else {
        return <Loading />
    }

}
export default Home;