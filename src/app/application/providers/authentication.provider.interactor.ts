import { Provider } from "@angular/core";
import { AuthenticationInteractor } from "src/app/ui/authentication/interactor/authentication.interactor";

export const authenticationInteractorProvider: Provider = {
  provide: 'authenticationInteractorProvider',
  useClass: AuthenticationInteractor
}