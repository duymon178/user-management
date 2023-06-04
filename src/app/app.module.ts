import { TuiRootModule, TuiDialogModule, TuiAlertModule } from '@taiga-ui/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

@NgModule({
  declarations: [AppComponent, UserListComponent, UserDetailComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    BrowserAnimationsModule,
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
