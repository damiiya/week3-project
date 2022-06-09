import { auth, db } from "../shared/firebase";
import { collection, addDoc } from "firebase/firestore";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const signupFB = createAsyncThunk("user/signupFB", async () => {
  try {
    const user = await auth.createUserWithEmailAndPassword(id, pwd);
    const user_data = await addDoc(collection(db, "user"));
    const setUser = [];
    user_data.forEach(({}) => {
      setUser.push({
        user_name: user_name,
        id: id,
        user_profile: "",
        uid: user.user.uid,
      });
    });
    return setUser;
  } catch (err) {
    console.log(err);
  }
});

const users = createSlice({
  name: "user",
  initialState: {
    words: [],
    status: null,
  },
  extraReducers: {
    [signupFB.pending.type]: (state) => {
      state.status = "loading";
    },
    [signupFB.fulfilled.type]: (state, action) => {
      state.status = "success";
      state.words = action.payload;
    },
    [signupFB.rejected.type]: (state) => {
      state.status = "failed";
    },
  },
});

// const initialState = {
//   userName: null,
//   userEmail: null,
// };

// const user = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     setActiveUser: (state, action) => {
//       state.userName = action.payload.userName;
//       state.userEmail = action.payload.userEmail;
//     },
//     userNameLogOutState: (state) => {
//       state.userName = null;
//       state.userEmail = null;
//     },
//   },
// });

// export const { setActiveUser, userNameLogOutState } = user.actions;

// export const selectUserName = (state) => state.user.userName;
// export const selectUserEmail = (state) => state.user.userEmail;

export default user.reducer;
