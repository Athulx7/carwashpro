import { commonAPI } from "./commonApi";
import { BASE_URL } from "./baseURL";

// user 
export const searching = async(loc,date,time)=>{
    return await commonAPI("GET",`${BASE_URL}/user/search/${loc}/${date}/${time}`,'','')
}