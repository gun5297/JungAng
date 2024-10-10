import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Information, Login, Main, Mypage, QnA, QnAbody, Register, Rservation } from './page';
import Layout from './common/Layout';
import GlobalStyle from './styled/GlobalStyle';
import SubLayout from './common/SubLayout';
import QnaAddForm from './components/qna/QnaAddForm';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <GlobalStyle />
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<Main />} />
                        <Route path='details'>
                            <Route index element={<SubLayout />} />
                            <Route path=':category' element={<Information />} />
                        </Route>
                        <Route path='qna'>
                            <Route index element={<QnA />} />
                            <Route path=':contentID' element={<QnAbody />} />
                            <Route path='newadd' element={<QnaAddForm />} />
                        </Route>
                        <Route path='reservation' element={<Rservation />} />
                        <Route path='login' element={<Login />} />
                        <Route path='register' element={<Register />} />
                        <Route path='mypage' element={<Mypage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
