import { HeaderWrap } from '../styled/Style';
import { Link } from 'react-router-dom';
import Nav from './Nav';

const Header = () => {
    return (
        <HeaderWrap>
            <div className='inner'>
                <h1>
                    <Link to='/'>
                        <img src='/images/logo.png' alt='Logo' />
                    </Link>
                </h1>
                <Nav />
            </div>
        </HeaderWrap>
    );
};

export default Header;
