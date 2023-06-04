import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UserManagementService } from '../user-management.service';
import { Router } from '@angular/router';

@Component({
  selector: 'user-management-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListComponent {
  users$ = this.service.getUsers();

  columns = [
    "Id",
    "Name",
    "Phone Number",
    "Role"
  ]

  constructor(private service: UserManagementService, private router: Router) {}

  goToUserDetail(id: number) {
    return this.router.navigate(['user', id]);
  }
}
