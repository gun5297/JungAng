import { createSlice } from '@reduxjs/toolkit';
import { getMap } from './getThunk';

const initialState = {
    isMapLoaded: false,
    loading: false,
    error: null,
    address: null,
};

const kakaomapSlice = createSlice({
    name: 'mapSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getMap.pending, (state) => {
                state.loading = true;
                state.isMapLoaded = false;
                state.error = null;
                state.address = null;
            })
            .addCase(getMap.fulfilled, (state, action) => {
                state.loading = false;
                state.isMapLoaded = true;
                state.address = action.payload.documents[0].address.address_name; // 변환된 주소 저장
            })
            .addCase(getMap.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default kakaomapSlice.reducer;
