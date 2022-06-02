import store from '../../store'

export const isAuth = (to, _, next) => {
    //If is null or undefined
    const key = localStorage.getItem('user_token')
    if (!key) {
        next({name: 'LogIn'})
        return
    }
    
    next()
}