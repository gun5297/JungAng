import { createSlice } from '@reduxjs/toolkit';
import { getQna } from './getThunk';

const initialState = {
    qna: [],
    loading: true,
    error: null,
};

export const qnaSlice = createSlice({
    name: 'qnaSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getQna.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getQna.fulfilled, (state, action) => {
                state.qna = action.payload;
                state.loading = false;
                state.error = null;
            })
            .addCase(getQna.rejected, (state) => {
                state.loading = false;
                state.error = '에러 발생';
            });
    },
});

// export const {} = qnaSlice.actions;
export default qnaSlice.reducer;
