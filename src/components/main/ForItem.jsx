import { useNavigate } from 'react-router-dom';
import { Button } from '../../ui/styled';

const ForItem = ({ room }) => {
    const navigate = useNavigate();
    return (
        <li>
            <div className='img-wrap'>
                <img src={room.Bigimg} />
            </div>
            <div className='like-wrap'>
                <i className='xi-heart' />
                <span>{room.like}</span>
            </div>
            <div className='text-wrap'>
                <p className='t'>{room.title}</p>
                <span className='won'>{room.type}</span>
                <p className='won'>
                    <em>{room.deposit}</em>/<em>{room.rent}</em>만원
                </p>
                <ul>
                    {room.keyword.map((key, idx) => (
                        <li key={idx}>#{key}</li>
                    ))}
                </ul>
            </div>
            <div className='btn-wrap'>
                <Button
                    bdra='10px'
                    width='100%'
                    height='50px'
                    onClick={() => navigate(`/${room.nav}/${room.id}`)}
                >
                    자세히보기
                </Button>
            </div>
        </li>
    );
};

export default ForItem;
