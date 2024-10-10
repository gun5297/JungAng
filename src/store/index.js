import { configureStore } from '@reduxjs/toolkit';
import auth from './modules/authSlice';
import qna from './modules/qnaSlice';
import qnaTag from './modules/qnaTagSlice';

export const store = configureStore({
    reducer: {
        auth,
        qna,
        qnaTag,
    },
});
