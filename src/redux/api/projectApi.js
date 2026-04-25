import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { db } from "../../firebase";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

export const projectApi = createApi({
  reducerPath: "projectApi",
  baseQuery: fakeBaseQuery(),

  tagTypes: ["Projects"],

  endpoints: (builder) => ({
    // 🔥 GET PROJECTS
    getProjects: builder.query({
      async queryFn() {
        try {
          const snapshot = await getDocs(collection(db, "projects"));

          const data = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));

          return { data };
        } catch (error) {
          return { error: error.message };
        }
      },
      providesTags: ["Projects"],
    }),

    // 🔥 ADD PROJECT
    addProject: builder.mutation({
      async queryFn(newProject) {
        try {
          await addDoc(collection(db, "projects"), newProject);
          return { data: "Success" };
        } catch (error) {
          return { error: error.message };
        }
      },
      invalidatesTags: ["Projects"],
    }),

    // 🔥 DELETE
    deleteProject: builder.mutation({
      async queryFn(id) {
        try {
          await deleteDoc(doc(db, "projects", id));
          return { data: "Deleted" };
        } catch (error) {
          return { error: error.message };
        }
      },
      invalidatesTags: ["Projects"],
    }),

    // 🔥 UPDATE
    updateProject: builder.mutation({
      async queryFn({ id, data }) {
        try {
          await updateDoc(doc(db, "projects", id), data);
          return { data: "Updated" };
        } catch (error) {
          return { error: error.message };
        }
      },
      invalidatesTags: ["Projects"],
    }),
  }),
});

export const {
  useGetProjectsQuery,
  useAddProjectMutation,
  useDeleteProjectMutation,
  useUpdateProjectMutation,
} = projectApi;