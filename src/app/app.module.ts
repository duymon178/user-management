import {
  TuiRootModule,
  TuiDialogModule,
  TuiAlertModule,
  TuiLoaderModule,
} from '@taiga-ui/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { TuiTableModule } from '@taiga-ui/addon-table';
import { UserListContainerComponent } from './user-list-container/user-list-container.component';

const tuiModules = [
  TuiRootModule,
  TuiDialogModule,
  TuiAlertModule,
  TuiTableModule,
  TuiLoaderModule,
];

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDetailComponent,
    UserListContainerComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    BrowserAnimationsModule,
    ...tuiModules,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
