import { createSlice } from "@reduxjs/toolkit";
import { db } from "../firebase";
import { collection, onSnapshot } from "firebase/firestore";

const projectSlice = createSlice({
  name: "projects",
  initialState: {
    projectList: [],
    loading: true,
  },
  reducers: {
    setProjects: (state, action) => {
      state.projectList = action.payload;
      state.loading = false;
    },
  },
});

export const { setProjects } = projectSlice.actions;
export default projectSlice.reducer;

// ✅ REAL-TIME LISTENER
export const listenToProjects = () => (dispatch) => {
  onSnapshot(collection(db, "projects"), (snapshot) => {
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    dispatch(setProjects(data));
  });
};