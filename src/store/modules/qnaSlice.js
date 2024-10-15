import { createSlice } from '@reduxjs/toolkit';
import { getQna } from './getThunk';

const initialState = {
    qna: JSON.parse(localStorage.getItem('JungAngQnAList')) || [],
    loading: true,
    error: null,
    delIds: JSON.parse(localStorage.getItem('JungAngDelIds')) || [],
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
                isNew: true,
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
            state.delIds.push(action.payload);
            localStorage.setItem('JungAngQnAList', JSON.stringify(state.qna));
            localStorage.setItem('JungAngDelIds', JSON.stringify(state.delIds));
        },

        isChangeQnA: (state, action) => {
            const { contentID, title, body } = action.payload;
            const onQna = state.qna.find((qna) => qna.id === Number(contentID));
            onQna.title = title;
            onQna.body = body;
            localStorage.setItem('JungAngQnAList', JSON.stringify(state.qna));
        },
        isNewChangeQna: (state, action) => {
            const selqna = state.qna.find((qna) => qna.id === action.payload);
            selqna.isNew = false;
            localStorage.setItem('JungAngQnAList', JSON.stringify(state.qna));
        },
        allNewChangeQna: (state) => {
            state.qna = state.qna.map((qna) => ({ ...qna, isNew: false }));
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
                    (qna) =>
                        !state.qna.find((Qna) => Qna.id === qna.id) &&
                        !state.delIds.includes(qna.id)
                );
                state.qna = [...state.qna, ...newQna];
                state.loading = false;
                state.error = null;

                state.qna.sort((a, b) => {
                    const dateA = new Date(
                        a.date.year,
                        a.date.month - 1,
                        a.date.day,
                        a.date.hours,
                        a.date.minutes
                    );
                    const dateB = new Date(
                        b.date.year,
                        b.date.month - 1,
                        b.date.day,
                        b.date.hours,
                        b.date.minutes
                    );
                    return dateB - dateA;
                });
                localStorage.setItem('JungAngQnAList', JSON.stringify(state.qna));
            })
            .addCase(getQna.rejected, (state) => {
                state.loading = false;
                state.error = '에러 발생';
            });
    },
});

export const { isAddNew, isPinChange, isDelQnA, isChangeQnA, isNewChangeQna, allNewChangeQna } =
    qnaSlice.actions;
export default qnaSlice.reducer;
