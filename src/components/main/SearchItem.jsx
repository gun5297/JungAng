import { useNavigate } from 'react-router-dom';
import { Button } from '../../ui/styled';
import { SearchItemWrap } from './styled';

const SearchItem = ({ id, Bigimg, deposit, rent, keyword, title, type, nav }) => {
    const navigate = useNavigate('');
    return (
        <SearchItemWrap>
            <div className='img-wrap'>
                <img src={Bigimg} alt={title} />
            </div>
            <div className='text-wrap'>
                <p className='title'>{title}</p>
                <p className='type'>
                    {type} | {deposit} {rent}만원
                </p>
                <ul>
                    {keyword.map((key, idx) => (
                        <li key={idx}>#{key}</li>
                    ))}
                </ul>
            </div>
            <div className='btn-wrap'>
                <Button onClick={() => navigate(`/${nav}/${id}`)}>자세히 보기</Button>
            </div>
        </SearchItemWrap>
    );
};

export default SearchItem;
