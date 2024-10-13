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
        h1 {
            height: 100px;
            cursor: pointer;
            img {
                height: 100%;
            }
        }
    }
    .event-len {
        margin-bottom: 80px;
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
                flex-direction: column;
                border: 2px solid var(--main-color);
                transition: all 0.5s;
                cursor: pointer;

                &:not(:last-of-type) {
                    border-right: none;
                }
                &:hover {
                    background: var(--main-color);
                    color: #fafafa;
                }
                p {
                    font-size: 20px;
                    font-weight: 500;
                }
            }
        }
    }
    .data-list {
        width: 100%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        h3 {
            text-align: center;
            font-size: 30px;
            margin-bottom: 20px;
        }
        ul {
            width: 49%;
            border: 1px solid var(--main-color);
            box-sizing: border-box;
            padding: 20px;
            margin-bottom: 1%;
            position: relative;
            span {
                color: #fafafa;
                background: var(--main-color);
                width: 50px;
                text-align: center;
                padding: 3px 0;
                box-sizing: border-box;
                display: block;
                margin-right: 10px;
                font-size: 12px;
                transition: all 0.3s;
                cursor: pointer;
                &.all {
                    position: absolute;
                    right: 20px;
                    top: 20px;
                    font-size: 16px;
                    width: 100px;
                }
                &:hover {
                    background: #6d4c41;
                }
            }
            &:not(:nth-child(2n)) {
                margin-right: 1%;
            }
            li {
                width: 100%;
                display: flex;
                align-items: center;
                margin-bottom: 10px;
                p {
                    margin-right: 10px;
                    min-width: 130px;
                    max-width: 250px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            }
        }
    }
`;
