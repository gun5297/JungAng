import { Button } from '../../ui/styled';
import { FORM } from './styled';

const Search = () => {
    const onSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <FORM onSubmit={onSubmit}>
            <input type='text' name='search' placeholder='검색어를 입력해 주세요.' />
            <Button type='submit' width='60px' height='60px' bdra='50%'>
                <i className='xi-search' />
            </Button>
        </FORM>
    );
};

export default Search;
