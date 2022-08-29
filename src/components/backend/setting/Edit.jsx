import axios from 'axios';
import { useState, useEffect } from "react";
import Layout from "../layout/Layout";
import Loader from "../loader/Loader";
import ApiURLs from '../../../api/ApiURLs';
import { useHistory } from 'react-router';
import { DASHBOARD } from '../../routes/backend';
import { toast } from 'react-toastify';

const Edit = () => {
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false);
    const [title, setTitle] = useState("");
    const [subTitle, setSubTitle] = useState("");
    const [alliance, setAlliance] = useState("");
    const [tag, setTag] = useState("");
    const [description, setDescription] = useState("");
    const [logo, setLogo] = useState("");
    const [heroImg, setHeroImg] = useState("");
    const [youtube, setYoutube] = useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        let sendSettingData = new FormData();

        sendSettingData.append("title", title);
        sendSettingData.append("subtitle", subTitle);
        sendSettingData.append("alliance", alliance);
        sendSettingData.append("description", description);
        sendSettingData.append("tag", tag);
        sendSettingData.append("logo", logo);
        sendSettingData.append("hero_img", heroImg);
        sendSettingData.append("youtube", youtube.substring(youtube.length - 11));

        axios.post(ApiURLs.SETTINGS, sendSettingData)
            .then((res) => {
                setTimeout(() => {
                    console.log(res.data);
                    setIsLoading(false);
                    toast.info('Settings updated');
                    history.push(DASHBOARD.SETTINGS);
                }, 600);
            })
            .catch((err) => {
                console.error(err);
            })

    }

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
                    <div className="col-md-12 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Edit Guild Info</h4>
                                <form onSubmit={handleFormSubmit} className="forms-sample">
                                    <div className="form-group row">
                                        <label for="guild_name" className="col-sm-3 col-form-label">Name</label>
                                        <div className="col-sm-9">
                                            <input
                                                onChange={(e) => setTitle(e.target.value)}
                                                type="text" className="form-control form-control-sm" id="guild_name" placeholder="Guild name" />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label for="description" className="col-sm-3 col-form-label">Description</label>
                                        <div className="col-sm-9">
                                            <textarea
                                                onChange={(e) => setDescription(e.target.value)}
                                                name="description" id="description" className="form-control form-control-sm" cols="30" rows="4" placeholder="Guild's description"></textarea>
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label for="slogan" className="col-sm-3 col-form-label">Slogan</label>
                                        <div className="col-sm-9">
                                            <input
                                                onChange={(e) => setSubTitle(e.target.value)}
                                                type="text" className="form-control form-control-sm" id="slogan" placeholder="Guild's slogan" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label for="alliance" className="col-sm-3 col-form-label">Alliance</label>
                                        <div className="col-sm-9">
                                            <input
                                                onChange={(e) => setAlliance(e.target.value)}
                                                type="text" className="form-control form-control-sm" id="alliance" placeholder="Alliance name" />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label for="tag" className="col-sm-3 col-form-label">TAG</label>
                                        <div className="col-sm-9">
                                            <input
                                                onChange={(e) => setTag(e.target.value)}
                                                type="text" className="form-control form-control-sm" id="tag" placeholder="Alliance's tag" />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label for="logo" className="col-sm-3 col-form-label">Logo</label>
                                        <div className="col-sm-9">
                                            <input
                                                onChange={(e) => setLogo(e.target.files[0])}
                                                type="file" className="form-control-file form-control-sm" id="logo" />
                                            <img src="https://i.picsum.photos/id/815/500/300.jpg?hmac=BIta6J-hw-SVj1jwLy_x6NyEo3aP5xbvQY2sC1TIYLs" alt="" className="py-1" style={{ maxHeight: '180px' }} />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label for="hero_img" className="col-sm-3 col-form-label">Hero Image</label>
                                        <div className="col-sm-9">
                                            <input
                                                onChange={(e) => setHeroImg(e.target.files[0])}
                                                type="file" className="form-control-file form-control-sm" id="hero_img" />
                                            <img src="https://i.picsum.photos/id/992/600/400.jpg?hmac=-AnovhxUMMFW9SORVlOaSyBrkHWlEYxrLLoZT-d4obo" alt="" className="py-1" style={{ maxHeight: '360px' }} />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label for="youtube_video" className="col-sm-3 col-form-label">Video</label>
                                        <div className="col-sm-9">
                                            <input
                                                onChange={(e) => setYoutube(e.target.value)}
                                                type="text" className="form-control form-control-sm" id="youtube_video" placeholder="Youtube video URL" />
                                        </div>
                                    </div>

                                    <button type="submit" className="btn btn-sm btn-success mr-2">Save</button>
                                    <button className="btn btn-sm btn-light">Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </Layout>
            </>
        );
    }

}
export default Edit;