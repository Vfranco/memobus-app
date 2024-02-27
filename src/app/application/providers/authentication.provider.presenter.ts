import { Provider } from "@angular/core";
import { AuthenticationPresenter } from "src/app/ui/authentication/presenter/authentication.presenter";

export const authenticationPresenterProvider: Provider = {
  provide: 'authenticationPresenterProvider',
  useClass: AuthenticationPresenter
}