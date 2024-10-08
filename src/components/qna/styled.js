import styled from 'styled-components';

export const QnaListWrap = styled.ul`
    width: 100%;
    li {
        display: flex;
        align-items: center;
        border: 1px solid var(--main-color);
        margin-bottom: 10px;
        border-radius: 10px;
        box-sizing: border-box;
        padding: 10px 50px;
        user-select: none;
        cursor: pointer;
        p {
            font-size: 18px;
            &:first-child {
                width: 50px;
            }
        }
    }
`;
export const QnaAddFormWrap = styled.form``;
