import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // Set your API base URL here
});

const setAuthorizationHeader = (config, session) => {
  if (session) {
    config.headers.Authorization = `Bearer ${session.accessToken}`; // Set the token from session
  }
  return config;
};

// Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const session = config.session || config.userSession; // Expecting session to be passed in config
    return setAuthorizationHeader(config, session);
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // store.dispatch(setOpenLoginModal(true)); // Handle 401 (Unauthorized)
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
