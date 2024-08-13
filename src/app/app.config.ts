
import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection} from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClientModule, provideHttpClient, withFetch, withInterceptors, withInterceptorsFromDi} from '@angular/common/http';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { appHttpInterceptor } from './interceptors/app-http.interceptor';
import { authInterceptor } from './interceptors/auth-interceptor.interceptor';


export const appConfig: ApplicationConfig = {
  providers: [
    
    provideZoneChangeDetection
    ({ eventCoalescing: true }),
     provideRouter(routes), 
     provideClientHydration(),
     provideHttpClient(withInterceptorsFromDi(), withFetch()),
  
     authInterceptor
    
    ]
};
