import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'user-management-user-list-search',
  templateUrl: './user-list-search.component.html',
  styleUrls: ['./user-list-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListSearchComponent {
  form = new FormGroup({
    searchTerm: new FormControl(''),
  });

  @Input() loading = false;
  @Output() search = new EventEmitter<string>();

  onSubmit() {
    this.search.emit(this.form.controls.searchTerm.value || '');
  }
}
