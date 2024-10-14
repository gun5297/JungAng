import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { isPinChange } from '../../store/modules/qnaSlice';

const QnaItem = ({ id, title, body, isPin, date }) => {
    const { userID } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const dispacth = useDispatch();

    return (
        <li className={isPin ? 'active' : ''}>
            <div className='click-wrap' onClick={() => navigate(`${id}`)}>
                <p>
                    {date.year}.{date.month}.{date.day}
                </p>
                <p>{title}</p>
                <span>{body}</span>
            </div>
            {userID === 'admin' && (
                <i
                    className={isPin ? 'xi-star' : 'xi-star-o'}
                    onClick={() => dispacth(isPinChange(id))}
                />
            )}
        </li>
    );
};

export default QnaItem;
