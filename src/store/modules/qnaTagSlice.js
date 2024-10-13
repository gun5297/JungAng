import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    qnaTag: JSON.parse(localStorage.getItem('JungAngQnATagList')) || [],
};

export const qnaTagSlice = createSlice({
    name: 'qnaTagSlice',
    initialState,
    reducers: {
        isNewTagAdd: (state, action) => {
            const newTag = { id: Math.floor(Math.random() * 9999), ...action.payload, isNew: true };
            state.qnaTag.push(newTag);
            localStorage.setItem('JungAngQnATagList', JSON.stringify(state.qnaTag));
        },
        isQnATagDel: (state, action) => {
            state.qnaTag = state.qnaTag.filter((tag) => tag.id !== action.payload);
            localStorage.setItem('JungAngQnATagList', JSON.stringify(state.qnaTag));
        },
        isNewChangeTag: (state, action) => {
            const selTag = state.qnaTag.find((tag) => tag.id === action.payload);
            selTag.isNew = false;
            localStorage.setItem('JungAngQnATagList', JSON.stringify(state.qnaTag));
        },
        allNewChangeTag: (state) => {
            state.qnaTag = state.qnaTag.map((tag) => ({ ...tag, isNew: false }));
            localStorage.setItem('JungAngQnATagList', JSON.stringify(state.qnaTag));
        },
    },
});

export const { isNewTagAdd, isQnATagDel, isNewChangeTag, allNewChangeTag } = qnaTagSlice.actions;
export default qnaTagSlice.reducer;
