import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ApiURLs from "../../../api/ApiURLs";
import { DASHBOARD } from "../../routes/backend";
import Layout from "../layout/Layout";
import Loader from "../loader/Loader";

const List = () => {
    const [houses, setHouses] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get(ApiURLs.HOUSES)
            .then((response) => {
                setHouses(response.data);
                setTimeout(() => {
                    setIsLoading(false);
                }, 900);
            })
            .catch((err) => {
                console.error(err);
            });
    }, [setHouses]);


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
                                <h4 className="card-title m-0 d-flex justify-content-between align-items-center">Houses
                                    <span className="float-right"><Link to={DASHBOARD.HOUSES + "-add"} className="btn btn-primary btn-sm">add</Link></span>
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
                                                    place
                                                </th>
                                                <th className="text-capitalize">
                                                    name
                                                </th>
                                                <th className="text-capitalize">
                                                    location
                                                </th>
                                                <th className="text-capitalize">
                                                    action
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {houses.map((house, index) => (
                                                <tr key={index}>
                                                    <td>
                                                        {house.id}
                                                    </td>
                                                    <td>
                                                        {house.island_name}
                                                    </td>
                                                    <td>
                                                        {house.house_name}
                                                    </td>
                                                    <td>
                                                        <img src={house.house_loc} alt="" className="rounded-0" />
                                                    </td>
                                                    <td>
                                                        <Link to={DASHBOARD.HOUSES + "/" + house.id} className="btn btn-success btn-sm">
                                                            View
                                                        </Link>
                                                        <Link to={DASHBOARD.HOUSES + "/" + house.id + "/edit"} className="btn btn-warning btn-sm mx-1">
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