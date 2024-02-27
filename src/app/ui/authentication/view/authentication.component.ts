import { Component, Inject, OnInit } from '@angular/core';
import { AuthenticationInputLogic, AuthenticationOutputLogic } from './model/authentication.model';
import { FormBuilder } from '@angular/forms';
import { authenticationForm } from './forms/authentication.form';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationViewComponent extends AuthenticationOutputLogic implements OnInit {

  constructor(
    private _formBuilder: FormBuilder,
    @Inject('authenticationPresenterProvider') private _presenter: AuthenticationInputLogic
  ) {
    super();
    this._presenter.setView(this);
  }

  ngOnInit(): void {
    this.initializeAuthForm();
  }

  initializeAuthForm(): void {
    this.authenticationForm = this._formBuilder.group(authenticationForm);
  }

  sendAuthform() {
    this._presenter.processAuthentication(this.authenticationForm.value);
  }

}
