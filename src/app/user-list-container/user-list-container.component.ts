import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { UserManagementService } from '../user-management.service';
import { Router } from '@angular/router';
import { BehaviorSubject, tap, switchMap } from 'rxjs';

@Component({
  selector: 'user-management-user-list-container',
  templateUrl: './user-list-container.component.html',
  styleUrls: ['./user-list-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListContainerComponent {
  loading = true;
  searchLoading = false;

  searchTerm$ = new BehaviorSubject<string>('');
  users$ = this.searchTerm$.pipe(
    switchMap((term: string) =>
      this.service.getUsers(term).pipe(
        tap(() => {
          this.loading = false;
          this.searchLoading = false;
          this.cd.markForCheck();
        })
      )
    )
  );

  constructor(
    private service: UserManagementService,
    private router: Router,
    private cd: ChangeDetectorRef
  ) {}

  goToUserDetail(id: number) {
    return this.router.navigate(['user', id]);
  }

  handleOnSearch(term: string) {
    this.searchTerm$.next(term);
    this.loading = true;
    this.searchLoading = true;
  }
}
