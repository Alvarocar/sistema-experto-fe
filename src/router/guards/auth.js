import store from '../../store'

export const isAuth = (to, _, next) => {
    //If is null or undefined
    if (!store.state.user.current.name) {
        next({name: 'LogIn'})
        return
    }
    
    next()
}