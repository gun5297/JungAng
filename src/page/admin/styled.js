import styled from 'styled-components';

export const AdminWrap = styled.div`
    width: 100%;
    min-height: 100vh;
    box-sizing: border-box;
    #header {
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 80px;
        h1 {
            height: 100px;
            cursor: pointer;
            img {
                height: 100%;
            }
        }
    }
    .event-len {
        ul {
            display: flex;
            justify-content: center;
            align-items: center;
            li {
                width: 200px;
                height: 100px;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: var(--main-color);
                color: #fafafa;
                margin-right: 20px;
                flex-direction: column;
                border-radius: 10px;
                p {
                    font-size: 20px;
                }
            }
        }
    }
`;
