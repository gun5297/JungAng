import { useDispatch } from 'react-redux';
import { InnerWrap } from '../../styled/Style';
import { LoginWrap } from './styled';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '../../ui/styled';
import { isLogin } from '../../store/modules/authSlice';

const Login = () => {
    const [user, setUser] = useState({ email: '', password: '' });
    const [view, setView] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    };
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(isLogin(user));
        navigate('/');
    };
    return (
        <LoginWrap>
            <InnerWrap className='inner'>
                <h2>로그인</h2>
                <form onSubmit={onSubmit}>
                    <p>
                        <label>아이디</label>
                        <input
                            type='email'
                            name='email'
                            placeholder='아이디를 입력해주세요'
                            value={user.email}
                            onChange={onChange}
                        />
                    </p>
                    <p>
                        <label>비밀번호</label>
                        <input
                            type={view ? 'text' : 'password'}
                            name='password'
                            placeholder='비밀번호를 입력해주세요'
                            value={user.password}
                            onChange={onChange}
                        />
                        <i
                            className={view ? 'xi-eye-off' : 'xi-eye-o'}
                            onClick={() => setView(!view)}
                        />
                    </p>
                    <p>
                        <Button type='submit' width='250px' height='60px'>
                            로그인
                        </Button>
                    </p>
                    <em>빠른로그인</em>
                    <em
                        onClick={() => {
                            dispatch(isLogin({ email: 'admin@admin.com', password: '1234' }));
                            navigate('/');
                        }}
                    >
                        어드민
                    </em>
                    <em
                        onClick={() => {
                            dispatch(isLogin({ email: 'test@naver.com', password: '1234' }));
                            navigate('/');
                        }}
                    >
                        테스터
                    </em>
                </form>
            </InnerWrap>
        </LoginWrap>
    );
};

export default Login;
