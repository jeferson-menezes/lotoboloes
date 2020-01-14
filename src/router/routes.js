import { routes as login } from '../views/auth';
import { routes as home } from '../views/home';

export default [
  ...home,
  ...login
];
