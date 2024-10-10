import { useNavigate } from 'react-router-dom';
import { Button } from '../../ui/styled';

const LikeItem = ({ id, Bigimg, like, title, type, keyword, deposit, rent, nav }) => {
    const navigate = useNavigate();
    return (
        <li>
            <div className='img-wrap'>
                <img src={Bigimg} />
            </div>
            <div className='like-wrap'>
                <i className='xi-heart' />
                <span>{like}</span>
            </div>
            <div className='text-wrap'>
                <p className='t'>{title}</p>
                <span className='won'>{type}</span>
                <p className='won'>
                    <em>{deposit}</em>/<em>{rent}</em>만원
                </p>
                <ul>
                    {keyword.map((key, idx) => (
                        <li key={idx}>#{key}</li>
                    ))}
                </ul>
            </div>
            <div className='btn-wrap'>
                <Button
                    bdra='10px'
                    width='100%'
                    height='50px'
                    onClick={() => navigate(`/${nav}/${id}`)}
                >
                    자세히보기
                </Button>
            </div>
        </li>
    );
};

export default LikeItem;
