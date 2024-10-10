import styled from 'styled-components';

export const QnAbodyWrap = styled.div`
    .inner {
        position: relative;
        div {
            border-bottom: 1px solid var(--main-color);
            margin-bottom: 20px;
            font-size: 18px;
            box-sizing: border-box;
            padding: 10px 5px;
            &.title-wrap {
                display: flex;
                justify-content: space-between;
                font-size: 20px;
            }
            &.body-wrap {
                min-height: 500px;
                margin-bottom: 0;
            }
            &.btn-wrap {
                border: none;
                position: absolute;
                right: 0;
                top: 580px;
            }
            &.userInfo-wrap {
                display: flex;
                align-items: center;
                justify-content: end;
                span {
                    display: block;
                    margin-right: 20px;
                }
            }
            &.tag-wrap {
                > p {
                    margin-bottom: 10px;
                }
                ul {
                    li {
                        border: 1px solid var(--main-color);
                        box-sizing: border-box;
                        padding: 5px 10px;
                        &:not(:last-of-type) {
                            margin-bottom: 10px;
                        }
                        span {
                            font-size: 16px;
                            &.del-btn {
                                font-size: 14px;
                                color: #999;
                                cursor: pointer;
                                margin-left: 98%;
                            }
                        }
                    }
                }
            }
        }
    }
`;
