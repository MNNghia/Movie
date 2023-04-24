import axios from "axios";
import queryString from 'query-string'

import apiConfig from './apiConfig'

const {stringify} = queryString

const axiosClient = axios.create({
    baseURL: apiConfig.baseUrl,
    headers: {
        'Content-Type': 'application/json'
    },

    //chuyển đổi những tham số trong parames và api_key thành chuỗi chuỗi query 
    // paramsSerializer: params => stringify({ ...params, api_key: apiConfig.apiKey})
    // paramsSerializer : (params) =>{
    //     serialize: ({...params, api_key: apiConfig.apiKey}),
    //     indexes: false,
    // }
})

axiosClient.interceptors.request.use( (config) => {
    config.params = {
        ...config.params,
        api_key: apiConfig.apiKey
    }

    config.paramsSerializer = (params) => stringify(params)
    
    return config
});


axiosClient.interceptors.response.use((response) => {
    console.log(response)
    if(response && response.data) {
        return response.data
    }

    return response
}, (error) => {
    console.log(error)
})

export default axiosClient



