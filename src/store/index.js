import { configureStore } from '@reduxjs/toolkit';
import auth from './modules/authSlice';
import qna from './modules/qnaSlice';
import qnaTag from './modules/qnaTagSlice';
import room from './modules/roomSlice';

export const store = configureStore({
    reducer: {
        auth,
        qna,
        qnaTag,
        room,
    },
});
