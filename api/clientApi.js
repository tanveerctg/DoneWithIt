import { create } from 'apisauce'

import cache from "../utility/cache"

// define the api
const clientApi = create({
    baseURL: 'http://192.168.0.105:9000/api'
})
const get=clientApi.get;

clientApi.get=async (url,params,urlConfig)=>{
    const response=await get(url,params,urlConfig)
    if(response.ok){
        cache.store(url,response.data)
        return response
    }

    const data=await cache.get(url)
    
    return data ? {ok:true,data} :response
}
export default clientApi;

 