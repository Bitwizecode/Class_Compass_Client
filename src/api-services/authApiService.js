import axios from "axios";
export const authApiService = () => {
  const login = async (user) => {
    try {
      return await axios.post(
        "https://tiny-gray-salmon-toga.cyclic.app/auth/login",
        user
      );
    } catch (error) {
      console.log(error);
    }
  };
  return {
    login,
  };
};
