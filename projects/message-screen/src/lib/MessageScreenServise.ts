import { computed, Injectable, signal } from '@angular/core';
export interface MessageScreenTheme {
  logoUrl?: string;
  backgroundColor: string;
  textColor: string;
  btnBackgroundColor?: string;
  btnTextColor?: string;
}

export interface MessageScreenData {
  type: 'loading' | 'error' | 'info';
  text: string;
  logoUrl?: string;
  buttonText?: string;
  action?: () => void;
}

@Injectable({
  providedIn: 'root' 
})
export class MessageScreenServise {
 theme = signal<MessageScreenTheme>({
    backgroundColor: '#ffffff',
    textColor: '#000000',
    btnBackgroundColor: '#007bff',
    btnTextColor: '#ffffff'
  });

  data = signal<MessageScreenData | null>(null);
isOpen = computed(() => this.data() !== null);
  readonly isLoading = signal<boolean>(false);

show(config: MessageScreenData) {
    this.data.set(config);
  }

  hide() {
    this.data.set(null);
  }
 updateTheme(newTheme: Partial<MessageScreenTheme>) {
    this.theme.update(t => ({ ...t, ...newTheme }));
  } 
}