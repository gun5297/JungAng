import styled from 'styled-components';

export const ReservationaAddFormWrap = styled.form`
    min-height: 600px;
    .inner {
        display: flex;
        justify-content: center;
        align-items: center;
        .img-wrap {
            width: 40%;
            margin-right: 5%;
            img {
                width: 100%;
            }
        }
        .text-wrap {
            width: 55%;
            h3 {
                font-size: 30px;
                border-bottom: 1px solid var(--main-color);
                padding-bottom: 10px;
            }
            p {
                font-size: 18px;
                margin: 20px 0;
            }
            .btn-wrap {
                margin-top: 80px;
                button {
                    font-size: 20px;
                }
            }
        }
        ul.calendar {
            display: flex;
            flex-wrap: wrap;
            margin: 50px 0;
            li {
                margin-right: 10px;
                box-sizing: border-box;
                padding: 5px 20px;
                background-color: #fcfcfc;
                margin-bottom: 10px;
                transition: all 0.3s;
                box-shadow: rgba(33, 35, 38, 0.1) 0px 1px 1px -1px;
                cursor: pointer;
                &:hover {
                    background: var(--main-color);
                    color: #fafafa;
                }
                &.active {
                    background: var(--main-color);
                    color: #fafafa;
                }
            }
        }
        .calendar-btn-wrap {
            display: flex;
            align-items: center;
            justify-content: space-around;
            i {
                cursor: pointer;
                font-size: 30px;
            }
        }
    }
`;
