import { Link } from 'react-router-dom';
import FrontURLs from '../../../../routes/frontend';
import { useEffect } from 'react';
import ApiURLs from '../../../../../api/ApiURLs';
import { useState } from 'react';
import axios from 'axios';
import SessionHelper from '../../../../../session-helper/SessionHelper';

const navbarToggler = () => {
    document.body.classList.toggle("sidebar-icon-only");
}

const Brand = () => {

    const [siteInfo, setSiteInfo] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    var siteInfoData = '';
    useEffect(() => {
        if (!sessionStorage.getItem("siteInfo")) {
            axios.get(ApiURLs.SETTINGS)
                .then((res) => {
                    siteInfoData = JSON.stringify(res.data.data);
                    SessionHelper.setSiteInfo(siteInfoData);
                    setSiteInfo(JSON.parse(siteInfoData));
                    setTimeout(() => {
                        setIsLoading(false);
                    }, 500);
                })
                .catch((err) => {
                    console.error(err)
                });
        } else {
            setIsLoading(false);
        }
    }, [setSiteInfo]);

    if (isLoading) {
        return '';
    } else {
        return (
            <>
                <div className="navbar-brand-wrapper d-flex justify-content-center">
                    <div className="navbar-brand-inner-wrapper d-flex justify-content-between align-items-center w-100">
                        <Link className="navbar-brand brand-logo" to={FrontURLs.APP_HOME} target="_blank">
                            <img src={SessionHelper.getSiteInfo() && SessionHelper.getSiteInfo().logo} alt={SessionHelper.getSiteInfo() && SessionHelper.getSiteInfo().title} />
                        </Link>
                        <Link className="navbar-brand brand-logo-mini" to={FrontURLs.APP_HOME} target="_blank">
                            <img src={SessionHelper.getSiteInfo() && SessionHelper.getSiteInfo().logo} alt={SessionHelper.getSiteInfo() && SessionHelper.getSiteInfo().title} />
                        </Link>
                        <button onClick={navbarToggler} className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
                            <span className="mdi mdi-sort-variant"></span>
                        </button>
                    </div>
                </div>
            </>
        )
    }
}
export default Brand;