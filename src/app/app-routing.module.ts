import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { PrizesComponent } from "./components/prizes/prizes.component";
import { ProtectedComponent } from "./components/protected/protected.component";
import { CallbackComponent } from './components/callback/callback.component';
import { AuthGuard } from './services/auth.guard';


const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'prizes', component: PrizesComponent },
    { path: 'protected', component: ProtectedComponent, canActivate:[ AuthGuard ]},
    { path: 'callback', component: CallbackComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);