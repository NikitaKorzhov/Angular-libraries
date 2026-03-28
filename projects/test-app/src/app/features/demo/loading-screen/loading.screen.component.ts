import {Component, inject} from '@angular/core';
import { MessageScreenServise } from "nk-message-screen";

@Component({
  selector: 'demo-loading-screen',
  templateUrl: './loading-screen.component.html',
  standalone: true,
})
export class DemoLoadingScreenComponent {
  public loadingService = inject(MessageScreenServise);


  public showLoadingScreen() {
    this.loadingService.show({
      type: 'loading'
    });
    this.hide()
  }
  // Показуємо екран помилки з можливістю повторити дію
  public showErrorScreen() {
    this.loadingService.show({
      type: 'error',
      action:()=>{window.location.reload()
      }
    });
    this.hide()
  }

  private hide(){
    setTimeout(() => {
//      this.showErrorScreen();
      this.loadingService.hide()
    }, 4000);
  }
}
