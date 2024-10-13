import { useSelector } from 'react-redux';
import { LIKELIST } from './styled';
import { useEffect, useState } from 'react';
import ForItem from './ForItem';

const ForList = () => {
    const { room } = useSelector((state) => state.room);
    const { login, userID, isAuth } = useSelector((state) => state.auth);
    const [userKeyword, setUserKeyword] = useState('구월동');
    const onRoom = [...room['bluectiy'], ...room['dupluse']].filter((room) =>
        room.keyword.some((key) => key.includes(userKeyword))
    );
    const onUser = login.find((login) => login.userID === userID);
    useEffect(() => {
        if (isAuth) {
            if (onUser.keyword) {
                setUserKeyword(onUser.keyword);
            }
        } else {
            setUserKeyword('구월동');
        }
    }, [isAuth]);
    return (
        <LIKELIST>
            {onRoom.length === 0
                ? [...room['bluectiy'], ...room['dupluse']].map((room, idx) => (
                      <ForItem key={idx} room={room} />
                  ))
                : onRoom.map((room, idx) => <ForItem key={idx} room={room} />)}
        </LIKELIST>
    );
};

export default ForList;
