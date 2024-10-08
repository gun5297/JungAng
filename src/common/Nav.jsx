import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { isLogout } from '../store/modules/authSlice';
const Nav = () => {
    const { isAuth } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <>
            <div className='left'>
                <ul className='nav'>
                    <li>
                        <Link to='details/bluectiy'>
                            블루시티
                            <span>전세/월세</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='details/dupluse'>
                            두플라스
                            <span>전세/월세</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='qna'>
                            문의하기
                            <span>Q&A</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={isAuth ? 'reservation' : 'login'}>
                            예약확인
                            <span>Reservation</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='right'>
                {!isAuth ? (
                    <ul className='log-out'>
                        <li>
                            <Link to='login'>로그인</Link>
                        </li>
                        <li>
                            <Link to='register'>회원가입</Link>
                        </li>
                    </ul>
                ) : (
                    <ul className='log-on'>
                        <li>
                            <Link to='mypage'>마이페이지</Link>
                        </li>
                        <li>
                            <a
                                href='#'
                                onClick={() => {
                                    dispatch(isLogout());
                                    navigate('/');
                                }}
                            >
                                로그아웃
                            </a>
                        </li>
                    </ul>
                )}
            </div>
        </>
    );
};

export default Nav;
