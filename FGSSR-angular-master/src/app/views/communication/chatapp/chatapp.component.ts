import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-chatapp',
  templateUrl: './chatapp.component.html',
  styleUrls: ['./chatapp.component.scss']
})
export class ChatappComponent implements OnInit {
  @ViewChild('endOfChat')
  endOfChat!: ElementRef;
  constructor() { }

  messages$: any | undefined;
  users$:any;
  myChats$ :any;

  searchControl = new FormControl('');
  messageControl = new FormControl('');
  chatListControl = new FormControl('');
  selectedChat$:any;
  otherUsers$  :any;
  user$:any;
  ngOnInit(): void {
  }
  sendMessage(){}
}
