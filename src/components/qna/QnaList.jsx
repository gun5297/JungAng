import { useDispatch, useSelector } from 'react-redux';
import QnaItem from './QnaItem';
import { QnaListWrap } from './styled';
import Spinner from '../../common/Spinner';
import { useEffect } from 'react';
import { getQna } from '../../store/modules/getThunk';
import { InnerWrap } from '../../styled/Style';

const QnaList = () => {
    const { qna, loading, error } = useSelector((state) => state.qna);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getQna());
    }, []);
    if (loading) return <Spinner />;
    if (qna && !loading)
        return (
            <InnerWrap>
                <QnaListWrap>
                    {qna.map((qna) => qna.isPin === true && <QnaItem key={qna.id} {...qna} />)}
                    {qna.map((qna) => qna.isPin === false && <QnaItem key={qna.id} {...qna} />)}
                </QnaListWrap>
            </InnerWrap>
        );
};

export default QnaList;
