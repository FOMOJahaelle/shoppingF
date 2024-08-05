import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { UserService } from '../../services/user/user.service';
import { LoginRequest } from '../../models/longin/login-request';
import { User } from '../../models/user/user';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
  InputTextModule,
  ButtonModule,
    
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{


  formLogin!: FormGroup;
  login: LoginRequest = new LoginRequest();

constructor( private fb: FormBuilder,
  private router: Router, private userService: UserService
){

}

  ngOnInit(): void {
    this.formLogin=this.fb.group({
      username : this.fb.control(""),
      password : this.fb.control("")
    })
   
  }


  HandleLogin() { 
    console.log(this.formLogin.value);
  this.userService.onLogin(this.formLogin.value).subscribe({
  next :data =>{
   //this.userService.loadProfile(data);
   this.router.navigateByUrl("/admin")
  },
  error: err =>{
    console.log(err);
  }
})

    }

  

}
