import LikeList from '../../components/main/LikeList';
import Search from '../../components/main/Search';
import Visual from '../../components/main/Visual';
import { InnerWrap } from '../../styled/Style';
import { MainWrap } from './styled';

const Main = () => {
    return (
        <MainWrap>
            <Visual />
            <InnerWrap className='inner'>
                <Search />
                <h2>중앙 인기매물 TOP4</h2>
                <LikeList />
            </InnerWrap>
        </MainWrap>
    );
};

export default Main;
