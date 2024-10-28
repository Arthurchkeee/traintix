import {Routes} from '@angular/router';
import {LogInComponent} from './pages/log-in/log-in.component';
import {guestGuard} from "./guards/guest.guard";
import {StationsComponent} from "./components/stations/stations.component";
import {SignUpComponent} from "./pages/sign-up/sign-up.component";

export const routes: Routes = [{
  path: 'login',
  component: LogInComponent,
  canMatch: [guestGuard]
},{
  path: 'signUp',
  component: SignUpComponent,
  canMatch: [guestGuard]
}, {
  path: 'admin/stations',
  component: StationsComponent
}];
