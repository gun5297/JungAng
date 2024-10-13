import { useDispatch, useSelector } from 'react-redux';
import { AdminWrap } from './styled';
import Spinner from '../../common/Spinner';
import { InnerWrap } from '../../styled/Style';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { allNewChangeRes, isNewChangeRes } from '../../store/modules/reservationSlice';
import { allNewChangeTag, isNewChangeTag } from '../../store/modules/qnaTagSlice';
import { allNewChangeQna, isNewChangeQna } from '../../store/modules/qnaSlice';
import { allNewChangeLogin, isNewChangeLogin } from '../../store/modules/authSlice';

const Admin = () => {
    const [ip, setIp] = useState();
    const { login, isAuth, user, userID } = useSelector((state) => state.auth);
    const { qna } = useSelector((state) => state.qna);
    const { qnaTag } = useSelector((state) => state.qnaTag);
    const { reservation } = useSelector((state) => state.reservation);

    const isLoginNew = login.filter((login) => login.isNew);
    const isQnaNew = qna.filter((qna) => qna.isNew);
    const isQnaTagNew = qnaTag.filter((tag) => tag.isNew);
    const isResNew = reservation.filter((res) => res.isNew);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        axios.get('https://geolocation-db.com/json/').then((res) => {
            setIp(res.data.IPv4);
        });
    }, []);
    if (!isAuth || !user === '관리자' || !userID === 'admin')
        return (
            <InnerWrap>
                <Spinner />
                <h2>잘못된 접근입니다.</h2>
                <h2>비정상적인 접근으로 접속을 차단합니다.</h2>
                <h2>{ip}</h2>
            </InnerWrap>
        );
    if (isAuth && user === '관리자' && userID === 'admin')
        return (
            <AdminWrap>
                <header id='header'>
                    <h1 onClick={() => navigate('/admin')}>
                        <img src='images/admin.webp' alt='admin' />
                    </h1>
                    <h1 onClick={() => navigate('/')}>
                        <img src='images/home.webp' alt='home' />
                    </h1>
                </header>
                <InnerWrap>
                    <div className='event-len'>
                        <ul>
                            <li>
                                <p>신규회원</p>
                                <p>{isLoginNew.length}</p>
                            </li>
                            <li onClick={() => navigate('/reservation')}>
                                <p>신규예약</p>
                                <p>{isResNew.length}</p>
                            </li>
                            <li onClick={() => navigate('/qna')}>
                                <p>신규문의</p>
                                <p>{isQnaNew.length}</p>
                            </li>
                            <li onClick={() => navigate('/qna')}>
                                <p>신규댓글</p>
                                <p>{isQnaTagNew.length}</p>
                            </li>
                        </ul>
                    </div>

                    <div className='data-list'>
                        <ul className='isLoginNew'>
                            <h3>신규회원 리스트</h3>
                            <span className='all' onClick={() => dispatch(allNewChangeLogin())}>
                                전체확인
                            </span>
                            {isLoginNew.map((login) => (
                                <li key={'login' + login.id}>
                                    <span
                                        className='ok'
                                        onClick={() => dispatch(isNewChangeLogin(login.userID))}
                                    >
                                        확인
                                    </span>
                                    <p>userID : {login.userID}</p>
                                    <p>name : {login.name}</p>
                                    <p>email : {login.email}</p>
                                </li>
                            ))}
                        </ul>
                        <ul className='isResNew'>
                            <h3>신규예약 리스트</h3>
                            <span className='all' onClick={() => dispatch(allNewChangeRes())}>
                                전체확인
                            </span>
                            {isResNew.map((res) => (
                                <li key={'res' + res.id}>
                                    <span
                                        className='ok'
                                        onClick={() => dispatch(isNewChangeRes(res.id))}
                                    >
                                        확인
                                    </span>
                                    <p>예약자 성함 : {res.user}</p>
                                    <p>
                                        예약일 : {res.mo}월 {res.day}일
                                    </p>
                                    <p>예약 방 : {res.category}</p>
                                </li>
                            ))}
                        </ul>
                        <ul className='isQnaNew'>
                            <h3>신규문의 리스트</h3>
                            <span className='all' onClick={() => dispatch(allNewChangeQna())}>
                                전체확인
                            </span>
                            {isQnaNew.map((qna) => (
                                <li key={'qna' + qna.id}>
                                    <span
                                        className='ok'
                                        onClick={() => dispatch(isNewChangeQna(qna.id))}
                                    >
                                        확인
                                    </span>
                                    <p>게시글 번호 : {qna.id}</p>
                                    <p>제목 : {qna.title}</p>
                                    <p>작성자 : {qna.user}</p>
                                </li>
                            ))}
                        </ul>
                        <ul className='isQnaTagNew'>
                            <h3>신규댓글 리스트</h3>
                            <span className='all' onClick={() => dispatch(allNewChangeTag())}>
                                전체확인
                            </span>
                            {isQnaTagNew.map((tag) => (
                                <li key={'tag' + tag.id}>
                                    <span
                                        className='ok'
                                        onClick={() => dispatch(isNewChangeTag(tag.id))}
                                    >
                                        확인
                                    </span>
                                    <p>댓글 번호 : {tag.id}</p>
                                    <p>게시글 번호 : {tag.conid}</p>
                                    <p>작성자 : {tag.user}</p>
                                    <p>내용 : {tag.body}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </InnerWrap>
            </AdminWrap>
        );
};

export default Admin;
