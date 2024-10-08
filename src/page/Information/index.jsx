import { useParams } from 'react-router-dom';
import { InformationWrap } from './styled';
import { InnerWrap } from '../../styled/Style';

const Information = () => {
    const { category } = useParams();
    return (
        <InformationWrap>
            <InnerWrap>
                <h2>{category}</h2>
            </InnerWrap>
        </InformationWrap>
    );
};

export default Information;
