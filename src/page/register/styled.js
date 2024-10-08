import styled from 'styled-components';

export const RegisterWrap = styled.div`
    .inner {
        padding: 100px 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 750px;
    }
    h2 {
        font-size: 30px;
        font-weight: 700;
        margin-bottom: 50px;
    }
    p {
        margin-bottom: 15px;
        position: relative;
        label {
            display: block;
            width: 110px;
        }
        input[type='email'],
        input[type='password'],
        input[type='tel'],
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
`;
