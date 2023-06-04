import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'user-management-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDetailComponent {}
