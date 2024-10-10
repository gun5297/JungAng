import { useSelector } from 'react-redux';
import { RoomInfoWrap } from './styled';
import { useParams } from 'react-router-dom';
import Like from './Like';
import { InnerWrap } from '../../styled/Style';
import { useEffect } from 'react';

const RoomInfo = () => {
    const { datanum, category } = useParams();
    const { room } = useSelector((state) => state.room);
    const isRoom = room[category];
    const onRoom = isRoom.find((room) => room.id === Number(datanum));
    const { id, imgTag, img, like, deposit, rent, title, type, keyword } = onRoom;
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
                        <Like id={id} />
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
            </InnerWrap>
        </RoomInfoWrap>
    );
};

export default RoomInfo;
