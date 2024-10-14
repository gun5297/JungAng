import { useDispatch } from 'react-redux';
import { fetchPlaces } from '../../store/modules/kakaomapSlice';
import { InnerWrap } from '../../styled/Style';
import { Button } from '../../ui/styled';
import { SearchPlacesWrap } from './styled';

const SearchPlaces = () => {
    const dispatch = useDispatch();

    const handleSearch = (location) => {
        dispatch(fetchPlaces(location));
    };

    return (
        <SearchPlacesWrap>
            <Button onClick={() => handleSearch('인천 남동구 선수촌공원로 37 중앙프라자')}>
                중앙공인중개사
            </Button>
            <Button onClick={() => handleSearch('구월동 블루시티 오피스텔')}>블루시티</Button>
            <Button onClick={() => handleSearch('구월동 두플라스')}>두플러스</Button>
        </SearchPlacesWrap>
    );
};

export default SearchPlaces;
