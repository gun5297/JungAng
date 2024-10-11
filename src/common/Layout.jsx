import { Link, Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
const Layout = () => {
    const { userID } = useSelector((state) => state.auth);
    const { reservation } = useSelector((state) => state.reservation);
    const isNew = reservation.flatMap((res) => res.isNew);
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
                    {isNew.length > 0 && on && (
                        <div className='admin-bg'>
                            <p>{isNew.length}개의 신규 알림이 있습니다.</p>
                        </div>
                    )}
                </Link>
            )}
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default Layout;
