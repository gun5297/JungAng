import { BrowserRouter, Routes, Route, HashRouter, Link } from 'react-router-dom';
import {
    Admin,
    Findingaway,
    Information,
    Login,
    Main,
    Mypage,
    QnA,
    QnAbody,
    Register,
    Rservation,
    Search,
} from './page';
import GlobalStyle from './styled/GlobalStyle';
import QnaAddForm from './components/qna/QnaAddForm';
import QnaEditForm from './components/qna/QnaEditForm';
import RoomInfo from './components/room/RoomInfo';
import { Layout, SubLayout } from './common';
import ReservationaAddForm from './components/reservation/ReservationaAddForm';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <GlobalStyle />
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<Main />} />
                        <Route path='search/:keyword' element={<Search />} />
                        <Route path='details'>
                            <Route index element={<SubLayout />} />
                            <Route path=':category' element={<Information />}>
                                <Route path=':datanum' element={<RoomInfo />} />
                            </Route>
                        </Route>
                        <Route path='qna'>
                            <Route index element={<QnA />} />
                            <Route path=':contentID' element={<QnAbody />} />
                            <Route path='newadd' element={<QnaAddForm />} />
                            <Route path='editqna/:contentID' element={<QnaEditForm />} />
                        </Route>
                        <Route path='reservation' element={<Rservation />} />
                        <Route path='login' element={<Login />} />
                        <Route path='register' element={<Register />} />
                        <Route path='mypage' element={<Mypage />} />
                        <Route path=':category/:datanum' element={<RoomInfo />} />
                        <Route
                            path='details/:category/:datanum/reservation'
                            element={<ReservationaAddForm />}
                        />
                        <Route path='findingaway' element={<Findingaway />} />
                    </Route>
                    <Route path='/admin' element={<Admin />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
