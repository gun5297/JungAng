import { Outlet, useParams } from 'react-router-dom';
import { InformationWrap } from './styled';
import { InnerWrap } from '../../styled/Style';
import RoomList from '../../components/room/RoomList';
import { useSelector } from 'react-redux';

const Information = () => {
    const { category } = useParams();
    const { room } = useSelector((state) => state.room);
    const onRoom = room[category];
    return (
        <InformationWrap>
            <InnerWrap className='inner'>
                <h2>{category}</h2>
                <RoomList onRoom={onRoom} />
                <Outlet />
            </InnerWrap>
        </InformationWrap>
    );
};

export default Information;
