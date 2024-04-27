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
  return {
    login,
    register,
  };
};
