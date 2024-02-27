import { Routes } from "@angular/router";

export const UIRouting: Routes = [
  {
    path: '',
    children: [
      { path: '', loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule) },
    ]
  }
]
