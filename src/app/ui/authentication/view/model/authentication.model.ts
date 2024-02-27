import { HttpResponse } from "@angular/common/http";
import { FormGroup } from "@angular/forms";
import { CoreInteractor } from "@core/view/core.interactor";
import { CorePresenter } from "@core/view/core.presenter";
import { AuthenticationEntitie } from "@domain/entities/authentication.entitie";

export abstract class AuthenticationOutputLogic {
    authenticationForm!: FormGroup;
}

export interface AuthenticationInputLogic extends CorePresenter {
    processAuthentication(authForm: AuthenticationEntitie): void
    successAuth(response: HttpResponse<any>): void
}

export interface AuthenticationInteractorLogic extends CoreInteractor {
    processAuthentication(authForm: AuthenticationEntitie): void
}
