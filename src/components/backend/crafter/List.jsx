import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ApiURLs from "../../../api/ApiURLs";
import Helpers from "../../../utility/Helpers";
import { DASHBOARD } from "../../routes/backend";
import Layout from "../layout/Layout";
import Loader from "../loader/Loader";

const List = () => {
    const [crafters, setCrafters] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get(ApiURLs.CRAFTERS)
            .then((response) => {
                setCrafters(response.data.data);
                setTimeout(() => {
                    setIsLoading(false);
                }, 900);
            })
            .catch((err) => {
                console.error(err);
            });
    }, [setCrafters]);

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
                    <div className="col-lg-12 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title m-0 d-flex justify-content-between align-items-center">All Crafters
                                    <span className="float-right"><Link to={DASHBOARD.CRAFTERS + "-add"} className="btn btn-primary btn-sm">add</Link></span>
                                </h4>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th className="text-capitalize">
                                                    crafter
                                                </th>
                                                <th className="text-uppercase">
                                                    ign
                                                </th>
                                                {/* <th>
                                                Progress
                                                </th> */}
                                                {/* <th className="text-capitalize">
                                                    Craft Fame
                                                </th>
                                                <th className="text-capitalize">
                                                    Amount
                                                </th> */}
                                                <th className="text-capitalize">
                                                    Role
                                                </th>
                                                <th className="text-capitalize">
                                                    Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {crafters.map((crafter, index) => (
                                                <tr key={index}>
                                                    <td>{crafter.id}</td>
                                                    <td className="py-1">
                                                        {/* <img src={ApiURLs.API_HOST + "/" + crafter.avatar} alt={crafter.name} /> */}
                                                        {/* <img src={crafter.avatar} alt={crafter.name} /> */}
                                                        <img src={Helpers.setImageUrl(crafter.avatar)} alt={crafter.name} />
                                                    </td>
                                                    <td>
                                                        {crafter.status == 1 ? crafter.ign : <del className="text-secondary">{crafter.ign}</del>}
                                                    </td>
                                                    {/* <td>
                                                        <div className="progress">
                                                            <div className="progress-bar bg-success" role="progressbar" style={{ width: "25%" }} ariaValuenow="25" ariaValuemin="0" ariaValuemax="100"></div>
                                                        </div>
                                                    </td> */}
                                                    {/* <td>34567</td>
                                                    <td>
                                                        432
                                                    </td> */}
                                                    <td>
                                                        {crafter.role == 0 ? 'crafter' : 'officer'}
                                                    </td>
                                                    <td>
                                                        <Link to={DASHBOARD.CRAFTERS + "/" + crafter.ign} className="btn btn-success btn-sm">
                                                            View
                                                        </Link>
                                                        <Link to={DASHBOARD.CRAFTERS + "/" + crafter.ign + "/edit"} className="btn btn-warning btn-sm mx-1">
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