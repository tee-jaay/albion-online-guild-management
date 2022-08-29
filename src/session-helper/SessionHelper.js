class SessionHelper{
    static setSiteInfo(jsonData) {
        sessionStorage.setItem("siteInfo", jsonData);
    }
    static getSiteInfo(){
        return JSON.parse(sessionStorage.getItem("siteInfo"));
    }

}
export default SessionHelper;