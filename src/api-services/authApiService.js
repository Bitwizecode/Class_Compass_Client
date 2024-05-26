import axios from "axios";
export const authApiService = () => {
  // const BASE_URL = "https://class-compass-server.onrender.com";
  const BASE_URL = "http://localhost:8000";
  const login = async (user) => {
    return await axios.post(`${BASE_URL}/auth/login`, user);
  };

  const register = async (userData) => {
    return await axios.post(`${BASE_URL}/auth/register`, userData);
  };

  const forgotPassword = async (userData) => {
    return await axios.post(`${BASE_URL}/auth/forgot-password`, userData);
  };

  const verifyOtp = async (userData) => {
    return await axios.post(`${BASE_URL}/auth/verify-otp`, userData);
  };

  const changePassword = async (userData) => {
    return await axios.post(`${BASE_URL}/auth/change-password`, userData);
  };

  const whitelistUser = async (userData) => {
    return await axios.post(`${BASE_URL}/auth/add-whitelist`, userData);
  };
  return {
    login,
    register,
    forgotPassword,
    verifyOtp,
    changePassword,
    whitelistUser,
  };
};
