import { configureStore } from '@reduxjs/toolkit';
import auth from './modules/authSlice';

export const store = configureStore({
    reducer: {
        auth,
    },
});
