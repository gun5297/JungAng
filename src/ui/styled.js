import styled from 'styled-components';

export const Button = styled.button`
    width: ${(props) => props.width || '100px'};
    height: ${(props) => props.height || '40px'};
    background: #5d4037;
    border-radius: ${(props) => props.bdra};
    border: none;
    color: #fafafa;
    transition: 0.3s;
    font-size: 16px;
    cursor: pointer;
    &:hover {
        background: #3e2723;
    }
`;
