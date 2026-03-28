import { Component, OnInit, signal } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import { MessageScreen } from 'nk-message-screen';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MessageScreen],
  templateUrl: './app.html',
  styleUrl: './app.scss',

})
export class App implements OnInit {
  protected readonly title = signal('My Test App to demonstrate libraries');
  ngOnInit(): void {

  }


}
