import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ApiURLs from '../../../api/ApiURLs';
import Layout from '../layout/Layout'
import Loader from '../loader/Loader';

const CrafterDetail = () => {
    const { ign } = useParams();
    const [crafter, setCrafter] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get(ApiURLs.CRAFTERS_LIST + "/" + ign)
            .then((response) => {
                setCrafter(response.data);
                setTimeout(() => {
                    setIsLoading(false);
                }, 900);
            })
            .catch((err) => {
                console.error(err);
            });
    }, [setCrafter]);

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
                            <div className="card-body">
                                <h4 className="card-title">
                                    {crafter && crafter['user'].ign}
                                    <span className="float-right">
                                        {crafter['user'].status == 1 ? <button className="btn btn-danger btn-sm">
                                            Ban
                                        </button> : <button className="btn btn-info btn-sm">
                                            Unban
                                        </button>}
                                    </span>
                                </h4>
                                <p className="card-description">
                                    {crafter && crafter['user'].name}
                                </p>
                                <div className="template-demo">
                                    <h1>
                                        h1. Heading
                                        <small className="text-muted">
                                            Secondary text
                                        </small>
                                    </h1>
                                    <h2>
                                        h2. Heading
                                        <small className="text-muted">
                                            Secondary text
                                        </small>
                                    </h2>
                                    <h3>
                                        h3. Heading
                                        <small className="text-muted">
                                            Secondary text
                                        </small>
                                    </h3>
                                    <h4>
                                        h4. Heading
                                        <small className="text-muted">
                                            Secondary text
                                        </small>
                                    </h4>
                                    <h5>
                                        h5. Heading
                                        <small className="text-muted">
                                            Secondary text
                                        </small>
                                    </h5>
                                    <h6>
                                        h6. Heading
                                        <small className="text-muted">
                                            Secondary text
                                        </small>
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </Layout>
            </>
        )
    }
}
export default CrafterDetail;