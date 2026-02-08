# Libs

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.8.

## Development server

To start a local development server, run:

```bash
ng serve app-test
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.
# Libs — Angular Libraries Collection
 Набір Angular бібліотек, створених для повторного використання у різних проєктах.

## 📦 Поточні бібліотеки 
### `nk-message-screen`
 Компонент для показу екранів завантаження, помилок та повідомлень.


### Функціонал бібліотеки

Для роботи з бібліотекою ва потрібно підключти сервіс
```ts
import { MessageScreenServise } from 'nk-message-screen';
```
Далі створити його інстанс
```ts
public loadingService = inject(MessageScreenServise);
```

### При першій ініціалізації можна задати параметри для виводу екранів
```ts
 this.loadingService.updateTheme({
      backgroundColor: '#0a0a0c', 
      textColor: '#e0e0e0',
      btnBackgroundColor: 'blue',
      btnTextColor: '#e0e0e0',
      logoUrl: 'favicon.ico'
    });
```

### Приклади викликів

Екран завантаження
```ts
 this.loadingService.show({
  type: 'loading',
  text: 'Завантажуємо ваші скарби...',
  });
```
Екран помилки
```ts
   this.loadingService.show({
        type: 'error',
        text: 'Виникла помилка при завантаженні скарбів.',
        buttonText: 'Спробувати знову',
        action:()=>{window.location.reload()}
      })
```
 #### Приклад використання 
 Дивіться прикладд викликів екранв у компоненті нижче
 ```ts 
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

```
І у шаблоні основного компонента на проєкті вказати компонент
```html
<message-screen />
```
## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
