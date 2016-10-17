import { App, User, Home, Login, Me, Todo } from './containers';

const routes = {
  path: '/',
  component: App,
  indexRoute: { component: Login },
  childRoutes: [
    { path: 'home',
      component: Home,
      indexRoute: { component: Me },
      childRoutes: [
        { path: 'todo', component: Todo },
        { path: 'users', component: User },
      ],
    },
  ]
};

export default routes;
