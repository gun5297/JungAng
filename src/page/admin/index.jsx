import { useSelector } from 'react-redux';
import { AdminWrap } from './styled';
import Spinner from '../../common/Spinner';
import { InnerWrap } from '../../styled/Style';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
    const [ip, setIp] = useState();
    const { login, isAuth, user, userID } = useSelector((state) => state.auth);
    const { qna } = useSelector((state) => state.qna);
    const { qnaTag } = useSelector((state) => state.qnaTag);
    const { reservation } = useSelector((state) => state.reservation);

    const isLoginNew = login.flatMap((login) => login.isNew);
    const isQnaNew = qna.flatMap((qna) => qna.isNew);
    const isQnaTagNew = qnaTag.flatMap((tag) => tag.isNew);
    const isResNew = reservation.flatMap((res) => res.isNew);

    const navigate = useNavigate();
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

                <div className='event-len'>
                    <ul>
                        <li>
                            <p>신규회원</p>
                            <p>{isLoginNew.length}</p>
                        </li>
                        <li>
                            <p>신규예약</p>
                            <p>{isResNew.length}</p>
                        </li>
                        <li>
                            <p>신규문의</p>
                            <p>{isQnaNew.length}</p>
                        </li>
                        <li>
                            <p>신규댓글</p>
                            <p>{isQnaTagNew.length}</p>
                        </li>
                    </ul>
                </div>
            </AdminWrap>
        );
};

export default Admin;
