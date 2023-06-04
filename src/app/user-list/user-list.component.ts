import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'user-management-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListComponent {
  @Input() loading = true;
  @Input() users: User[] = [];

  @Output() clickUser = new EventEmitter<number>();
  
  columns = [
    "Id",
    "Name",
    "Phone Number",
    "Role"
  ]
}
