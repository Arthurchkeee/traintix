import { CanMatchFn} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "../services/hello.service";

export const guestGuard: CanMatchFn = (route, state) => {
  const service=inject(AuthService);
  return !service.isAuthenticated();
};
