import { Component, OnInit ,} from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  
  async Register() {
    this.route.navigateByUrl('/sessions/signup');
    
  }
  async signIn() {
    this.route.navigateByUrl('/sessions/signin');
  }
}
