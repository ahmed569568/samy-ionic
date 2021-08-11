import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  myLists: any = [
    {title:'Present',day:'Monday 5 may , 2020',hours:'Hours 30 Min'},
    {title:'Absence',day:'Monday 5 may , 2020',hours:'Hours 30 Min'},
    {title:'Rest Day',day:'Monday 5 may , 2020',hours:'Hours 30 Min'},
    {title:'Weekend',day:'Monday 5 may , 2020',hours:'Hours 30 Min'},
    {title:'Present Late in',day:'Monday 5 may , 2020',hours:'Hours 30 Min'},
    {title:'Present Early out',day:'Monday 5 may , 2020',hours:'Hours 30 Min'}

  ]
  constructor() {
  }
  ngOnInit() {
  }
  openCamera(){
    console.log('dddddddddd');
  }
 
}
