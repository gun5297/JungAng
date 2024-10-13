import { configureStore } from '@reduxjs/toolkit';
import auth from './modules/authSlice';
import qna from './modules/qnaSlice';
import qnaTag from './modules/qnaTagSlice';
import room from './modules/roomSlice';
import reservation from './modules/reservationSlice';
import map from './modules/kakaomapSlice';

export const store = configureStore({
    reducer: {
        auth,
        qna,
        qnaTag,
        room,
        reservation,
        map,
    },
});
