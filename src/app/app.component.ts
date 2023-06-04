import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'user-management-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'user-management';
}
