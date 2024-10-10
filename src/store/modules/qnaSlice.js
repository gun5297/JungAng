import { createSlice } from '@reduxjs/toolkit';
import { getQna } from './getThunk';

const initialState = {
    qna: JSON.parse(localStorage.getItem('JungAngQnAList')) || [],
    loading: true,
    error: null,
};

export const qnaSlice = createSlice({
    name: 'qnaSlice',
    initialState,
    reducers: {
        isAddNew: (state, action) => {
            const { title, body, user, userID, date } = action.payload;
            const newQna = {
                id: Math.floor(Math.random() * 10000),
                title,
                body,
                userID,
                user,
                date,
                isPin: false,
            };
            state.qna.push(newQna);
            localStorage.setItem('JungAngQnAList', JSON.stringify(state.qna));
        },
        isPinChange: (state, action) => {
            const onQna = state.qna.find((qna) => qna.id === action.payload);
            onQna.isPin = !onQna.isPin;
        },
        isDelQnA: (state, action) => {
            state.qna = state.qna.filter((qna) => qna.id !== action.payload);
            localStorage.setItem('JungAngQnAList', JSON.stringify(state.qna));
        },
        isChangeQnA: (state, action) => {
            const { contentID, title, body } = action.payload;
            const onQna = state.qna.find((qna) => qna.id === Number(contentID));
            onQna.title = title;
            onQna.body = body;
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

export const { isAddNew, isPinChange, isDelQnA, isChangeQnA } = qnaSlice.actions;
export default qnaSlice.reducer;
