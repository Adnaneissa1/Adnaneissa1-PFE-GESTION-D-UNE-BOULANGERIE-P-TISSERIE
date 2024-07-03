import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  users: [],
  error: "",
};

export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
  const response = await axios.get("http://127.0.0.1:8000/api/utilisateurs");
  return response.data; 
});

export const addUser = createAsyncThunk("user/addUser", async (userData) => {
  const response = await axios.post("http://127.0.0.1:8000/api/utilisateurs", userData);
  return response.data;
});

export const deleteUser = createAsyncThunk("user/deleteUser", async (userId) => {
  await axios.delete(`http://127.0.0.1:8000/api/utilisateurs/${userId}`);
  return userId;
});

export const updateUser = createAsyncThunk("user/updateUser", async (userData) => {
  const { id, ...data } = userData;
  const response = await axios.put(`http://127.0.0.1:8000/api/utilisateurs/${id}`, data);
  return response.data;
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
        state.error = "";
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.users = [];
      })
      .addCase(addUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload);
        state.error = "";
      })
      .addCase(addUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.loading = false;
        // Remove the deleted user from the state
        state.users = state.users.filter(user => user.id !== action.payload.id);
        state.error = "";
      })
      
      .addCase(deleteUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        if (!Array.isArray(state.users)) {
          console.error("State users is not an array!");
          return;
        }
        
        const updatedIndex = state.users.findIndex((user) => user.id === action.payload.id);
        if (updatedIndex !== -1) {
          state.users = [
            ...state.users.slice(0, updatedIndex),
            action.payload,
            ...state.users.slice(updatedIndex + 1)
          ];
        }
      });
  },
});

export default userSlice.reducer;
