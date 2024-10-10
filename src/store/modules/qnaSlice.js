import { createSlice } from '@reduxjs/toolkit';
import { getQna } from './getThunk';

const initialState = {
    qna: JSON.parse(localStorage.getItem('JungAngQnAList')) || [],
    loading: true,
    error: null,
};

let no = initialState.qna.length + 1;

export const qnaSlice = createSlice({
    name: 'qnaSlice',
    initialState,
    reducers: {
        isAddNew: (state, action) => {
            const { title, body, user, userID, date } = action.payload;
            const newQna = { id: no++, title, body, userID, user, date, isPin: false };
            state.qna.push(newQna);
            localStorage.setItem('JungAngQnAList', JSON.stringify(state.qna));
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getQna.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getQna.fulfilled, (state, action) => {
                const newQna = action.payload.filter(
                    (action) => !state.qna.find((qna) => qna.id === action.id)
                );
                state.qna = [...state.qna, ...newQna];
                no = state.qna.length + 1;
                state.loading = false;
                state.error = null;
                localStorage.setItem('JungAngQnAList', JSON.stringify(state.qna));
            })
            .addCase(getQna.rejected, (state) => {
                state.loading = false;
                state.error = '에러 발생';
            });
    },
});

export const { isAddNew } = qnaSlice.actions;
export default qnaSlice.reducer;
