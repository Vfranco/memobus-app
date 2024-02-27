import { Injectable } from "@angular/core";
import { AuthenticationInputLogic, AuthenticationInteractorLogic } from "../view/model/authentication.model";
import { AuthenticationEntitie } from "src/app/domain/entities/authentication.entitie";
import { HttpResponse } from "@angular/common/http";

@Injectable()
export class AuthenticationInteractor implements AuthenticationInteractorLogic {
  private _presenter!: AuthenticationInputLogic;

  setPresenter(presenter: AuthenticationInputLogic): void {
    this._presenter = presenter
  }

  processAuthentication(authForm: AuthenticationEntitie): void {
    // TODO RESPONSE SIMULATED
    const response = new HttpResponse({
      body: { ...authForm },
      status: 200,
      statusText: 'OK',
    });

    this._presenter.successAuth(response);
  }

}
