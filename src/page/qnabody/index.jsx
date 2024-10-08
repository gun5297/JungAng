import { useParams } from 'react-router-dom';
import { QnAbodyWrap } from './styled';
import { InnerWrap } from '../../styled/Style';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const QnAbody = () => {
    const { contentID } = useParams();
    const { qna } = useSelector((state) => state.qna);
    const onQna = qna.find((qna) => qna.id === Number(contentID));
    return (
        <QnAbodyWrap>
            <InnerWrap>
                <h2>{onQna.title}</h2>
            </InnerWrap>
        </QnAbodyWrap>
    );
};

export default QnAbody;
