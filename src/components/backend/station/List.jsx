import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ApiURLs from "../../../api/ApiURLs";
import { DASHBOARD } from "../../routes/backend";
import Layout from "../layout/Layout";
import Loader from "../loader/Loader";

const List = () => {
    const [stations, setStations] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get(ApiURLs.STATIONS)
            .then((response) => {
                setStations(response.data);
                setTimeout(() => {
                    setIsLoading(false);
                }, 900);
            })
            .catch((err) => {
                console.error(err);
            });
    }, [setStations]);


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
                                <h4 className="card-title m-0 d-flex justify-content-between align-items-center">Stations
                                    <span className="float-right"><Link to={DASHBOARD.STATIONS + "-add"} className="btn btn-primary btn-sm">add</Link></span>
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
                                                    Item
                                                </th>
                                                <th>
                                                    Location
                                                </th>
                                                <th>Map</th>
                                                <th>
                                                    Action
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {stations.map((station, index) => (
                                                <tr key={index}>
                                                    <td>
                                                        {station.id}
                                                    </td>
                                                    <td className="text-capitalize">
                                                        {station.item}
                                                    </td>
                                                    <td className="text-capitalize">{station.place}</td>
                                                    <td>
                                                        {/* <img src={ApiURLs.API_HOST + station.loc_img} alt="" className="rounded-0" /> */}
                                                        <img src={station.loc_img} alt="" className="rounded-0" />
                                                    </td>
                                                    <td>
                                                        <Link to={DASHBOARD.STATIONS + "/" + station.id} className="btn btn-success btn-sm">
                                                            View
                                                        </Link>
                                                        <Link to={DASHBOARD.STATIONS + "/" + station.id + "/edit"} className="btn btn-warning btn-sm mx-1">
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