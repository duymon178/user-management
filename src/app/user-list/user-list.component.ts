import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'user-management-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListComponent {}
