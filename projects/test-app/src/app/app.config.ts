import { ApplicationConfig, inject, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { MessageScreenServise } from 'nk-message-screen';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    {
      provide: 'APP_INIT_THEME',
      useFactory: () => {
        const messageScrenServise=inject(MessageScreenServise);
        messageScrenServise.updateTheme({
          backgroundColor: '#0a0a0c', 
          textColor: '#e0e0e0',
          btnBackgroundColor: 'blue',
          btnTextColor: '#e0e0e0',
          logoUrl: 'favicon.ico'
        });
        return true
      }
    }
  ]
};
