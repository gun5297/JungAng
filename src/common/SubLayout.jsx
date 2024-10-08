import { Outlet } from 'react-router-dom';
import Layout from './Layout';

const SubLayout = () => {
    return (
        <>
            <Layout />
            <Outlet />
        </>
    );
};

export default SubLayout;
