import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import Layout from "../layout/Layout";
import Loader from "../loader/Loader";
import Overview from "./overview/Overview";

const Dashboard = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 600);
    }, setIsLoading);


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
                    <div className="row">
                        <div className="col-md-12">
                            <h2>Welcome to Dashboard</h2>
                        </div>
                    </div>
                    <Overview />
                </Layout>
                <ToastContainer />
            </>
        )
    }

}
export default Dashboard;