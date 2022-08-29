import ApiURLs from "../api/ApiURLs";

class Helpers{

    static setImageUrl(img_src){
        var siteEnv = process.env.REACT_APP_API_ROOT_PRODUCTION;
        if(siteEnv !== "production"){
            return img_src;            
        }else{
            return ApiURLs.API_HOST + img_src;
        }
    }

}
export default Helpers;