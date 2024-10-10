import { useNavigate } from 'react-router-dom';
import QnaList from '../../components/qna/QnaList';
import { InnerWrap } from '../../styled/Style';
import { Button } from '../../ui/styled';
import { QnAWrap } from './styled';
import { useSelector } from 'react-redux';

const QnA = () => {
    const { isAuth } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    return (
        <QnAWrap>
            <InnerWrap>
                <h2>Q&A</h2>
                <QnaList />
                <div className='btn-wrap'>
                    <Button
                        width='250px'
                        height='50px'
                        onClick={() => (isAuth ? navigate('newadd') : navigate('/login'))}
                    >
                        글 작성
                    </Button>
                </div>
            </InnerWrap>
        </QnAWrap>
    );
};

export default QnA;
