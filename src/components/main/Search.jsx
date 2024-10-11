import { useSelector } from 'react-redux';
import { Button } from '../../ui/styled';
import { FORM } from './styled';

const Search = () => {
    const { room } = useSelector((state) => state.room);
    const key = [...room.bluectiy, ...room.dupluse].flatMap((room) => room.keyword);
    const sec = [...new Set(key)].sort((a, b) => a.localeCompare(b));

    const onSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <FORM onSubmit={onSubmit}>
            <input list='search' type='text' name='search' placeholder='검색어를 입력해 주세요.' />
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
