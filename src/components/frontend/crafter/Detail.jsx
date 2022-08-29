import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ApiURLs from "../../../api/ApiURLs";
import Helpers from "../../../utility/Helpers";
import { CRAFTERS } from "../../routes/frontend";
import Loading from "../common/loading/Loading";
import TextLoading from "../common/loading/TextLoading";




const Detail = () => {

    const { ign } = useParams();
    const [crafter, setCrafter] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get("crafters/" + ign)
            .then((response) => {
                setCrafter(response.data);
                console.log("response", response.data);
                setTimeout(() => {
                    setIsLoading(false);
                }, 900);
            })
            .catch((err) => {
                console.error(err);
            });
    }, [setCrafter]);

    const taskItemImage = (enc) => {
        if (enc != 0) {
            return (
                '@' + enc + '.png'
            );
        } else {
            return (
                '.png'
            );
        }

    }

    const crafterDetails = () => {
        return (
            <>
                <div className="col-md-4 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex flex-column align-items-center text-center">
                                {/* <img src={ApiURLs.API_HOST + crafter['user'].avatar} alt="" className="rounded-circle" width="235" /> */}
                                {/* <img src={crafter['user'].avatar} alt="" className="rounded-circle" width="235" /> */}
                                <img src={Helpers.setImageUrl(crafter['user'].avatar)} alt="" className="rounded-circle" width="235" />
                                <div className="mt-3">
                                    <h4>{crafter['user'].ign}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Step 1 */}
                <div className="col-md-8">
                    <div className="card mb-3">
                        <div className="card-header">
                            <div>
                                <strong className="text-danger">STEP 1</strong>: WHAT YOU ARE CRAFTING AND WHERE
                            </div>
                        </div>
                        <div className="card-body">
                            <table className="table table-striped table-borderless ">
                                <thead>
                                    <tr>
                                        <th>Item</th>
                                        <th>Tier</th>
                                        <th>Enchantment</th>
                                        <th>Quantity</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {crafter['tasks'].map((task) =>
                                        <tr key={task.id}>
                                            <td>
                                                <Link to="/" className="btn btn-sm btn-outline-dark text-capitalize" >
                                                    <img
                                                        src={ApiURLs.ALBION_ONLINE_ITEM + task.tier + ' ' + task.item + taskItemImage(task.enchantment)}
                                                        alt={task.item} width="16px" className="mr-1" />
                                                    {task.item}
                                                </Link>
                                            </td>
                                            <td><strong>{task.tier}</strong></td>
                                            <td className="text-center text-secondary">{task.enchantment}</td>
                                            {/* <td>{task.island}</td> */}
                                            <td className="text-center"><strong>{task.quantity}</strong></td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                {/* Step 1 */}
                <div className="col-12">
                    {/* Step 2 */}
                    <div className="card">
                        <div className="card-header">
                            <div>
                                <strong className="text-danger">STEP 2</strong>: WHERE YOUR CHEST IS LOCATED
                            </div>
                        </div>
                        {crafter['chests'].map((chest, i) => (
                            <>
                                <div className="card-body" key={i}>
                                    <div className="row">
                                        <div className="col-12">
                                            <h4>{chest.island}</h4>
                                        </div>
                                        <div className="col-5">
                                            {/* <img className="img-thumbnail" src={ApiURLs.API_HOST + chest.house_loc_img} alt="" /> */}
                                            <img className="img-thumbnail" src={chest.house_loc_img} alt="" />
                                        </div>
                                        <div className="col-5">
                                            {/* <img className="img-thumbnail" src={ApiURLs.API_HOST + chest.chest_loc_img} alt="" /> */}
                                            <img className="img-thumbnail" src={chest.chest_loc_img} alt="" />
                                        </div>
                                        <div className="col-2">
                                            <div className="d-flex badge badge-dark text-light w-100 h-50 align-items-center justify-content-center">
                                                <h3># {chest.chest_no}</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))}
                    </div>
                    {/* Step 2 */}
                </div>

                <div className="col-12">
                    {/* Step 3 */}
                    <div className="card mt-3">
                        <div className="card-header">
                            <div>
                                <strong className="text-danger">STEP 3</strong>: WHERE YOU WILL CRAFT YOUR ITEMS
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                {crafter['shops'].map((shop, i) => (
                                    shop.map((station, index) => (
                                        <>
                                            <div className="col-12">
                                                <h5 className="text-capitalize">{station.item} <span className="float-right">{station.place}</span></h5>
                                            </div>
                                            <div className="d-flex justify-content-center mb-5" key={index}>
                                                <div className="card">
                                                    {/* <img className="img-thumbnail" src={ApiURLs.API_HOST + station.loc_img} alt={station.item} /> */}
                                                    <img className="img-thumbnail" src={station.loc_img} alt={station.item} />
                                                </div>
                                            </div>
                                        </>
                                    ))
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* Step 3 */}
                </div>
            </>
        );
    }

    return (
        <>
            <div className="container">
                <div className="main-body">
                    {/* <!-- Breadcrumb --> */}
                    <nav aria-label="breadcrumb" className="main-breadcrumb mt-4">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link to="/" className="guild-color">
                                    Home
                                </Link>
                            </li>
                            <li className="breadcrumb-item">
                                <Link to={CRAFTERS.LIST} className="guild-color">
                                    Crafters
                                </Link>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">
                                {isLoading ? <TextLoading /> : crafter['user'].ign}
                            </li>
                        </ol>
                    </nav>
                    {/* <!-- /Breadcrumb --> */}
                    <div className="row">
                        {isLoading ? <Loading /> : crafterDetails()}
                    </div>
                </div>
            </div>
        </>
    );
}
export default Detail;