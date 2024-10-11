import { configureStore } from '@reduxjs/toolkit';
import auth from './modules/authSlice';
import qna from './modules/qnaSlice';
import qnaTag from './modules/qnaTagSlice';
import room from './modules/roomSlice';
import reservation from './modules/reservationSlice';

export const store = configureStore({
    reducer: {
        auth,
        qna,
        qnaTag,
        room,
        reservation,
    },
});
