import { Button } from '../../ui/styled';

const LikeItem = () => {
    return (
        <li>
            <div className='img-wrap'>
                <img src='https://via.placeholder.com/400x400' />
            </div>
            <div className='like-wrap'>
                <i className='xi-heart' />
                <span>11</span>
            </div>
            <div className='text-wrap'>
                <span>{'전세' || '월세'}</span>
                <p>
                    <em>500</em>/<em>50</em>만원
                </p>
            </div>
            <Button bdra='10px' width='100%'>
                자세히보기
            </Button>
        </li>
    );
};

export default LikeItem;
