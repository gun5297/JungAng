import { useSelector } from 'react-redux';
import { MyPageWrap } from './styled';
import { InnerWrap } from '../../styled/Style';
import { useState } from 'react';
import Reconfirmation from '../../components/log/reconfirmation';
import MyModify from '../../components/log/MyModify';

const MyPage = () => {
    const { user } = useSelector((state) => state.auth);
    const [reconfirmation, setReconfirmation] = useState(false);
    return (
        <MyPageWrap>
            <InnerWrap>
                <h2>{user}님 계정정보 설정</h2>
                {!reconfirmation ? (
                    <Reconfirmation setReconfirmation={setReconfirmation} />
                ) : (
                    <MyModify />
                )}
            </InnerWrap>
        </MyPageWrap>
    );
};

export default MyPage;
