import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FindingawayWrap } from './styled';
import { getMap } from '../../store/modules/getThunk';
import { InnerWrap } from '../../styled/Style';
import { Spinner } from '../../common';

const Findingaway = () => {
    const dispatch = useDispatch();
    const { isMapLoaded, loading, address } = useSelector((state) => state.map);

    // 좌표 설정 (서울 시청 기준)
    const coords = { lat: 37.5665, lng: 126.978 };

    useEffect(() => {
        const mapContainer = document.getElementById('map');
        if (mapContainer) {
            dispatch(getMap(coords));
        }
    }, [dispatch]);

    if (loading)
        return (
            <InnerWrap>
                <Spinner />
            </InnerWrap>
        );
    return (
        <FindingawayWrap>
            <InnerWrap>
                <div id='map'></div>
                {isMapLoaded && address && <p>해당 좌표의 주소: {address}</p>}
            </InnerWrap>
        </FindingawayWrap>
    );
};

export default Findingaway;
