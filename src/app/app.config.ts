import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch } from '@angular/common/http';
import {provideToastr} from   'ngx-toastr';
import { JwtModule } from '@auth0/angular-jwt';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), 
    provideClientHydration(), provideAnimationsAsync(),provideHttpClient(withFetch()),provideToastr({closeButton:true}),
  importProvidersFrom(JwtModule.forRoot({
    config:{
      tokenGetter:()=>{
        return localStorage.getItem('access_token');
      },
      allowedDomains:['localhost:7278'],
    }
  }))]
};
