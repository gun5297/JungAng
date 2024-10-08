import styled from 'styled-components';

export const MyPageWrap = styled.div`
    .reconfirmation {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
        label {
            display: block;
            width: 500px;
            margin-bottom: 10px;
        }
        input {
            display: block;
            width: 500px;
            height: 40px;
            box-sizing: border-box;
            margin-bottom: 10px;
        }
    }
    .MyModify {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .inp-wrap {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 10px;
            position: relative;
            label {
                display: block;
                width: 100px;
            }
            input {
                display: block;
                width: 300px;
                height: 40px;
                box-sizing: border-box;
                padding: 10px;
            }
            i {
                position: absolute;
                font-size: 20px;
                right: 20px;
                top: 10px;
                cursor: pointer;
                &:hover {
                    color: red;
                }
            }
        }
        .btn-wrap {
            margin-top: 30px;
        }
    }
`;
