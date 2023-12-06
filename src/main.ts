import { enableProdMode, provideZoneChangeDetection } from '@angular/core';

import { environment } from './environments/environment';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { PreloadAllModules, provideRouter, withComponentInputBinding, withPreloading, withRouterConfig } from '@angular/router';
import { routes } from './app/app.routes';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
      provideRouter(routes,
          withPreloading(PreloadAllModules),
          withRouterConfig({
              paramsInheritanceStrategy: 'always'
          }),
          withComponentInputBinding()
      ),
      provideZoneChangeDetection({
          eventCoalescing: true
      })
  ]
});
