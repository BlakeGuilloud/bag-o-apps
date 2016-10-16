import { App, User, Home, Login } from './containers';

const routes = {
  path: '/',
  component: App,
  indexRoute: { component: Login },
  childRoutes: [
    { path: 'home',
      component: Home,
      childRoutes: [
        { path: 'todo', component: User },
        { path: 'users', component: User },
      ],
    },
  ]
};

export default routes;
