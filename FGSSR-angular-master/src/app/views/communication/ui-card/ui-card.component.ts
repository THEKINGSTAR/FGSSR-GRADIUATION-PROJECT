import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ui-card',
  templateUrl: './ui-card.component.html',
  styleUrls: ['./ui-card.component.scss']
})
export class UiCardComponent implements OnInit {
  @Input() locationName: string;
  @Input() imageName: string;
 
  constructor() { }

  ngOnInit(): void {
    if (this.imageName) 
    {
      this.imageName = "./assets/images/avatars/" + this.imageName;
    } 
    else 
    {
      this.imageName = "./assets/images/avatars/tmpuser.png" ;
    }
  }
}


