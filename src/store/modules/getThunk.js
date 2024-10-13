import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getQna = createAsyncThunk('qna/getQna', async () => {
    const res = await axios.get(
        `https://gist.githubusercontent.com/gun5297/99ac0c4b8094fa63e76857f055e97da6/raw/8c45745b48356b22f7e6eb11e0c3c43f97be512a/JungAngQna.json`
    );
    return res.data;
});

export const getMap = createAsyncThunk('map/getMap', async (coords, { rejectWithValue }) => {
    try {
        const script = document.createElement('script');
        script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=e4dad3bfb844132fb3652661002608f9&autoload=false`;
        script.async = true;
        document.head.appendChild(script);

        await new Promise((resolve) => {
            script.onload = () => {
                window.kakao.maps.load(() => {
                    const container = document.getElementById('map');
                    const options = {
                        center: new window.kakao.maps.LatLng(coords.lat, coords.lng), // 좌표로 지도 중심 설정
                        level: 3,
                    };
                    new window.kakao.maps.Map(container, options);
                    resolve(true);
                });
            };
        });

        const response = await axios.get(
            `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${coords.lng}&y=${coords.lat}`,
            {
                headers: {
                    Authorization: `e4dad3bfb844132fb3652661002608f9`, // REST API 키 필요
                },
            }
        );

        return response.data; // API 응답 데이터 리턴
    } catch (error) {
        return rejectWithValue(error.message);
    }
});
