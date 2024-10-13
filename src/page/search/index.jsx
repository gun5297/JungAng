import { useParams } from 'react-router-dom';
import { SearchListWrap } from './styled';
import { InnerWrap } from '../../styled/Style';
import { useSelector } from 'react-redux';
import SearchItem from '../../components/main/SearchItem';
import Search from '../../components/main/Search';

const SearchList = () => {
    const { keyword } = useParams();
    const { room } = useSelector((state) => state.room);
    const onRoom = [...room['bluectiy'], ...room['dupluse']].filter((room) =>
        room.keyword.some((key) => key.includes(keyword))
    );

    console.log(onRoom);
    return (
        <SearchListWrap>
            <InnerWrap>
                <h2>"{keyword}" 검색 결과</h2>
                <Search />
                <ul>
                    {onRoom.map((room, idx) => (
                        <SearchItem key={idx} {...room} />
                    ))}
                </ul>
            </InnerWrap>
        </SearchListWrap>
    );
};

export default SearchList;
