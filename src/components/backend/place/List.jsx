import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ApiURLs from "../../../api/ApiURLs";
import { DASHBOARD } from "../../routes/backend";
import Layout from "../layout/Layout";
import Loader from "../loader/Loader";

const List = () => {
    const [places, setPlaces] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get(ApiURLs.PLACES)
            .then((response) => {
                setPlaces(response.data);
                setTimeout(() => {
                    setIsLoading(false);
                }, 900);
            })
            .catch((err) => {
                console.error(err);
            });
    }, [setPlaces]);

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
                                <h4 className="card-title m-0 d-flex justify-content-between align-items-center">Places
                                    <span className="float-right"><Link to={DASHBOARD.PLACES + "-add"} className="btn btn-primary btn-sm">add</Link></span>
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
                                                <th>
                                                    Name
                                                </th>
                                                <th>
                                                    Type
                                                </th>
                                                <th>
                                                    Action
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {places.map((place, index) => (
                                                <tr key={index}>
                                                    <td>
                                                        {place.id}
                                                    </td>
                                                    <td className="text-capitalize">
                                                        {place.name}
                                                    </td>
                                                    <td className="text-capitalize">
                                                        {place.type}
                                                    </td>
                                                    <td>
                                                        <Link to={DASHBOARD.PLACES + "/" + place.id} className="btn btn-success btn-sm">
                                                            View
                                                        </Link>
                                                        <Link to={DASHBOARD.PLACES + "/" + place.id + "/edit"} className="btn btn-warning btn-sm mx-1">
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
    };
}
export default List;