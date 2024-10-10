import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { isPinChange } from '../../store/modules/qnaSlice';

const QnaItem = ({ idx, id, title, body, isPin }) => {
    const { userID } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const dispacth = useDispatch();
    return (
        <li className={isPin ? 'active' : ''}>
            <div className='click-wrap' onClick={() => navigate(`${id}`)}>
                <p>{idx + 1}</p>
                <p>{title}</p>
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
