import React from 'react';
import  {Outlet} from 'react-router-dom'
import Nav from '../Navigation/NavBar';
import Footer from '../Footer/Foot'

function Layout(props) {
    return (
        <>
            <Nav />
            <Outlet />
            <Footer />
        </>
    );
}

export default Layout;