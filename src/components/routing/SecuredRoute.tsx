import {Navigate, Outlet} from "react-router-dom";

// import {useCookies} from 'react-cookie';

const SecuredRoute = ( ) => {
    // const { auth } = useAuthContext();
    // const [cookies] = useCookies(['_auth']);

    // const cookie = cookies._auth

    const isCookkie = true;
    if (!isCookkie) {
        return <Navigate to='/login' replace />
    }

    // if (cookie === undefined) {
    //     return <Navigate to='/login' replace/>
    // }

    return <Outlet />;
}

export default SecuredRoute;
