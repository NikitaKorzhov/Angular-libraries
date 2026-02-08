import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessageScreen,MessageScreenServise } from 'nk-message-screen';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MessageScreen],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  ngOnInit(): void {
    // Налаштування теми та показ екрану 
    this.loadingService.updateTheme({
      backgroundColor: '#0a0a0c', 
      textColor: '#e0e0e0',
      btnBackgroundColor: 'blue',
      btnTextColor: '#e0e0e0',
      logoUrl: 'favicon.ico'
    });

    // Показати екран завантаження
    this.loadingService.show({
  type: 'loading',
  text: 'Завантажуємо ваші скарби...',
  });
// Імітація помилки після 4 секунд
    setTimeout(() => {
      // Показуємо екран помилки з можливістю повторити дію
      this.loadingService.show({
        type: 'error',
        text: 'Виникла помилка при завантаженні скарбів.',
        buttonText: 'Спробувати знову',
        action:()=>{window.location.reload()}
      })
    }, 4000);
  }
  public loadingService = inject(MessageScreenServise);
  protected readonly title = signal('test-app');
}
