import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    reservation: JSON.parse(localStorage.getItem('JungAngReservationList')) || [],
    date: [
        { mo: 10, day: 31 },
        { mo: 11, day: 30 },
        { mo: 12, day: 31 },
    ],
};

export const reservationSlice = createSlice({
    name: 'reservationSlice',
    initialState,
    reducers: {
        isNewRes: (state, action) => {
            const newRes = { id: Math.floor(Math.random() * 9999), ...action.payload, isNew: true };
            state.reservation.push(newRes);
            localStorage.setItem('JungAngReservationList', JSON.stringify(state.reservation));
        },
        isDelRes: (state, action) => {
            state.reservation = state.reservation.filter((res) => res.id !== action.payload);
        },
    },
});

export const { isNewRes, isDelRes } = reservationSlice.actions;
export default reservationSlice.reducer;
