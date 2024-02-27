import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { authenticationRouting } from './authentication-routing.module';
import { AuthenticationViewComponent } from './view/authentication.component';
import { authenticationInteractorProvider } from '@application/providers/authentication.provider.interactor';
import { authenticationPresenterProvider } from '@application/providers/authentication.provider.presenter';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AuthenticationViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(authenticationRouting),
    ReactiveFormsModule,
  ],
  providers: [
    authenticationInteractorProvider,
    authenticationPresenterProvider
  ]
})
export class AuthenticationModule { }
