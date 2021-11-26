import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  toActiveCount = 0;
  toInActiveCount = 0;
  constructor(private usersService: UsersService) {

  }
   ngOnInit(): void {
     //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
     //Add 'implements OnInit' to the class.
     this.toActiveCount = this.usersService.toActiveCount;
     this.toInActiveCount = this.usersService.toInActiveCount;
   }
}
