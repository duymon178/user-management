import { Route } from '@angular/router';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListContainerComponent } from './user-list-container/user-list-container.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: UserListContainerComponent,
  },
  {
    path: 'user/:id',
    component: UserDetailComponent,
  },
];
