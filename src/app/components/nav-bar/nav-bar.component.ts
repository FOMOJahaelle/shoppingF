import { Component, NgModule, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
 import { CommonModule } from '@angular/common';
import { RouterLinkActive, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { UserService } from '../../services/user/user.service';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLinkActive,
    RouterLink,
    FormsModule
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent implements OnInit {


  searchText: any;


  constructor(private router: Router,private userService:UserService){

  }

  ngOnInit(): void {
    
  }


  logout() {
    this.userService.logout();
    }

}
