import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ApiURLs from "../../../api/ApiURLs";
import { DASHBOARD } from "../../routes/backend";
import Layout from "../layout/Layout";
import Loader from "../loader/Loader";

const List = () => {
    const [islands, setIslands] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get(ApiURLs.ISLANDS)
            .then((response) => {
                setIslands(response.data);
                setTimeout(() => {
                    setIsLoading(false);
                }, 900);
            })
            .catch((err) => {
                console.error(err);
            });
    }, [setIslands]);

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
                                <h4 className="card-title m-0 d-flex justify-content-between align-items-center">Islands
                                    <span className="float-right"><Link to={DASHBOARD.ISLANDS + "-add"} className="btn btn-primary btn-sm">add</Link></span>
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
                                                    Action
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {islands.map((island, index) => (
                                                <tr key={index}>
                                                    <td>
                                                        {island.id}
                                                    </td>
                                                    <td>
                                                        {island.name}
                                                    </td>
                                                    <td>
                                                        <Link to={DASHBOARD.ISLANDS + "/" + island.id} className="btn btn-success btn-sm">
                                                            View
                                                        </Link>
                                                        <Link to={DASHBOARD.ISLANDS + "/" + island.id + "/edit"} className="btn btn-warning btn-sm mx-1">
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