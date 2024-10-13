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
            span {
                opacity: 0.5;
            }
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
                width: 110px;
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
        span {
            display: block;
            position: absolute;
            right: 30px;
            top: 50%;
            transform: translateY(-50%);
            opacity: 0.01;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            width: 300px;
            text-align: end;
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
export const QnaPagingWrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 80px 0;
    a {
        padding: 0 10px;
        position: relative;
        &:hover::after {
            content: '';
            width: 50%;
            height: 2px;
            background: #424242;
            position: absolute;
            left: 50%;
            bottom: 0;
            transform: translateX(-50%);
        }
    }
`;
