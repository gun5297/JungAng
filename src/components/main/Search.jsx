import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../../ui/styled';
import { FORM } from './styled';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { isKeyWord } from '../../store/modules/authSlice';

const Search = () => {
    const { room } = useSelector((state) => state.room);
    const { isAuth, userID } = useSelector((state) => state.auth);
    const [keyword, setKeyWord] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const key = [...room.bluectiy, ...room.dupluse].flatMap((room) => room.keyword);
    const sec = [...new Set(key)].sort((a, b) => a.localeCompare(b));

    const onSubmit = (e) => {
        e.preventDefault();
        if (keyword) {
            if (isAuth) dispatch(isKeyWord({ userID, keyword }));
            navigate(`/search/${keyword}`);
        } else {
            alert('검색어를 입력해주세요');
        }
    };
    return (
        <FORM onSubmit={onSubmit}>
            <input
                list='search'
                type='text'
                name='search'
                value={keyword}
                onChange={(e) => setKeyWord(e.target.value)}
                placeholder='검색어를 입력해 주세요.'
            />
            <datalist id='search'>
                {sec.map((sec, idx) => (
                    <option key={idx} value={sec} />
                ))}
            </datalist>
            <Button type='submit' width='60px' height='60px' bdra='50%'>
                <i className='xi-search' />
            </Button>
        </FORM>
    );
};

export default Search;
