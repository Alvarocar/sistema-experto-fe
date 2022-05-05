const LogIn = () => import("../pages/LogIn.vue");
const Home = () => import("../pages/Home.vue");

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/log-in",
    name: "LogIn",
    component: LogIn
  }
];

export default routes;
