import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../../ui/styled';
import { isChange } from '../../store/modules/authSlice';
import { useNavigate } from 'react-router-dom';

const MyModify = () => {
    const { login, userID } = useSelector((state) => state.auth);
    const [view, setView] = useState(false);
    const mach = login.find((login) => login.userID === userID);
    const [dataValue, setDataValue] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onChange = (e) => {
        const { name, value } = e.target;
        setDataValue({
            ...dataValue,
            [name]: value,
        });
    };
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(isChange({ userID, ...dataValue }));
        alert('수정 완료 되었습니다.');
    };
    useEffect(() => {
        if (mach) {
            setDataValue({
                name: mach.name,
                tel: mach.tel,
                email: mach.email,
                password: mach.password,
            });
        }
    }, [mach]);

    return (
        <form className='MyModify' onSubmit={onSubmit}>
            <div className='inp-wrap'>
                <label htmlFor='name'>이름</label>
                <input
                    type='text'
                    name='name'
                    id='name'
                    value={dataValue.name}
                    onChange={onChange}
                />
            </div>
            <div className='inp-wrap'>
                <label htmlFor='tel'>전화번호</label>
                <input type='tel' name='tel' id='tel' value={dataValue.tel} onChange={onChange} />
            </div>
            <div className='inp-wrap'>
                <label htmlFor='email'>아이디</label>
                <input
                    type='email'
                    name='email'
                    id='email'
                    value={dataValue.email}
                    onChange={onChange}
                />
            </div>
            <div className='inp-wrap'>
                <label>비밀번호</label>
                <input
                    type={view ? 'text' : 'password'}
                    name='password'
                    placeholder='비밀번호를 입력해주세요'
                    value={dataValue.password}
                    onChange={onChange}
                />
                <i className={view ? 'xi-eye-off' : 'xi-eye-o'} onClick={() => setView(!view)} />
            </div>
            <div className='btn-wrap'>
                <Button type='submit' width='200px'>
                    수정
                </Button>
                <Button
                    width='200px'
                    onClick={() => {
                        navigate('/');
                    }}
                >
                    취소
                </Button>
            </div>
        </form>
    );
};

export default MyModify;
