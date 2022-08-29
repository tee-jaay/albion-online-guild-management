import axios from 'axios';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../layout/Layout";
import Loader from "../loader/Loader";
import ApiURLs from '../../../api/ApiURLs';
import { DASHBOARD } from '../../routes/backend';
import { ToastContainer } from 'react-toastify';


const Detail = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [setting, setSetting] = useState([]);

    useEffect(() => {
        axios.get(ApiURLs.SETTINGS)
            .then((response) => {
                setSetting(response.data);
                setTimeout(() => {
                    setIsLoading(false);
                }, 900);
            })
            .catch((err) => {
                console.error(err);
            });
    }, [setSetting]);

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
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title m-0 d-flex justify-content-between align-items-center">
                                    <span className="float-left">
                                        Guild Info
                                    </span>
                                    <span className="float-right">
                                        <Link to={DASHBOARD.SETTINGS + "-edit"} className="btn btn-warning btn-sm">
                                            Edit
                                        </Link>
                                    </span>
                                </h4>
                            </div>
                            <div className="card-body">
                                <div className="">
                                    <div className="mb-3">
                                        <strong>Name: </strong> <span className="text-capitalize">{setting.data && setting.data.title}</span>
                                    </div>
                                    <div className="mb-3">
                                        <strong>Slogan: </strong><span className="">{setting.data && setting.data.subtitle}</span>
                                    </div>
                                    <div className="mb-3">
                                        <strong>Alliance: </strong><span className="text-capitalize">{setting.data && setting.data.alliance}</span>
                                    </div>
                                    <div className="mb-3">
                                        <strong>Tag: </strong><span className="">{setting.data && setting.data.tag}</span>
                                    </div>
                                    <div className="mb-3">
                                        <strong>Description: </strong><span className="text-capitalize">{setting.data && setting.data.description}</span>
                                    </div>
                                    <div className="mb-3">
                                        <strong>Logo: </strong><div>
                                            <img src={setting.data && setting.data.logo} alt="" className="pt-2" style={{ maxWidth: '200px', maxHeight: '180px' }} />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <strong>Hero: </strong>
                                        <div>
                                            <img src={setting.data && setting.data.hero_img} alt="" className="pt-2" style={{ maxWidth: '400px', maxHeight: '280px' }} />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <strong>Video: </strong>
                                        <div className="pt-2">
                                            <iframe
                                                width="560"
                                                height="315"
                                                src={setting.data && "https://www.youtube.com/embed/" + setting.data.youtube}
                                                title="YouTube video player"
                                                frameborder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowfullscreen>
                                            </iframe>
                                        </div>
                                    </div >
                                </div >
                            </div >
                        </div >
                    </div >
                </Layout >
                <ToastContainer />
            </>
        )
    }

}
export default Detail;