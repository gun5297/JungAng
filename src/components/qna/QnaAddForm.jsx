import { useEffect, useState } from 'react';
import { QnaAddFormWrap } from './styled';
import { InnerWrap } from '../../styled/Style';
import { Button } from '../../ui/styled';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { isAddNew } from '../../store/modules/qnaSlice';

const QnaAddForm = () => {
    const { user, userID } = useSelector((state) => state.auth);
    const [inpData, setInpData] = useState({ title: '', body: '' });
    const [isDate, setIsDate] = useState(new Date());
    const date = {
        year: isDate.getFullYear(),
        month: isDate.getMonth() + 1,
        day: isDate.getDate(),
        hours: isDate.getHours(),
        minutes: isDate.getMinutes(),
    };
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const onChange = (e) => {
        const { name, value } = e.target;
        setInpData({ ...inpData, [name]: value });
    };
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(isAddNew({ user, userID, ...inpData, date }));
        navigate('/qna');
    };
    useEffect(() => {
        const timer = setInterval(() => {
            setIsDate(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);
    return (
        <QnaAddFormWrap onSubmit={onSubmit}>
            <InnerWrap className='inner'>
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
                    <Button type='submit'>등록</Button>
                    <Button onClick={() => navigate(-1)}>취소</Button>
                </div>
                <span className='date-wrap'>
                    {date.year}년 {date.month}월 {date.day}일 {date.hours}시 {date.minutes}분
                </span>
            </InnerWrap>
        </QnaAddFormWrap>
    );
};

export default QnaAddForm;
