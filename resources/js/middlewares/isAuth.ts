const isAuthenticated = () => {
    if (!localStorage.getItem('state')) return false;

    const state = JSON.parse(localStorage.getItem('state'))

    return state.user.api_key !== false;
}

export default isAuthenticated;