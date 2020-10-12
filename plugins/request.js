import axios from 'axios'
export const request = axios.create({
  baseURL: 'https://conduit.productionready.io/'
})
export default ({ store }) => {
  const { user } = store.state
    // Add a request interceptor
  // 拦截请求，添加token
  request.interceptors.request.use(function (config) {
    // console.dir(store)
    // 获取token
    if ( user && user.token ) {
      // console.log(user.token)
      config.headers.Authorization = `Token ${ user.token }`
    }
    // console.log(config)
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

  // Add a response interceptor
  request.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });
}

