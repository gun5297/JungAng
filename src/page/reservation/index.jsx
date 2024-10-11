import { useSelector } from 'react-redux';
import { RservationWrap } from './styled';
import { InnerWrap } from '../../styled/Style';
import ReservationItem from '../../components/reservation/ReservationItem';
import { Button } from '../../ui/styled';
import { useNavigate } from 'react-router-dom';

const Rservation = () => {
    const { reservation } = useSelector((state) => state.reservation);
    const { userID: userid } = useSelector((state) => state.auth);
    const onReservation = reservation.filter((res) => res.userID === userid || userid === 'admin');
    const navigate = useNavigate();
    return (
        <RservationWrap>
            <InnerWrap>
                {onReservation.length !== 0 ? (
                    <ul>
                        {onReservation.map((res) => (
                            <ReservationItem key={res.id} {...res} />
                        ))}
                    </ul>
                ) : (
                    <div>
                        <h2>예약 내역이 없습니다.</h2>
                        <div className='no-btn-wrap'>
                            <Button
                                width='500px'
                                height='80px'
                                onClick={() => navigate('/details/bluectiy/1')}
                            >
                                예약하러 가기
                            </Button>
                        </div>
                    </div>
                )}
            </InnerWrap>
        </RservationWrap>
    );
};

export default Rservation;
