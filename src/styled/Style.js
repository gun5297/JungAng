import styled from 'styled-components';

export const HeaderWrap = styled.header`
    position: sticky;
    top: 0;
    width: 100%;
    background: #fff;
    border-bottom: 1px solid #d7ccc8;
    box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
    z-index: 99999;
    opacity: 0.95;
    backdrop-filter: blur(10px);
    h1 {
        width: 250px;
        height: 80px;
    }
    .inner {
        max-width: 1400px;
        height: 80px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: auto;
        .left {
            display: flex;
            align-items: center;
            ul.nav {
                display: flex;
                justify-content: center;
                align-items: center;
                > li {
                    user-select: none;
                    cursor: pointer;
                    transition: 0.3s;
                    position: relative;
                    text-align: center;
                    &:not(:last-of-type) {
                        margin-right: 60px;
                    }
                    &::before,
                    &::after {
                        content: '';
                        width: 100%;
                        height: 1px;
                        position: absolute;
                        left: 0;
                        background-color: #6d4c41;
                        transition: all 0.3s;
                        opacity: 0;
                        transform: scale(0);
                    }
                    &::before {
                        top: 0;
                    }
                    &::after {
                        bottom: -7px;
                    }
                    &:hover {
                        color: #6d4c41;
                        &::before,
                        &::after {
                            opacity: 0.8;
                            transform: scale(1);
                        }
                        a {
                            color: #6d4c41;
                        }
                    }
                    a {
                        font-size: 20px;
                        font-weight: 500;
                        display: block;
                    }
                    span {
                        display: block;
                        line-height: 1;
                        opacity: 0.9;
                        font-size: 14px;
                    }
                }
            }
        }
        .right {
            display: flex;
            align-items: center;
            justify-content: center;
            ul {
                display: flex;
                justify-content: center;
                align-items: center;
                li {
                    position: relative;
                    transition: 0.3s;
                    &:hover {
                        font-weight: 500;
                    }
                    &:first-of-type {
                        margin-right: 20px;
                        &::after {
                            content: '';
                            width: 1px;
                            height: 100%;
                            position: absolute;
                            top: 0;
                            right: -10px;
                            background: #999;
                        }
                    }
                    a {
                        padding: 5px;
                    }
                }
            }
        }
    }
`;

export const NavWrap = styled.nav``;

export const FooterWrap = styled.footer`
    width: 100%;
    box-sizing: border-box;
    background: #3e2723;
    color: #fafafa;
    p {
        margin-bottom: 8px;
        letter-spacing: 1.2px;
        text-align: center;
    }
    ul {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
        li {
            position: relative;
            &::before {
                content: '';
                width: 100%;
                height: 1px;
                background: #fafafa;
                position: absolute;
                left: 0;
                bottom: -3px;
                opacity: 0;
                transform: scale(0);
                transition: 0.3s;
            }
            &:hover {
                &::before {
                    opacity: 0.8;
                    transform: scale(1);
                }
            }
            &:not(:last-of-type) {
                margin-right: 10px;
                &::after {
                    content: '';
                    width: 1px;
                    height: 50%;
                    position: absolute;
                    right: -5px;
                    top: 50%;
                    transform: translateY(-50%);
                    background: #fafafa;
                }
            }
            a {
                color: #fafafa;
                padding: 3px;
                font-weight: 100;
            }
        }
    }
`;

export const SpinnerWrap = styled.div`
    .spinner {
        position: fixed;
        z-index: 10;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
    }
    .spinner-circle {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: inherit;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: inherit;
        padding: 0.5rem 1rem;
    }

    .spinner-circle:before {
        z-index: 5;
        content: '';
        position: absolute;
        border-radius: 50%;
        border: 3px dashed skyblue;
        width: 50px;
        height: 50px;
        border-left: 3px solid transparent;
        border-bottom: 3px solid transparent;
        animation: loading 1s linear infinite;
    }

    .spinner-circle:after {
        content: '';
        position: absolute;
        border-radius: 50%;
        border: 3px dashed skyblue;
        width: 50px;
        height: 50px;
        border-left: 3px solid transparent;
        border-bottom: 3px solid transparent;
        animation: loading 1s ease infinite;
        z-index: 10;
    }

    @keyframes loading {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

export const InnerWrap = styled.div`
    width: 1400px;
    margin: auto;
    padding: 80px 0;
    position: relative;
    box-sizing: border-box;
    h2 {
        font-size: 40px;
        margin-bottom: 80px;
        text-align: center;
    }
`;
