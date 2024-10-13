import { useDispatch, useSelector } from 'react-redux';
import QnaItem from './QnaItem';
import { QnaListWrap } from './styled';
import Spinner from '../../common/Spinner';
import { useEffect, useState } from 'react';
import { getQna } from '../../store/modules/getThunk';
import { useSearchParams } from 'react-router-dom';
import QnaPaging from './QnaPaging';

const QnaList = () => {
    const { qna, loading } = useSelector((state) => state.qna);
    const [searchParams, setSearchParams] = useSearchParams();
    const q = searchParams.get('key') || '';

    const onQna = qna.filter(
        (qna) =>
            qna.title.toLowerCase().includes(q.toLowerCase()) ||
            qna.body.toLowerCase().includes(q.toLowerCase())
    );

    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 10;
    const totalPage = onQna.length;
    const lastPost = currentPage * postsPerPage;
    const firstPost = lastPost - postsPerPage;
    const pageNumber = Math.ceil(totalPage / postsPerPage);
    const currentPosts = onQna.slice(firstPost, lastPost);
    const onCurrent = (id) => {
        setCurrentPage(id);
    };
    const pageChange = (x) => {
        if (x == 'next') {
            setCurrentPage((cnt) => (cnt < pageNumber ? cnt + 1 : cnt));
        } else if (x == 'prev') {
            setCurrentPage((cnt) => (cnt > 1 ? cnt - 1 : cnt));
        } else if (x == 'first') {
            setCurrentPage(1);
        } else if (x == 'last') {
            setCurrentPage(pageNumber);
        } else {
            alert('잘못 선택하셨습니다.');
        }
    };

    const dispatch = useDispatch();
    const changeInput = (e) => {
        const key = e.target.value;
        if (key) {
            setSearchParams({ key });
        } else {
            setSearchParams({});
        }
    };

    useEffect(() => {
        dispatch(getQna());
    }, [dispatch]);
    if (loading) return <Spinner />;
    if (qna && !loading)
        return (
            <>
                <div className='inp-wrap'>
                    <input
                        type='text'
                        name='sec'
                        id='sec'
                        value={q}
                        onChange={changeInput}
                        placeholder='검색어를 입력해주세요'
                    />
                </div>
                <QnaListWrap>
                    {qna.map(
                        (qna, idx) =>
                            qna.isPin === true && <QnaItem key={qna.id} {...qna} idx={idx} />
                    )}
                    {currentPosts.map(
                        (qna) => qna.isPin === false && <QnaItem key={qna.id} {...qna} />
                    )}
                </QnaListWrap>
                <QnaPaging pageNumber={pageNumber} onCurrent={onCurrent} pageChange={pageChange} />
            </>
        );
};

export default QnaList;
