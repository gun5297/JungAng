import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    login: JSON.parse(localStorage.getItem('JungAngUserList')) || [
        {
            userID: 'admin',
            name: '관리자',
            tel: '010-1234-1234',
            email: 'admin@admin.com',
            password: '1234',
        },
        {
            userID: 2,
            name: '테스트',
            tel: '010-1234-1234',
            email: 'test@naver.com',
            password: '1234',
        },
    ],
    isAuth: false,
    user: null,
    userID: null,
};

export const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        isRegister: (state, action) => {
            const { name, tel, email, password } = action.payload;
            if (state.login.find((item) => item.email === email)) {
                alert('중복되는 아이디가 있습니다.');
                state.isAuth = false;
                state.user = null;
            } else {
                const userID = uuidv4();
                const newUser = { userID, name, tel, email, password, isNew: true };
                state.login.push(newUser);
                alert(`${name}님 환영합니다`);
                state.isAuth = true;
                state.userID = userID;
                state.user = name;
                localStorage.setItem('JungAngUserList', JSON.stringify(state.login));
            }
        },
        isLogin: (state, action) => {
            const { email, password } = action.payload;
            const user = state.login.find((login) => login.email === email);
            if (!user) {
                alert('일치하는 아이디가 없습니다.');
            } else if (user.password !== password) {
                alert('비밀번호가 틀렸습니다.');
            } else {
                alert(`${user.name}님 환영합니다`);
                state.isAuth = true;
                state.user = user.name;
                state.userID = user.userID;
            }
        },
        isLogout: (state) => {
            if (state.isAuth) {
                alert(`${state.user}님 로그아웃 되었습니다.`);
                state.isAuth = false;
                state.user = null;
                state.userID = null;
            } else {
                alert('잘못된 접근입니다.');
            }
        },
        isChange: (state, action) => {
            const { userID, name, tel, email, password } = action.payload;
            state.login = state.login.map((login) =>
                login.userID === userID ? { ...login, name, tel, email, password } : login
            );
            state.user = name;
            localStorage.setItem('JungAngUserList', JSON.stringify(state.login));
        },
        isKeyWord: (state, action) => {
            const { userID, keyword } = action.payload;
            state.login = state.login.map((login) =>
                login.userID === userID ? { ...login, keyword: keyword } : login
            );
            localStorage.setItem('JungAngUserList', JSON.stringify(state.login));
        },
    },
});

export const { isRegister, isLogin, isLogout, isChange, isKeyWord } = authSlice.actions;
export default authSlice.reducer;
