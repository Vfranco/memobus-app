import { HttpResponse, HttpStatusCode } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationEntitie } from "src/app/domain/entities/authentication.entitie";
import { AuthenticationInputLogic, AuthenticationInteractorLogic, AuthenticationOutputLogic } from "../view/model/authentication.model";
import { StorageService } from "@common/services/storage.service";
import { STORAGE_KEYS } from "@core/enums/storage-keys.enum";

@Injectable()
export class AuthenticationPresenter implements AuthenticationInputLogic {
  private _view!: AuthenticationOutputLogic;

  constructor(
    @Inject('authenticationInteractorProvider') private _interactor: AuthenticationInteractorLogic,
    private _router: Router,
    private _storageService: StorageService
  ) {
    this._interactor.setPresenter(this);
  }

  setView(component: AuthenticationOutputLogic): void {
    this._view = component
  }

  processAuthentication(authForm: AuthenticationEntitie): void {
    this._interactor.processAuthentication(authForm);
  }

  successAuth(response: HttpResponse<AuthenticationEntitie>): void {
    if (response.status === HttpStatusCode.Ok) {
      this._storageService.setItem(STORAGE_KEYS.userData, response?.body);
      this._router.navigateByUrl('emision');
    }
  }
}