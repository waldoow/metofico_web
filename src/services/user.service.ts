const getUserRole  = (roles: Array<string>): string => {
    const role: string|undefined = roles.find(role => {
        return role === 'ROLE_ADMIN';
    })

    console.log(role)

    if (role === undefined) {
        throw 'Role is undefined';
    }

    return role === 'ROLE_ADMIN' ? 'Admin': 'User';
}

export { getUserRole };
