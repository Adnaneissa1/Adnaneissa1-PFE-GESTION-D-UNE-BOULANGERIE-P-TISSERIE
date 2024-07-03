import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMessages = createAsyncThunk(
    'messages/fetchMessages',
    async () => {
      const response = await axios.get('http://127.0.0.1:8000/api/messages');
      return response.data.messages;
    }
  );
  
  export const updateMessage = createAsyncThunk(
    'messages/updateMessage',
    async ({ id, messageData }) => {
      const response = await axios.put(`http://127.0.0.1:8000/api/messages/${id}`, messageData);
      return response.data.message;
    }
  );
  
  export const deleteMessage = createAsyncThunk(
    'messages/deleteMessage',
    async (id) => {
      await axios.delete(`http://127.0.0.1:8000/api/messages/${id}`);
      return id;
    }
  );
  
  export const markMessageAsRead = createAsyncThunk(
    'messages/markMessageAsRead',
    async (id) => {
      const response = await axios.put(`http://127.0.0.1:8000/api/messages/${id}/read`);
      return response.data.message;
    }
  );

const messagesSlice = createSlice({
  name: 'messages',
  initialState: {
    list: [],
    loading: false, // Renommé de "status" à "loading"
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMessages.pending, (state) => {
        state.loading = true; // Changé de "status" à "loading"
      })
      .addCase(fetchMessages.fulfilled, (state, action) => {
        state.loading = false; // Changé de "status" à "loading"
        state.list = action.payload;
      })
      .addCase(fetchMessages.rejected, (state, action) => {
        state.loading = false; // Changé de "status" à "loading"
        state.error = action.error.message;
      })
      .addCase(updateMessage.fulfilled, (state, action) => {
        const { id } = action.payload;
        const existingMessageIndex = state.list.findIndex(message => message.id === id);
        if (existingMessageIndex !== -1) {
          state.list[existingMessageIndex] = action.payload;
        }
      })
      .addCase(deleteMessage.fulfilled, (state, action) => {
        state.list = state.list.filter(message => message.id !== action.payload);
      })
      .addCase(markMessageAsRead.fulfilled, (state, action) => {
        const { id } = action.payload;
        const existingMessageIndex = state.list.findIndex(message => message.id === id);
        if (existingMessageIndex !== -1) {
          state.list[existingMessageIndex] = action.payload;
        }
      });
  },
});

export default messagesSlice.reducer;
