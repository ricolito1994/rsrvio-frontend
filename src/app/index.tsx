// import node and react dependencies here
import React, {
    useState,
    useEffect,
    useContext
} from 'react'
import { Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
// Context
import { AppContext } from './context';
// Layouts
import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';
// pages
import ListingsPage from './pages/ListingsPage';
import AddonsPage from './pages/AddonsPage';
import MediaPage from './pages/MediaPage';
import Dashboard from './pages/Dashboard';
// styles

// hooks

// and more ...

const App = () : React.ReactElement => {

    const appContext = useContext<any>(AppContext);

    const APP_TITLE = import.meta.env.REACT_APP_APP_NAME

    const {
        /**
         * whatever values you've
         * defined on  your appContext
         * you can carry it out here
         */
    } = appContext;

    return (
        <div className="App">
            <Helmet>
                <title>{APP_TITLE}</title>
            </Helmet>
            {/**
            * 
            * implement your login page display
            * you need to have a condition wherein 
            * if accessToken is not present
            * we should render this instead
            * 
            * <Route element={<AuthLayout />}>
            *  <Route path="/" element={<LoginPage />} />
            * </Route>
            */}
            <Routes>
                {/**
                 * elements under this route belongs
                 * to your authenticated users route
                 * ex dashboard, about, etc.
                 */}
                <Route element={<MainLayout/>}>
                    <Route path='/' element={<Dashboard />} />
                    <Route path='/listings' element={<ListingsPage />}>
                        {/** if you have other routes inside listings */}
                    </Route>
                    <Route path='/addons' element={<AddonsPage />}></Route>
                    <Route path='/media' element={<MediaPage />}></Route>
                </Route>
            </Routes>
        </div>
    )
}

export default App;