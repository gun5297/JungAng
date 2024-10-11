import { useNavigate, useParams } from 'react-router-dom';
import { ReservationaAddFormWrap } from './styled';
import { useDispatch, useSelector } from 'react-redux';
import { InnerWrap } from '../../styled/Style';
import { Button } from '../../ui/styled';
import { isNewRes } from '../../store/modules/reservationSlice';
import { useState } from 'react';

const ReservationaAddForm = () => {
    const { category, datanum } = useParams();
    const { room } = useSelector((state) => state.room);
    const { user, userID } = useSelector((state) => state.auth);
    const { reservation } = useSelector((state) => state.reservation);
    const isRoom = room[category].find((room) => room.id === Number(datanum));
    const { id, Bigimg, title, type, deposit, rent } = isRoom;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { date } = useSelector((state) => state.reservation);
    const [cnt, setCnt] = useState(0);
    const [isSel, setIsSel] = useState({ mo: '', day: '' });
    const resday = reservation.filter((res) => res.mo === date[cnt].mo).map((res) => res.day);
    const chnageCnt = (type) => {
        if (type === 'next') {
            setCnt(cnt < date.length - 1 ? cnt + 1 : cnt);
        } else {
            setCnt(cnt > 0 ? cnt - 1 : cnt);
        }
        console.log(cnt);
    };
    let isDay = [];
    for (let i = 1; i <= date[cnt].day; i++) {
        isDay.push(i);
    }
    const notday = isDay.filter((day) => !resday.includes(day));
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(isNewRes({ roomID: id, userID, user, ...isSel, category }));
        alert(`${user}님 ${title} 예약되었습니다.`);
        navigate('/reservation');
    };
    return (
        <ReservationaAddFormWrap onSubmit={onSubmit}>
            <InnerWrap className='inner'>
                <div className='img-wrap'>
                    <img src={Bigimg} alt='' />
                </div>
                <div className='text-wrap'>
                    <h3>{title}</h3>
                    <p>
                        {type} | {deposit} / {rent}만원
                    </p>
                    {notday.length !== 0 ? (
                        <ul className='calendar'>
                            {notday.map((day) => (
                                <li
                                    key={day}
                                    className={
                                        isSel.mo === date[cnt].mo && isSel.day === day
                                            ? 'day active'
                                            : 'day'
                                    }
                                    onClick={() => {
                                        setIsSel({ mo: date[cnt].mo, day });
                                    }}
                                >
                                    {date[cnt].mo}/{day}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <div>
                            <p>예약 가능한 날짜가 없습니다.</p>
                        </div>
                    )}

                    <div className='calendar-btn-wrap'>
                        <i onClick={() => chnageCnt('prev')} className='xi-angle-left' />
                        <i onClick={() => chnageCnt('next')} className='xi-angle-right' />
                    </div>
                    <div className='btn-wrap'>
                        <Button width='300px' height='60px'>
                            예약 확정하기
                        </Button>
                    </div>
                </div>
            </InnerWrap>
        </ReservationaAddFormWrap>
    );
};

export default ReservationaAddForm;
