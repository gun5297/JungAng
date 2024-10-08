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
        }
        .text-wrap {
            display: flex;
            flex-wrap: wrap;
            align-items: end;
            justify-content: space-between;
            font-size: 20px;
            margin-bottom: 10px;
            span {
                display: block;
                margin-right: 20px;
            }
            p {
                font-size: 25px;
                em {
                    margin: 0px 5px;
                }
            }
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
`;
