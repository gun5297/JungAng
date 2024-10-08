import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getQna = createAsyncThunk('qna/getQna', async () => {
    const res = await axios.get(
        `https://gist.githubusercontent.com/gun5297/99ac0c4b8094fa63e76857f055e97da6/raw/8ccf0757319e1ae1d36210fac4934c48e6e43920/JungAngQna.json`
    );
    return res.data;
});
