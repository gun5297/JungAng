import styled from 'styled-components';

export const RoomListWrap = styled.ul`
    margin-bottom: 80px;
    .swiper {
        width: 100%;
        padding-top: 50px;
        padding-bottom: 50px;
    }
    .swiper-slide {
        background-position: center;
        background-size: cover;
        width: 500px;
        height: 600px;
    }
    .swiper-slide img {
        display: block;
        width: 100%;
    }
`;
export const RoomItemWrap = styled.li`
    position: relative;
    .text-wrap {
        width: 90%;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background: rgba(255, 255, 255, 0.8);
        box-sizing: border-box;
        padding: 40px;
        opacity: 0.1;
        transition: 0.6s;
        &:hover {
            opacity: 1;
        }
        p {
            &.title {
                font-size: 25px;
                margin-bottom: 10px;
            }
            &.btn-wrap {
                margin-top: 30px;
            }
            span {
                margin-right: 5px;
                opacity: 0.5;
                background-color: rgba(0, 0, 0, 0.2);
                padding: 2px 5px;
                font-size: 12px;
            }
        }
    }
`;
export const RoomInfoWrap = styled.div`
    width: 100%;
    h2 {
        border-bottom: 1px solid var(--main-color);
        padding-bottom: 50px;
        margin-bottom: 0;
    }
    .text-wrap {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        p {
                width: 50%;
                text-align: center;
                font-weight: 700;
                font-size: 50px;
                color: var(--main-color);
                line-height: 5;
            }
        }
        ul {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            margin-bottom: 50px;
            li {
                &.t{
                    width: 40%;
                    margin-bottom: 50px;
                    background: #fafafa;
                    color: var(--main-color);
                    border: 1px solid var(--main-color);
                    text-align: center;
                    i{
                        cursor: pointer;
                    }
                    &.active{
                        i{
                            color: red;
                        }
                    }
                }
                &:not(:last-of-type) {
                    margin-right: 20px;
                }
                font-size: 20px;
                background: var(--main-color);
                padding: 10px 30px;
                color: #fafafa;
                border-radius: 10px;
            }
        }
    }
    .img-wrap {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        width: 100%;
        overflow: hidden;
        article {
            width: 30%;
            padding: 1%;
            margin: auto;
            img {
                width: 100%;
                object-fit: cover;
            }
            span {
            }
        }
    }
`;
