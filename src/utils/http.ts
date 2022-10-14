import axios,{type AxiosRequestConfig} from 'axios';

axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.timeout = 3000;

axios.interceptors.request.use(
    (config: AxiosRequestConfig | any)=>{
        config.params = {
            ...config.params,
            t:Date.now()
        }
        return config
    },
    function(error){
        return Promise.reject(error)
    }
)

//响应拦截器
axios.interceptors.response.use(
    (response) =>{
        return response;
    },
    function(error){
        return Promise.reject(error)
    }
)

interface Http{
    get<T>(url:string,params?:unknown):Promise<T>;
    post<T>(url:string,params?:unknown):Promise<T>
}

const http:Http = {
    get(url, params) {
        return new Promise((resolve, reject)=>{
            axios
            .get(url,{params})
            .then((res)=>{
                resolve(res.data)
            })
            .catch((err)=>{
                reject(err)
            })
        })
    },
    post(url, params) {
        return new Promise((resolve,reject)=>{
            axios.post(url,JSON.stringify(params))
            .then((res)=>{
                resolve(res.data)
            })
            .catch((err)=>{
                reject(err)
            })
        })
    },
}
export default http