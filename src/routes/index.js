import HomePage from '../containers/HomePage';
import CategoryPage from '../containers/Category/CategoryPage';
import DepartmentPage from '../containers/Department/DepartmentPage';
import SingleProduct from '../containers/Product/SingleProduct';
import CartList from '../containers/Cart/CartList';

const indexRoutes = [
  {
    path: '/',
    name: 'Home Page',
    component: HomePage,
  },
  {
    path: '/category/:inCategory',
    name: 'Category',
    component: CategoryPage,
  },
  {
    path: '/department/:inDepartment',
    name: 'Department',
    component: DepartmentPage,
  },
  { path: '/single/:id', name: 'Single Product', component: SingleProduct },
  { path: '/cart', name: 'Cart List', component: CartList },
];

export default indexRoutes;
