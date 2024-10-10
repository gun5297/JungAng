import { useDispatch, useSelector } from 'react-redux';
import { isQnATagDel } from '../../store/modules/qnaTagSlice';

const QnaTagItem = ({ id, user, body, userID }) => {
    const { userID: uuID } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    return (
        <li>
            <span>{user}</span>
            <p>{body}</p>
            {userID === uuID || uuID === 'admin' ? (
                <span className='del-btn' onClick={() => dispatch(isQnATagDel(id))}>
                    삭제
                </span>
            ) : null}
        </li>
    );
};

export default QnaTagItem;
