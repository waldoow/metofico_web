import { useCookies } from 'react-cookie';

const useGetUserRoles = () => {
    const [cookie] = useCookies(['_auth']);

    if (cookie._auth === undefined) {
        throw 'cookie not found';
    }

    return cookie._auth.roles;
}

export default useGetUserRoles;
