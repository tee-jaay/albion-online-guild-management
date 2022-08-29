import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ApiURLs from "../../../api/ApiURLs";
import { DASHBOARD } from "../../routes/backend";
import Layout from "../layout/Layout";
import Loader from "../loader/Loader";

const List = () => {
    const [chests, setChests] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get(ApiURLs.CHESTS)
            .then((response) => {
                setChests(response.data);
                setTimeout(() => {
                    setIsLoading(false);
                }, 900);
            })
            .catch((err) => {
                console.error(err);
            });
    }, [setChests]);


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
                    <div className="col-lg-12 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title m-0 d-flex justify-content-between align-items-center">Chests
                                    <span className="float-right"><Link to={DASHBOARD.CHESTS + "-add"} className="btn btn-primary btn-sm">add</Link></span>
                                </h4>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>
                                                    #
                                                </th>
                                                <th className="text-capitalize">
                                                    island
                                                </th>
                                                <th className="text-capitalize">
                                                    house
                                                </th>
                                                <th className="text-capitalize">
                                                    chest
                                                </th>
                                                <th className="text-capitalize">
                                                    crafter
                                                </th>
                                                <th className="text-capitalize">
                                                    Action
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {chests.map((chest, index) => (
                                                <tr key={index}>
                                                    <td>
                                                        {chest.id}
                                                    </td>
                                                    <td>
                                                        {chest.island_name}
                                                    </td>
                                                    <td>
                                                        {/* <img src={ApiURLs.API_HOST + chest.house_loc_img} alt="" className="rounded-0" /> */}
                                                        <img src={chest.house_loc_img} alt="" className="rounded-0" />
                                                    </td>
                                                    <td>
                                                        {/* <img src={ApiURLs.API_HOST + chest.chest_loc_img} alt="" className="rounded-0" /> */}
                                                        <img src={chest.chest_loc_img} alt="" className="rounded-0" />
                                                    </td>
                                                    <td>{chest.crafter}</td>
                                                    <td>
                                                        <Link to={DASHBOARD.CHESTS + "/" + chest.id} className="btn btn-success btn-sm">
                                                            View
                                                        </Link>
                                                        <Link to={DASHBOARD.CHESTS + "/" + chest.id + "/edit"} className="btn btn-warning btn-sm mx-1">
                                                            Edit
                                                        </Link>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </Layout>
                <ToastContainer />
            </>
        )
    }
}
export default List;