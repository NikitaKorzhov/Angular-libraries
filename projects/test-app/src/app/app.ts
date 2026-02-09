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
  public loadingService = inject(MessageScreenServise);
  protected readonly title = signal('My Test App to introduct libraries');
  ngOnInit(): void {
   this.showLoadingScreen();
// Імітація помилки після 4 секунд
    setTimeout(() => {
      this.showErrorScreen();
    }, 4000);
  }

  // Показати екран завантаження
  private showLoadingScreen() {
    this.loadingService.show({
      type: 'loading'
    });
  }
  // Показуємо екран помилки з можливістю повторити дію
  private showErrorScreen() {
    this.loadingService.show({
      type: 'error',
      action:()=>{window.location.reload()
      }
    });
  }
}