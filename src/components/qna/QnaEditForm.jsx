import { useState } from 'react';
import { QnaAddFormWrap } from './styled';
import { InnerWrap } from '../../styled/Style';
import { Button } from '../../ui/styled';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { isChangeQnA } from '../../store/modules/qnaSlice';

const QnaEditForm = ({}) => {
    const { contentID } = useParams();
    const { qna } = useSelector((state) => state.qna);
    const onQna = qna.find((qna) => qna.id === Number(contentID));
    const [inpData, setInpData] = useState({ title: onQna.title, body: onQna.body });
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const onChange = (e) => {
        const { name, value } = e.target;
        setInpData({ ...inpData, [name]: value });
    };
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(isChangeQnA({ contentID, ...inpData }));
        navigate('/qna');
    };
    return (
        <QnaAddFormWrap onSubmit={onSubmit}>
            <InnerWrap className='inner'>
                <h2>수정하기</h2>
                <div className='inp-wrap title'>
                    <label htmlFor='title'>제목</label>
                    <input
                        type='text'
                        name='title'
                        id='title'
                        value={inpData.title}
                        onChange={onChange}
                    />
                </div>
                <div className='inp-wrap body'>
                    <label htmlFor='body'>내용</label>
                    <textarea
                        type='text'
                        name='body'
                        id='body'
                        value={inpData.body}
                        onChange={onChange}
                    />
                </div>
                <div className='btn-wrap'>
                    <Button type='submit'>수정</Button>
                    <Button onClick={() => navigate(`/qna/${contentID}`)}>취소</Button>
                </div>
            </InnerWrap>
        </QnaAddFormWrap>
    );
};

export default QnaEditForm;
