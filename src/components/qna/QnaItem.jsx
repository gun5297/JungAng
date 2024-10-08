import { useNavigate } from 'react-router-dom';

const QnaItem = ({ id, title, body, isPin }) => {
    const navigate = useNavigate();
    return (
        <li onClick={() => navigate(`${id}`)}>
            <p>{id}</p>
            <p>{title}</p>
        </li>
    );
};

export default QnaItem;
