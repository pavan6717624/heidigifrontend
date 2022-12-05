import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

  constructor() { }

  menuItems=[{label:'Home'},{label:'Contact us'},{label:'Login / Sign Up'}];


  ngOnInit(): void {
  }

}
