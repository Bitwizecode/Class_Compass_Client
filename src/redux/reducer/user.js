import { createSlice, current } from "@reduxjs/toolkit";

let initialState = {
  name: "",
  email: "",
  picture: "",
  isLogin: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {

      const { name, email, picture, _id, linkedIn_email } = action.payload;
      state.id = _id;
      state.name = name;
      state.email = email;
      state.linkedIn_email = linkedIn_email;
      state.picture = picture;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;