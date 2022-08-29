import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ApiURLs from "../../../api/ApiURLs";
import { DASHBOARD } from "../../routes/backend";
import Layout from "../layout/Layout";
import Loader from "../loader/Loader";

const List = () => {
    const [tasks, setTasks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get(ApiURLs.TASKS)
            .then((res) => {
                setTimeout(() => {
                    setIsLoading(false);
                    setTasks(res.data['tasks']);
                }, 1500);
            })
            .catch((err) => {
                console.error(err);
                setIsLoading(false);
            });
    }, [setTasks]);

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
                                <h4 className="card-title m-0 d-flex justify-content-between align-items-center">Tasks
                                    <span className="float-right"><Link to={DASHBOARD.TASKS + "-add"} className="btn btn-primary btn-sm">add</Link></span>
                                </h4>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th className="text-capitalize">
                                                    ID
                                                </th>
                                                <th className="text-capitalize">
                                                    item
                                                </th>
                                                <th className="text-capitalize">
                                                    tier
                                                </th>
                                                <th className="text-capitalize">
                                                    *
                                                </th>
                                                <th className="text-capitalize">quantity</th>
                                                <th className="text-capitalize">
                                                    crafter
                                                </th>
                                                <th className="text-capitalize">
                                                    Action
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {tasks.map((task, i) => (
                                                <tr key={i}>
                                                    <td>
                                                        {task.id}
                                                    </td>
                                                    <td className="text-capitalize">
                                                        {task.item}
                                                    </td>
                                                    <td className="text-capitalize">
                                                        {task.tier}
                                                    </td>
                                                    <td className="text-capitalize">
                                                        {task.enchantment}
                                                    </td>
                                                    <td className="text-strong">
                                                        {task.quantity}
                                                    </td>
                                                    <td>
                                                        {task.crafter}
                                                    </td>
                                                    <td>
                                                        <Link to={DASHBOARD.TASKS + "/" + task.id} className="btn btn-success btn-sm">
                                                            View
                                                        </Link>
                                                        <Link to={DASHBOARD.TASKS + "/" + task.id + "/edit"} className="btn btn-warning btn-sm mx-1">
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