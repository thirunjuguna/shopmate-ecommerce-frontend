import LandingPage from '../components/Intro';
import Login from '../components/Login';
import SignUp from '../components/SignUp';

const indexRoutes = [
  {
    path: '/',
    name: 'Landing Page',
    component: LandingPage,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp,
  },
];

export default indexRoutes;
