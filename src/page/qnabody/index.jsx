import { useNavigate, useParams } from 'react-router-dom';
import { QnAbodyWrap } from './styled';
import { InnerWrap } from '../../styled/Style';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../../ui/styled';
import { isDelQnA } from '../../store/modules/qnaSlice';
import { useEffect, useState } from 'react';
import QnaTagItem from '../../components/qnatag/QnaTagItem';
import QnaTagAdd from '../../components/qnatag/QnaTagAdd';

const QnAbody = () => {
    const { contentID } = useParams();
    const { userID, isAuth } = useSelector((state) => state.auth);
    const { qna } = useSelector((state) => state.qna);
    const { qnaTag } = useSelector((state) => state.qnaTag);
    const onQna = qna.find((qna) => qna.id === Number(contentID));
    const dispacth = useDispatch();
    const navigate = useNavigate();
    return (
        <QnAbodyWrap>
            <InnerWrap className='inner'>
                <div className='title-wrap'>
                    <p>{onQna.title}</p>
                    <span>게시글 번호: {onQna.id}</span>
                </div>
                <div className='body-wrap'>
                    <p>{onQna.body}</p>
                </div>
                {onQna.userID === userID || userID === 'admin' ? (
                    <div className='btn-wrap'>
                        <Button onClick={() => navigate(`/qna/editqna/${onQna.id}`)}>수정</Button>
                        <Button onClick={() => dispacth(isDelQnA(onQna.id)) & navigate('/qna')}>
                            삭제
                        </Button>
                    </div>
                ) : null}
                <div className='userInfo-wrap'>
                    <span>작성자 : {onQna.user}</span>
                    <span>
                        {onQna.date.year}년 {onQna.date.month}월 {onQna.date.day}일{' '}
                        {onQna.date.hours}시 {onQna.date.minutes}분에 작성된 문의글입니다.
                    </span>
                </div>
                <div className='tag-wrap'>
                    <p>댓글 {qnaTag.filter((tag) => tag.conid == onQna.id)?.length || 0}</p>
                    {isAuth ? (
                        <>
                            <QnaTagAdd conid={onQna.id} />
                        </>
                    ) : (
                        <p>로그인 후 이용가능합니다.</p>
                    )}
                    <ul>
                        {qnaTag.map((tag) =>
                            tag.conid === onQna.id ? <QnaTagItem key={tag.id} {...tag} /> : null
                        )}
                    </ul>
                </div>
            </InnerWrap>
        </QnAbodyWrap>
    );
};

export default QnAbody;
