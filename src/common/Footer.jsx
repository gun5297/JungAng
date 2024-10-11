import { FooterWrap, InnerWrap } from '../styled/Style';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <FooterWrap>
            <InnerWrap>
                <ul>
                    <li>
                        <Link to='details/bluectiy/1'>블루시티</Link>
                    </li>
                    <li>
                        <Link to='details/dupluse/1'>두플라스</Link>
                    </li>
                    <li>
                        <Link to='qna'>문의하기</Link>
                    </li>
                    <li>
                        <Link to='reservation'>예약확인</Link>
                    </li>
                </ul>
                <p>상호 : 중앙공인중개사 | 대표 : 배진희 | 사업자등록번호 : 131-32-87433</p>
                <p>
                    주소 : 인천 남동구 선수촌공원로 37 중앙프라자 105호 중앙공인중개사 (우 : 21582)
                </p>
                <p>이메일 : kjhwsbns@naver.com | 전화 : 032-469-0049</p>
            </InnerWrap>
        </FooterWrap>
    );
};

export default Footer;
