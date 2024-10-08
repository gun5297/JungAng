import { SpinnerWrap } from '../styled/Style';

const Spinner = () => {
    return (
        <SpinnerWrap>
            <div className='spinner' aria-label='spinner-icon'>
                <div className='spinner-circle'></div>
            </div>
        </SpinnerWrap>
    );
};

export default Spinner;
