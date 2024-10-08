import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const xx = createAsyncThunk('xx/xx', async () => {
    const res = await axios.get(``);
    return res.data;
});
