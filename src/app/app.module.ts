import {
  TuiRootModule,
  TuiDialogModule,
  TuiAlertModule,
  TuiLoaderModule,
  TuiButtonModule,
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
import { ReactiveFormsModule } from '@angular/forms';
import { TuiInputModule } from '@taiga-ui/kit';
import { UserListSearchComponent } from './user-list-search/user-list-search.component';

const tuiModules = [
  TuiRootModule,
  TuiDialogModule,
  TuiAlertModule,
  TuiTableModule,
  TuiLoaderModule,
  TuiInputModule,
  TuiButtonModule
];

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDetailComponent,
    UserListContainerComponent,
    UserListSearchComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ...tuiModules,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
