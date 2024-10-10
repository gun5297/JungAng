import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isLikeChange } from '../../store/modules/roomSlice';
import { useParams } from 'react-router-dom';

const Like = ({ id }) => {
    const { category } = useParams();
    const [islike, setIsLike] = useState(false);
    const { room } = useSelector((state) => state.room);
    const like = room[category].find((room) => room.id === id).like;
    const dispatch = useDispatch();
    /* useEffect(() => {
        if (islike) {
            dispatch(isLikeChange({ category, id, cnt: 1 }));
        } else {
            dispatch(isLikeChange({ category, id, cnt: -1 }));
        }
    }, [islike]); */
    return (
        <li className={`t ${islike ? 'active' : ''}`}>
            관심 수 : {like}
            <i className='xi-heart' onClick={() => setIsLike(!islike)} />
        </li>
    );
};

export default Like;
