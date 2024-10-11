import { useDispatch, useSelector } from 'react-redux';
import { ReservationItemWrap } from './styled';
import { Button } from '../../ui/styled';
import { useNavigate } from 'react-router-dom';
import { isDelRes } from '../../store/modules/reservationSlice';

const ReservationItem = ({ id, userID, user, roomID, mo, day, isNew, category }) => {
    const { room } = useSelector((state) => state.room);
    const onRoom = room[category].find((room) => room.id === roomID);
    const dispatch = useDispatch();
    const onClick = () => {
        dispatch(isDelRes(id));
    };

    return (
        <ReservationItemWrap>
            <div className='img-wrap'>
                <img src={onRoom.Bigimg} alt='' />
            </div>
            <div className='text-wrap'>
                <p className='user'>{user}님 예약</p>
                <p className='title'>{onRoom.title}</p>
                <p className='deposit'>보증금 {onRoom.deposit}</p>
                <p className='type rent'>
                    {onRoom.type} {onRoom.rent}만원
                </p>
                <p className='mo day'>
                    {mo}월 {day}일
                </p>
                <div className='btn-wrap'>
                    <Button width='200px' height='50px' onClick={onClick}>
                        예약 취소하기
                    </Button>
                </div>
            </div>
        </ReservationItemWrap>
    );
};

export default ReservationItem;
