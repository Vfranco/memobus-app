import { Validators } from "@angular/forms";
import { AuthenticationValidator } from "./validators/authentication.validator";

export const authenticationForm: AuthenticationValidator = {
  user: ['', [Validators.required]],
  password: ['', [Validators.required]]
}