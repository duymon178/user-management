import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UserManagementService } from '../user-management.service';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

@Component({
  selector: 'user-management-user-list-container',
  templateUrl: './user-list-container.component.html',
  styleUrls: ['./user-list-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListContainerComponent {
  loading = true;
  users$ = this.service.getUsers().pipe(tap(() => this.loading = false));

  constructor(private service: UserManagementService, private router: Router) {}

  goToUserDetail(id: number) {
    return this.router.navigate(['user', id]);
  }
}
