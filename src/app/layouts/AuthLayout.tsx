import React, {useEffect, useState, useContext} from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const AuthLayout = (): React.ReactElement => {
    return (<>
        <div>
            <Outlet />
        </div>
    </>)
}

export default AuthLayout;