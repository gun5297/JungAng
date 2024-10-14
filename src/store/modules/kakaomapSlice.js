import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// API Key는 환경 변수로 관리하는 것이 좋습니다.
const API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;

// 비동기 액션: 예를 들어 장소 검색 기능을 구현한다면
export const fetchPlaces = createAsyncThunk('kakaoMap/fetchPlaces', async (location, thunkAPI) => {
    try {
        const response = await axios.get(`https://dapi.kakao.com/v2/local/search/keyword.json`, {
            params: {
                query: location,
            },
            headers: {
                Authorization: `KakaoAK ${API_KEY}`,
            },
        });
        return response.data.documents; // 검색 결과 반환
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

const kakaoMapSlice = createSlice({
    name: 'kakaoMap',
    initialState: {
        places: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPlaces.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchPlaces.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.places = action.payload;
            })
            .addCase(fetchPlaces.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    },
});

export default kakaoMapSlice.reducer;
