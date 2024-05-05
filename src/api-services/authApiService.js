import axios from "axios";
export const authApiService = () => {
  const login = async (user) => {
    return await axios.post(
      "https://tiny-gray-salmon-toga.cyclic.app/auth/login",
      user
    );
  };

  const register = async (userData) => {
    return await axios.post(
      "https://tiny-gray-salmon-toga.cyclic.app/auth/register",
      userData
    );
  };

  const forgotPassword = async (userData) => {
    return await axios.post(
      "https://tiny-gray-salmon-toga.cyclic.app/auth/forgot-password",
      userData
    );
  };

  const verifyOtp = async (userData) => {
    return await axios.post(
      "https://tiny-gray-salmon-toga.cyclic.app/auth/verify-otp",
      userData
    );
  };
  return {
    login,
    register,
    forgotPassword,
    verifyOtp,
  };
};
