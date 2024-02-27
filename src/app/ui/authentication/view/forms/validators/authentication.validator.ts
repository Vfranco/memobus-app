import { AbstractControl, ValidationErrors } from "@angular/forms";

export interface AuthenticationValidator {
  user: (string | ((control: AbstractControl<any, any>) => ValidationErrors | null)[])[],
  password: (string | ((control: AbstractControl<any, any>) => ValidationErrors | null)[])[]
}
