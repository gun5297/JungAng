import { QnaPagingWrap } from './styled';

const QnaPaging = ({ pageNumber, onCurrent, pageChange }) => {
    const arr = [];
    for (let i = 1; i <= pageNumber; i++) {
        arr.push(i);
    }
    return (
        <QnaPagingWrap>
            <a
                href='#'
                onClick={(e) => {
                    e.preventDefault();
                    pageChange('first');
                }}
            >{`<<`}</a>
            <a
                href='#'
                onClick={(e) => {
                    e.preventDefault();
                    pageChange('prev');
                }}
            >{`<`}</a>
            {arr.map((item) => (
                <a
                    href='#'
                    key={item}
                    onClick={(e) => {
                        e.preventDefault();
                        onCurrent(item);
                    }}
                >
                    {item}
                </a>
            ))}
            <a
                href='#'
                onClick={(e) => {
                    e.preventDefault();
                    pageChange('next');
                }}
            >{`>`}</a>
            <a
                href='#'
                onClick={(e) => {
                    e.preventDefault();
                    pageChange('last');
                }}
            >{`>>`}</a>
        </QnaPagingWrap>
    );
};

export default QnaPaging;
