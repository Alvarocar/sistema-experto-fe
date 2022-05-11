import { isAuth } from './guards/auth'

const LogIn = () => import("../pages/LogIn.vue");
const Home = () => import("../pages/Home.vue");
const SignUp = () => import("../pages/SignUp.vue")

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    beforeEnter: [isAuth]
  },
  {
    path: "/log-in",
    name: "LogIn",
    component: LogIn
  },
  {
    path: "/sign-up",
    name: "SignUp",
    component: SignUp
  },
];

export default routes;
