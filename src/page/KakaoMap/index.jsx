import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { InnerWrap } from '../../styled/Style';
import SearchPlaces from '../../components/kakaomap/SearchPlaces';

const KakaoMap = () => {
    const { places, status } = useSelector((state) => state.kakaoMap);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=e4dad3bfb844132fb3652661002608f9&autoload=false`;
        document.head.appendChild(script);

        script.onload = () => {
            window.kakao.maps.load(() => {
                const mapContainer = document.getElementById('map'); // 지도를 표시할 div
                const mapOption = {
                    center: new window.kakao.maps.LatLng(37.4422197, 126.7099016), // 지도의 중심 좌표 (서울)
                    level: 1, // 지도의 확대 레벨
                };

                const map = new window.kakao.maps.Map(mapContainer, mapOption); // 지도 생성

                // 장소 데이터를 가져왔을 때 마커 추가
                if (status === 'succeeded') {
                    places.forEach((place) => {
                        const markerPosition = new window.kakao.maps.LatLng(place.y, place.x);
                        const marker = new window.kakao.maps.Marker({
                            position: markerPosition,
                        });
                        marker.setMap(map); // 마커를 지도에 표시
                        map.setCenter(markerPosition); // 새로운 위치로 지도 중심 이동
                    });
                }
            });
        };

        return () => document.head.removeChild(script); // 컴포넌트 언마운트 시 스크립트 제거
    }, [places, status]);

    return (
        <InnerWrap>
            <h2>찾아오시는길</h2>
            <SearchPlaces />
            <div id='map' style={{ width: '100%', height: '500px' }}></div>
        </InnerWrap>
    );
};

export default KakaoMap;
