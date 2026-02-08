import { Component, inject, Input } from '@angular/core';
import { MessageScreenServise } from './MessageScreenServise';

@Component({
  selector: 'message-screen',
  standalone: true,
  templateUrl: './message-screen.component.html',
  styleUrls: ['./message-screen.component.scss'],
})
export class MessageScreen {protected screen = inject(MessageScreenServise);
}
