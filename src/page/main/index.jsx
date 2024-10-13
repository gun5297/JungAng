import { useSelector } from 'react-redux';
import LikeList from '../../components/main/LikeList';
import Search from '../../components/main/Search';
import Visual from '../../components/main/Visual';
import { InnerWrap } from '../../styled/Style';
import { MainWrap } from './styled';
import ForList from '../../components/main/ForList';

const Main = () => {
    const { user, isAuth } = useSelector((state) => state.auth);
    return (
        <MainWrap>
            <Visual />
            <InnerWrap className='inner'>
                <Search />
                <h2>중앙 인기매물 TOP4</h2>
                <LikeList />
                <h2>{isAuth ? user : '비회원'}님의 추천 매물</h2>
                <ForList />
            </InnerWrap>
        </MainWrap>
    );
};

export default Main;
