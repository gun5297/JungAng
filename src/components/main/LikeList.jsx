import { useSelector } from 'react-redux';
import LikeItem from './LikeItem';
import { LIKELIST } from './styled';

const LikeList = () => {
    const { room } = useSelector((state) => state.room);
    const allRooms = [...room.bluectiy, ...room.dupluse]
        .sort((a, b) => b.like - a.like)
        .slice(0, 4);
    return (
        <LIKELIST>
            {allRooms.map((all, idx) => (
                <LikeItem key={idx} {...all} />
            ))}
        </LIKELIST>
    );
};

export default LikeList;
