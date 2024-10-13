import styled from 'styled-components';

export const FORM = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    margin-bottom: 80px;
    input {
        width: 500px;
        box-sizing: border-box;
        height: 60px;
        border-radius: 10px;
        border: none;
        margin-right: 20px;
        outline: none;
        text-align: center;
        font-size: 18px;
        box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
    }
    button {
        i {
            font-size: 25px;
            font-weight: 700;
            transition: 0.3s;
        }
        &:hover {
            i {
                font-size: 30px;
            }
        }
    }
`;

export const LIKELIST = styled.ul`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 80px;
    li {
        width: 25%;
        padding: 20px;
        box-sizing: border-box;
        position: relative;
        .img-wrap {
            width: 100%;
            margin-bottom: 10px;
            img {
                width: 100%;
            }
        }
        .like-wrap {
            display: flex;
            align-items: center;
            justify-content: end;
            position: absolute;
            right: 30px;
            top: 30px;
            i {
                font-size: 20px;
                cursor: pointer;
                color: red;
            }
            span {
                color: #fafafa;
                font-weight: 700;
            }
        }
        .text-wrap {
            display: flex;
            flex-wrap: wrap;
            align-items: end;
            justify-content: space-between;
            font-size: 20px;
            margin-bottom: 10px;
            .won {
                margin-bottom: 20px;
            }
            span {
                display: block;
                margin-right: 20px;
            }
            p {
                font-size: 25px;
                font-weight: 700;
                color: var(--main-color);

                &.t {
                    width: 100%;
                    text-align: center;
                    margin: 10px 0;
                    background: var(--main-color);
                    opacity: 0.7;
                    border-radius: 10px;
                    color: #fafafa;
                    box-sizing: border-box;
                    padding: 5px;
                    font-size: 20px;
                }
                em {
                    margin: 0px 5px;
                }
            }
            ul {
                display: flex;
                align-items: center;
                flex-wrap: wrap;
                width: 100%;
                li {
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    margin-right: 5px;
                    margin-bottom: 5px;
                    opacity: 0.5;
                    background-color: rgba(0, 0, 0, 0.2);
                    padding: 2px 5px;
                    font-size: 12px;
                    text-align: center;
                }
            }
        }
        .btn-wrap {
            margin-top: 20px;
        }
    }
`;

export const VISUALWRAP = styled.div`
    .img-wrap {
        height: 600px;
        overflow: hidden;
        background-color: #000;
        img {
            opacity: 0.9;
            transition: 0.5s;
            &:hover {
                opacity: 1;
            }
        }
    }
    .swiper {
        width: 100%;
        height: 100%;
    }
    .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .swiper-slide img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const SearchItemWrap = styled.li`
    width: 24%;
    box-sizing: border-box;
    box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
    padding: 0px 10px;
    opacity: 0.9;
    transition: 0.3s;
    margin-bottom: 50px;
    &:hover {
        opacity: 1;
    }
    &:not(:nth-child(4n)) {
        margin-right: 1%;
    }
    .img-wrap {
        width: 100%;
        img {
            width: 100%;
        }
    }
    .text-wrap {
        margin: 20px 0;
        p {
            font-size: 20px;
        }
        ul {
            display: flex;
            align-items: center;
            width: 100%;
            justify-content: start;
            margin-top: 20px;
            height: 25px;
            overflow: hidden;
            li {
                margin-right: 3px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                margin-right: 5px;
                margin-bottom: 5px;
                opacity: 0.5;
                background-color: rgba(0, 0, 0, 0.2);
                padding: 2px 5px;
                font-size: 12px;
                text-align: center;
            }
        }
    }
    .btn-wrap {
        margin-bottom: 20px;
    }
`;
