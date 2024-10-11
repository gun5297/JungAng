import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    room: {
        bluectiy: [
            {
                id: 1,
                Bigimg: '/BlueA/1.jpeg',
                imgTag: 'BlueA',
                img: 21,
                like: 1283,
                deposit: 500,
                rent: 53,
                title: '블루시티 A타입',
                type: '월세',
                keyword: ['원룸', '블루시티', '구월동', '저렴한방', '가장많이 찾는방'],
                nav: 'bluectiy',
            },
            {
                id: 2,
                Bigimg: '/BlueB/1.jpeg',
                imgTag: 'BlueB',
                img: 12,
                like: 821,
                deposit: 500,
                rent: 58,
                title: '블루시티 B타입',
                type: '월세',
                keyword: ['원룸', '블루시티', '구월동', '인기타입'],
                nav: 'bluectiy',
            },
            {
                id: 3,
                Bigimg: '/BlueC/1.jpeg',
                imgTag: 'BlueC',
                img: 18,
                like: 2102,
                deposit: 500,
                rent: 65,
                title: '블루시티 C타입',
                type: '월세',
                keyword: ['1.5룸', '블루시티', '구월동', '유일한 1.5룸', '최고인기'],
                nav: 'bluectiy',
            },
            {
                id: 4,
                Bigimg: '/BlueD/1.jpeg',
                imgTag: 'BlueD',
                img: 12,
                like: 182,
                deposit: 500,
                rent: 53,
                title: '블루시티 D타입',
                type: '월세',
                keyword: ['원룸', '블루시티', '구월동', '희귀매물'],
                nav: 'bluectiy',
            },
        ],
        dupluse: [
            {
                id: 1,
                Bigimg: '/Duplusone/1.jpeg',
                imgTag: 'Duplusone',
                img: 12,
                like: 71,
                deposit: 500,
                rent: '55~58',
                title: '두플러스 원룸타입',
                type: '월세',
                keyword: ['원룸', '두플러스', '구월동', '보안최강'],
                nav: 'dupluse',
            },
            {
                id: 2,
                Bigimg: '/Dupluestwo/1.jpeg',
                imgTag: 'Dupluestwo',
                img: 12,
                like: 912,
                deposit: 2000,
                rent: 80,
                title: '두플러스 투룸타입',
                type: '월세',
                keyword: ['투룸', '두플러스', '구월동', '넓은크기 투룸'],
                nav: 'dupluse',
            },
        ],
    },
};

export const roomSlice = createSlice({
    name: 'roomSlice',
    initialState,
    reducers: {},
});

// export const {} = roomSlice.actions;
export default roomSlice.reducer;
