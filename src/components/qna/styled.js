import styled from 'styled-components';

export const QnaListWrap = styled.ul`
    width: 100%;
    li {
        display: flex;
        align-items: center;
        border: 1px solid var(--main-color);
        margin-bottom: 10px;
        border-radius: 10px;
        user-select: none;
        cursor: pointer;
        position: relative;
        &:hover {
            background: #efebe9;
        }
        &.active {
            background: var(--main-color);
            color: #fafafa;
            &:hover {
                background: #4e342e;
            }
        }
        div.click-wrap {
            display: flex;
            align-items: center;
            width: 100%;
            box-sizing: border-box;
            padding: 10px 50px;
        }
        p {
            font-size: 18px;
            &:first-child {
                width: 50px;
            }
        }
        i {
            position: absolute;
            right: -30px;
            transition: 0.3s;
            color: #000;
            &:hover {
                transform: scale(1.2);
            }
        }
    }
`;
export const QnaAddFormWrap = styled.form`
    .inner {
        position: relative;
        .inp-wrap {
            margin-bottom: 10px;
            border-bottom: 1px solid var(--main-color);
            label {
                display: block;
                font-size: 20px;
            }
            input[type='text'] {
                width: 100%;
                box-sizing: border-box;
                min-height: 40px;
                padding: 5px;
                border: none;
                outline: none;
                font-size: 18px;
            }
            &.body {
                min-height: 500px;
                textarea {
                    width: 100%;
                    min-height: 400px;
                    border: none;
                    outline: none;
                    box-sizing: border-box;
                    padding: 5px;
                    font-size: 18px;
                }
            }
        }
        .date-wrap {
            display: block;
            position: absolute;
            right: 0;
            bottom: 100px;
        }
    }
`;
