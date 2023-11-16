import {Navigate, NavigateProps, Outlet} from 'react-router-dom';
import {useCookies} from 'react-cookie';
import React from 'react';

type _authType = {
    email: string,
    ttl: number,
    roles: Array<string>
}

const SecuredRoute = (): NavigateProps | React.ReactElement => {
    const [cookies] = useCookies(['_auth']);

    const cookie: _authType|undefined  = cookies._auth;

    if (cookie === undefined) {
        return <Navigate to='/login' replace/>
    }

    return <Outlet />;
}

export default SecuredRoute;
