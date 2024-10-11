import styled from 'styled-components';

export const LoginWrap = styled.div`
    .inner {
        padding: 100px 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 650px;
    }
    h2 {
        font-size: 30px;
        font-weight: 700;
        margin-bottom: 50px;
    }
    p {
        margin-bottom: 30px;
        position: relative;
        label {
            display: block;
            width: 110px;
        }
        input[type='email'],
        input[type='password'],
        input[type='text'] {
            margin-top: 5px;
            width: 350px;
            box-sizing: border-box;
            height: 40px;
            padding: 0 10px;
        }

        &:last-child {
            margin-top: 50px;
            text-align: center;
        }
        i {
            position: absolute;
            font-size: 20px;
            right: 20px;
            top: 40px;
            cursor: pointer;
            &:hover {
                color: red;
            }
        }
    }
    em {
        &:not(:first-of-type) {
            cursor: pointer;
            &:hover {
                font-weight: 700;
            }
        }
        margin-right: 10px;
    }
`;
