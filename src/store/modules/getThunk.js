import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getQna = createAsyncThunk('qna/getQna', async () => {
    const res = await axios.get(
        `https://gist.githubusercontent.com/gun5297/99ac0c4b8094fa63e76857f055e97da6/raw/dfbeb5d62f1e3efa8ac8008870fd2e9693214dcb/JungAngQna.json`
    );
    return res.data;
});
