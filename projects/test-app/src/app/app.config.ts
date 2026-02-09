import { 
  ApplicationConfig, 
  inject, 
  APP_INITIALIZER, // <--- ЦЕЙ ІМПОРТ КРИТИЧНО ВАЖЛИВИЙ
  provideBrowserGlobalErrorListeners, 
  provideZonelessChangeDetection 
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { MessageScreenServise } from 'nk-message-screen';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    {
      provide: APP_INITIALIZER, 
      useFactory: () => {
        const messageScrenServise = inject(MessageScreenServise);
        
        return () => {
          messageScrenServise.updateTheme({
            backgroundColor: '#0a0a0c', 
            textColor: '#e0e0e0',
            btnBackgroundColor: 'blue',
            btnTextColor: '#e0e0e0',
            logoUrl: 'favicon.ico',
            errorLogoUrl:"reload.png",
            defaultLoadingText: 'Завантажуємо дані...',
            defaultErrorText: 'Виникла помилка при завантаженні.',
            defaultBtnText: 'Спробувати знову'
          });
          return true;
        };
      },
      multi: true
    }
  ]
};