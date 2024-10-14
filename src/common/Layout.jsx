import { Link, Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import BottomNav from './BottomNav';
const Layout = () => {
    const { login, userID } = useSelector((state) => state.auth);
    const { qna } = useSelector((state) => state.qna);
    const { qnaTag } = useSelector((state) => state.qnaTag);
    const { reservation } = useSelector((state) => state.reservation);

    const isLoginNew = login.filter((login) => login.isNew);
    const isQnaNew = qna.filter((qna) => qna.isNew);
    const isQnaTagNew = qnaTag.filter((tag) => tag.isNew);
    const isResNew = reservation.filter((res) => res.isNew);

    const isNew = isLoginNew.length + isQnaNew.length + isQnaTagNew.length + isResNew.length;
    const [on, setOn] = useState(true);
    useEffect(() => {
        if (userID === 'admin') {
            const timer = setTimeout(() => setOn(false), 2000);
            return () => clearTimeout(timer);
        }
    }, [userID]);
    return (
        <>
            {userID === 'admin' && (
                <Link to='/admin' onClick={() => setOn(false)}>
                    <div className='admin-nav'>Go Admin Page</div>
                    {isNew > 0 && on && (
                        <div className='admin-bg'>
                            <p>{isNew}개의 신규 알림이 있습니다.</p>
                        </div>
                    )}
                </Link>
            )}
            <Header />
            <Outlet />
            <Footer />
            <BottomNav />
        </>
    );
};

export default Layout;
