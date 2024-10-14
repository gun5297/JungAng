import { RoomItemWrap } from './styled';
import { Button } from '../../ui/styled';
import { useNavigate } from 'react-router-dom';

const RoomItem = ({ id, Bigimg, title, type, keyword }) => {
    const navigate = useNavigate();
    const onClick = () => {
        window.scrollTo({
            top: 1000,
            behavior: 'smooth',
        });
    };
    return (
        <RoomItemWrap onClick={() => navigate(`${id}`)}>
            <div className='img-wrap'>
                <img src={Bigimg} alt={title} />
            </div>
            <div className='text-wrap'>
                <p className='title'>{title}</p>
                <p>{type}</p>
                <p>
                    {keyword.map((item, idx) => (
                        <span key={idx}>{item}</span>
                    ))}
                </p>
                <p className='btn-wrap'>
                    <Button onClick={onClick}>자세히보기</Button>
                </p>
            </div>
        </RoomItemWrap>
    );
};

export default RoomItem;
