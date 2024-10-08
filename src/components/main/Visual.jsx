import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import { VISUALWRAP } from './styled';
const Visual = () => {
    return (
        <VISUALWRAP>
            <>
                <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Pagination]}
                    className='mySwiper'
                >
                    <SwiperSlide>
                        <div className='img-wrap'>
                            <img src='images/visual1.jpg' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='img-wrap'>
                            <img src='images/visual2.jpg' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='img-wrap'>
                            <img src='images/visual3.jpg' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='img-wrap'>
                            <img src='images/visual4.jpg' />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </>
        </VISUALWRAP>
    );
};

export default Visual;
