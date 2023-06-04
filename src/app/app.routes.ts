import { Route } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: UserListComponent,
  },
  {
    path: 'user/:id',
    component: UserDetailComponent,
  },
];
