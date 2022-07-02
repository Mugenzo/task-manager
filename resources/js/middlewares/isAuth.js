const isAuthenticated = () => {
    if (!localStorage.getItem('state')) return false;

    return true;
}

export default isAuthenticated;