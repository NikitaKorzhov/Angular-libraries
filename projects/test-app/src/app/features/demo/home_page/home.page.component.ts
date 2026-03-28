import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'demo-home-page',
  templateUrl: './home.page.component.html',
  standalone: true,
})
export class HomePageComponent {
  protected libs=[
    {name:'massage-screen lib', url:'demo'},
  ]
  constructor(private router:Router) {
  }
  onLib(lib:any){
    this.router.navigate([lib.url]);
  }
}
