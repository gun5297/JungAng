import { useSelector } from 'react-redux';
import { RoomInfoWrap } from './styled';
import { useNavigate, useParams } from 'react-router-dom';
import { InnerWrap } from '../../styled/Style';
import { useEffect } from 'react';
import { Button } from '../../ui/styled';

const RoomInfo = () => {
    const { datanum, category } = useParams();
    const { room } = useSelector((state) => state.room);
    const isRoom = room[category];
    const onRoom = isRoom.find((room) => room.id === Number(datanum));
    const { imgTag, img, like, deposit, rent, title, type, keyword } = onRoom;
    const navigate = useNavigate();
    const imgnum = [];
    for (let i = 1; i <= img; i++) {
        imgnum.push(i);
    }
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <RoomInfoWrap>
            <InnerWrap>
                <h2>{title}</h2>
                <div className='text-wrap'>
                    <p className='w'>보증금: {deposit}만원</p>
                    <p className='w'>월세: {rent}만원</p>
                    <ul>
                        <li className='t'>{type}</li>
                        <li className='t'>
                            <i className='xi-heart' />
                            관심 수 : {like}
                        </li>
                        {keyword.map((key, idx) => (
                            <li key={idx}>#{key}</li>
                        ))}
                    </ul>
                </div>
                <div className='img-wrap'>
                    {imgnum.map((item, idx) => (
                        <article key={idx}>
                            <img src={`/${imgTag}/${item}.jpeg`} />
                            <span>{idx + 1}</span>
                        </article>
                    ))}
                </div>

                <div className='btn-wrap'>
                    <Button
                        className='btn'
                        width='300px'
                        height='60px'
                        onClick={() => navigate(`/details/${category}/${datanum}/reservation`)}
                    >
                        예약하기
                    </Button>
                </div>
            </InnerWrap>
        </RoomInfoWrap>
    );
};

export default RoomInfo;
