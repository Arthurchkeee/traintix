import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import {tokenInterceptor} from "./interceptors/token.interceptor";
import { provideStoreDevtools} from "@ngrx/store-devtools";
import { provideStore } from '@ngrx/store';
import { apiReducer } from './store/reducers/api.reducers';
import {provideEffects} from "@ngrx/effects";
import {StationEffects} from "./store/effects/api.effects";
export function tokenGetter() {
  return localStorage.getItem('token');
}
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([tokenInterceptor])),
    importProvidersFrom(
      JwtModule.forRoot({
        config: {
          tokenGetter: tokenGetter,
          allowedDomains: ['localhost:8080', 'http://localhost:8080/login/'],
          disallowedRoutes: ['http://localhost:8080/api/'],
        },
      })
    ),
    provideStore({ api: apiReducer }),
    provideStoreDevtools(),
    provideEffects([StationEffects])
  ],
};
