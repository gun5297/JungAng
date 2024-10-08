import { configureStore } from '@reduxjs/toolkit';
import auth from './modules/authSlice';
import qna from './modules/qnaSlice';

export const store = configureStore({
    reducer: {
        auth,
        qna,
    },
});
