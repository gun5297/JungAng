import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import RoomItem from './RoomItem';
import { RoomListWrap } from './styled';

const RoomList = ({ onRoom }) => {
    return (
        <RoomListWrap>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className='mySwiper'
            >
                {onRoom.map((room) => (
                    <SwiperSlide key={room.id}>
                        <RoomItem {...room} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </RoomListWrap>
    );
};

export default RoomList;
