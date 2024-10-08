import { useEffect, useState } from 'react';
import Spinner from '../../common/Spinner';
import { RegisterWrap } from './styled';
import { InnerWrap } from '../../styled/Style';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../ui/styled';
import { isRegister } from '../../store/modules/authSlice';

const Register = () => {
    const [user, setUser] = useState({ name: '', tel: '', email: '', password: '' });
    const [spin, setSpin] = useState(true);
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
        if (user.name && user.tel && user.email && user.password) {
            dispatch(isRegister(user));
            navigate('/');
        } else {
            alert('누락된 정보가 있습니다.');
        }
    };
    useEffect(() => {
        setTimeout(() => {
            setSpin(false);
        }, 600);
    }, []);
    return (
        <RegisterWrap>
            <InnerWrap className='inner'>
                <h2>회원가입</h2>
                {spin && <Spinner />}
                <form onSubmit={onSubmit}>
                    <p>
                        <label>이름</label>
                        <input
                            type='text'
                            placeholder='이름을 입력해 주세요'
                            name='name'
                            value={user.name}
                            onChange={onChange}
                        />
                    </p>
                    <p>
                        <label>전화번호</label>
                        <input
                            type='tel'
                            name='tel'
                            placeholder='전화번호를 입력해 주세요'
                            value={user.tel}
                            onChange={onChange}
                        />
                    </p>
                    <p>
                        <label>아이디</label>
                        <input
                            type='email'
                            name='email'
                            placeholder='이메일을 입력해 주세요'
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
                        <Button type='submit' width='160px' height='60px'>
                            회원가입
                        </Button>
                        <Button width='160px' height='60px' onClick={() => navigate('/')}>
                            취소
                        </Button>
                    </p>
                </form>
            </InnerWrap>
        </RegisterWrap>
    );
};

export default Register;
