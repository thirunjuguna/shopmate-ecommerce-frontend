import HomePage from '../containers/HomePage';
import Login from '../components/Login';
import SignUp from '../components/SignUp';

const indexRoutes = [
  {
    path: '/',
    name: 'Home Page',
    component: HomePage,
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
