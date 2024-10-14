import { useNavigate } from 'react-router-dom';
import { BottomNavWrap } from '../styled/Style';

const BottomNav = () => {
    const navigate = useNavigate();
    return (
        <BottomNavWrap className='btn-wrap'>
            <i className='xi-arrow-left' onClick={() => navigate(-1)} />
            <i className='xi-arrow-right' onClick={() => navigate(+1)} />
        </BottomNavWrap>
    );
};

export default BottomNav;
