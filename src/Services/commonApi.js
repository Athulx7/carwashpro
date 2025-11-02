import axios from "axios";

export const commonAPI = async(httpreq,url,reqbody,reqheader) => {
    const reqConfig = {
        method : httpreq,
        url : url,
        data : reqbody,
        headers : reqheader ? reqheader : {'Content-Type' : 'application/json'}
    }
    return await axios(reqConfig).then((res) => {
        return res
    }).catch((err) => {
        return err
    })
}