import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading : false,
    categories :[],
    error :"",
}

export const fetchCategories = createAsyncThunk('category/fetchCategories', async () =>{
  return  await axios
  .get("http://127.0.0.1:8000/api/categories")
  .then(response=> response.data)
  });

  export const addCategory = createAsyncThunk('category/addCategory', async (categoryData) => {
    const response = await axios.post("http://127.0.0.1:8000/api/categories", categoryData);
    return response.data;
});

export const deleteCategory = createAsyncThunk(
    'category/deleteCategory',
    async (categoryId) => {
        await axios.delete(`http://127.0.0.1:8000/api/categories/${categoryId}`);
        return categoryId; // Return the ID for potential use in reducers
    }
);

export const updateCategory = createAsyncThunk('category/updateCategory', async (categoryData) => {
    const { id, ...data } = categoryData;
    const response = await axios.put(`http://127.0.0.1:8000/api/categories/${id}`, data);
    return response.data;
});

const categorySlice = createSlice({
    name:"category",
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(fetchCategories.pending, (state)=>{
            state.loading = true;
        })
        .addCase(fetchCategories.fulfilled,(state , action )=>{
            state.loading=false;
            state.categories =action.payload;
            state.error="";
    })
     .addCase(fetchCategories.rejected , (state , action)=> {
         state.loading=false;
         state.error= action.error.message;
         state.categories = [];
      })
      // Gestion de l'ajout de catégorie
      .addCase(addCategory.pending, (state) => {
        state.loading = true;
    })
    .addCase(addCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.categories.push(action.payload); // Ajoute la nouvelle catégorie à la liste existante
    })
    .addCase(addCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // Gère les erreurs d'ajout de catégorie
    })
    .addCase(deleteCategory.fulfilled, (state, action) => {
        state.categories = state.categories.filter(category => category.id !== action.payload);
    })
    .addCase(updateCategory.fulfilled, (state, action) => {
        const updatedIndex = state.categories.findIndex(cat => cat.id === action.payload.id);
        if (updatedIndex !== -1) {
            state.categories[updatedIndex] = action.payload;
        }
    })
},
})

export default categorySlice.reducer;