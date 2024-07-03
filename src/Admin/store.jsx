
import { configureStore } from '@reduxjs/toolkit';
import categoriesSlice from './category/sliceCategories';
import userSlice from './utilisateur/utilisateurSlice'
import messageSlice from './message/messageSlice';
export default configureStore({
  reducer: {
    category: categoriesSlice,
    user: userSlice,
    messages: messageSlice,
  },
});