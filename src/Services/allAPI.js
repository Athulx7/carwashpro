import { commonAPI } from "./commonApi";
import { BASE_URL } from "./baseURL";

// user 
export const searching = async(loc,date,time)=>{
    return await commonAPI("GET",`${BASE_URL}/user/search/${loc}/${date}/${time}`,'','')
}

export const getMoreCenterAPI = async()=>{
    return await commonAPI("GET",`${BASE_URL}/user/getMoreCenter`,'','')
}

export const getSelectedCenterAPI = async(centerID)=>{
    return await commonAPI("GET",`${BASE_URL}/user/seleecetdCenter/${centerID}`,'','')
}
