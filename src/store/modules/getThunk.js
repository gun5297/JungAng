import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getQna = createAsyncThunk('qna/getQna', async () => {
    const res = await axios.get(
        `https://gist.githubusercontent.com/gun5297/99ac0c4b8094fa63e76857f055e97da6/raw/8c45745b48356b22f7e6eb11e0c3c43f97be512a/JungAngQna.json`
    );
    return res.data;
});
