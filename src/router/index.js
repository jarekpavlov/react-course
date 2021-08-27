import AboutPage from "../pages/AboutPage";
import PostsPage from "../pages/PostsPage";
import PostIdPage from "../pages/PostIdPage";
import Error from "../pages/Error";
import Login from "../pages/Login";

export const privateRoutes = [
    {path: '/about', component: AboutPage, exact: true },
    {path: '/posts', component: PostsPage, exact: true },
    {path: '/posts/:id', component: PostIdPage, exact: true },
    {path: '/error', component: Error, exact: true }

]

export const publicRoutes = [
    {path: '/login', component: Login, exact: true },

]