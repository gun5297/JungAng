import { useSelector } from 'react-redux';
import { Button } from '../../ui/styled';
import { useState } from 'react';

const Reconfirmation = ({ setReconfirmation }) => {
    const { login, userID } = useSelector((state) => state.auth);
    const [password, setPassWord] = useState('');
    return (
        <form
            className='reconfirmation'
            onSubmit={(e) => {
                e.preventDefault();
                if (login.find((login) => login.password === password && login.userID === userID)) {
                    setReconfirmation(true);
                } else {
                    alert('정보가 일치하지 않습니다.');
                }
            }}
        >
            <label htmlFor='reconfirmation'>비밀번호 재확인</label>
            <input
                type='password'
                name='password'
                id='reconfirmation'
                value={password}
                onChange={(e) => setPassWord(e.target.value)}
            />
            <Button type='submit' width='500px'>
                확인
            </Button>
        </form>
    );
};

export default Reconfirmation;
