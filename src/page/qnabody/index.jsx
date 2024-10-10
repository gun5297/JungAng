import { useParams } from 'react-router-dom';
import { QnAbodyWrap } from './styled';
import { InnerWrap } from '../../styled/Style';
import { useSelector } from 'react-redux';
import { Button } from '../../ui/styled';

const QnAbody = () => {
    const { contentID } = useParams();
    const { userID } = useSelector((state) => state.auth);
    const { qna } = useSelector((state) => state.qna);
    const onQna = qna.find((qna) => qna.id === Number(contentID));
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
                {onQna.userID === userID && (
                    <div className='btn-wrap'>
                        <Button>수정</Button>
                        <Button>삭제</Button>
                    </div>
                )}
                <div className='userInfo-wrap'>
                    <span>작성자 : {onQna.user}</span>
                    <span>
                        {onQna.date.year}년 {onQna.date.month}월 {onQna.date.day}일{' '}
                        {onQna.date.hours}시 {onQna.date.minutes}분에 작성된 문의글입니다.
                    </span>
                </div>
                <div className='tag-wrap'>
                    <p>댓글 1</p>
                    <ul>
                        <li>
                            <span>익명123</span>
                            <p>오 그렇군요</p>
                            <span className='del-btn'>삭제</span>
                        </li>
                        <li>
                            <span>익명123</span>
                            <p>오 그렇군요</p>
                            <span className='del-btn'>삭제</span>
                        </li>
                    </ul>
                </div>
            </InnerWrap>
        </QnAbodyWrap>
    );
};

export default QnAbody;
