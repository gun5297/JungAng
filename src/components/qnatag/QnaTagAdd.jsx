import { useState } from 'react';
import { Button } from '../../ui/styled';
import { useDispatch, useSelector } from 'react-redux';
import { isNewTagAdd } from '../../store/modules/qnaTagSlice';

const QnaTagAdd = ({ conid }) => {
    const { user, userID } = useSelector((state) => state.auth);
    const [body, setBody] = useState('');
    const dispatch = useDispatch();
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(isNewTagAdd({ user, body, conid, userID }));
        setBody('');
    };
    return (
        <form onSubmit={onSubmit}>
            <input type='text' value={body} onChange={(e) => setBody(e.target.value)} />
            <Button>댓글 달기</Button>
        </form>
    );
};

export default QnaTagAdd;
