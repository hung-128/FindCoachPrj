import { createRouter, createWebHistory } from 'vue-router'
import CoachesDetail from "./pages/coaches/CoachesDetail";
import CoachesList from "./pages/coaches/CoachesList";
import CoachesRegister from "./pages/coaches/CoachesRegister";
import ContactCoach from "./pages/requests/ContactCoach";
import RequestReceived from "./pages/requests/RequestReceived";
import NotFound from "./pages/NotFound";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/coaches' },
        { path: '/coaches', component: CoachesList },
        {
            path: '/coaches/:id', component: CoachesDetail, children: [
                { path: 'contact', component: ContactCoach },
            ],
            props: true,
        },
        { path: '/register', component: CoachesRegister },
        { path: '/requests', component: RequestReceived },
        { path: '/:notFound(.*)', component: NotFound },
    ]
});

export default router;