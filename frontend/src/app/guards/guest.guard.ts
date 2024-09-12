import { CanMatchFn} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "../services/auth.service";

export const guestGuard: CanMatchFn = (route, state) => {
  const service=inject(AuthService);
  return !service.isAuthenticated();
};
