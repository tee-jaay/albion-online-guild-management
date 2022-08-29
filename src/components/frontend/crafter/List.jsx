import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ApiURLs from '../../../api/ApiURLs';
import Helpers from '../../../utility/Helpers';
import { CRAFTERS } from '../../routes/frontend';
import Loading from '../common/loading/Loading';
import Search from '../common/search/Search';

import './style.css';

const List = () => {
    const [crafters, setCrafters] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get("crafters")
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

    const craftersList = () => {
        return (
            crafters.map((crafter, index) => (
                <div className="col-lg-4" key={index}>
                    <div className="text-center card-box">
                        <div className="member-card pt-2 pb-2">
                            <div className="thumb-lg member-thumb mx-auto">
                                <img src={Helpers.setImageUrl(crafter.avatar)} className="rounded-circle img-thumbnail" alt={crafter.name} />
                            </div>
                            <div className="my-3">
                                {crafter.status == 0 ?
                                    <h4 className="text-secondary"><s>{crafter.ign}</s></h4>
                                    :
                                    <h4>{crafter.ign}</h4>
                                }
                            </div>

                            <Link to={CRAFTERS.LIST + "/" + crafter.ign} className="btn btn-primary mt-3 guild-bg-color waves-effect w-md waves-light">Details</Link>
                            <div className="mt-4">
                                <div className="row">
                                    <div className="col-4">
                                        <div className="mt-3">
                                            <h4>2563 {crafter.id} </h4>
                                            <p className="mb-0 text-muted">Wallets Balance</p>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="mt-3">
                                            <h4>6952</h4>
                                            <p className="mb-0 text-muted">Income amounts</p>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="mt-3">
                                            <h4>1125</h4>
                                            <p className="mb-0 text-muted">Total Transactions</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))

        );
    }
    return (
        <>
            <div className="content">
                <div className="container">
                    <div className="row mb-4">
                        <div className="col-12">
                            {/* <!-- Breadcrumb --> */}
                            <nav aria-label="breadcrumb" className="main-breadcrumb mt-4">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to="/" className="guild-color">
                                            Home
                                        </Link>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Crafters
                                    </li>
                                </ol>
                            </nav>
                            {/* <!-- /Breadcrumb --> */}
                            {/* Search */}
                            {isLoading ? '' : <Search />}
                            {/* Search */}
                        </div>
                        {/* <!-- end col --> */}
                    </div>
                    {/* <!-- end row --> */}
                    <div className="row">
                        {isLoading ? <Loading /> : craftersList()}
                    </div>
                </div>
                {/* <!-- container --> */}
            </div>
        </>
    )
}

export default List;