import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { UserManagementService } from '../user-management.service';

@Component({
  selector: 'user-management-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDetailComponent {
  user$ = this.route.params.pipe(
    switchMap((params) => {
      return this.service.getUser(+params['id']);
    })
  );

  constructor(private service: UserManagementService,
    private route: ActivatedRoute) {}
}
