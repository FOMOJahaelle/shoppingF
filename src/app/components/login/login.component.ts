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
  showMessages: any;
  responseData: any;

constructor( private fb: FormBuilder,
  private router: Router, private userService: UserService
){

}

  ngOnInit(): void {
    this.formLogin=this.fb.group({
      username : this.fb.control(""),
      password : this.fb.control("")
    })
   
    // this.showMessages = sessionStorage.getItem('message');
    // sessionStorage.removeItem('message');

    
  }


  HandleLogin() { 
    console.log(this.formLogin.value);
  this.userService.onLogin(this.formLogin.value).subscribe({
  next :data =>{
    console.log(data)

       localStorage.setItem('token', data.token)
       console.log(data.token)
     
    
   this.router.navigateByUrl("/admin")
  //  this.userService.loadProfile(data);
  },
  error: err =>{
    console.log(err);
  }
})

    }


    // HandleLogin(): void{
    //   if(this.formLogin.valid){
    //     this.userService.onLogin(this.formLogin.value).subscribe( (result : any) => {
    //       this.responseData = result
    //       console.log(this.responseData)
    //        this.router.navigateByUrl("/admin")
            

    //       if(this.responseData != null){
    //         if(this.responseData['status'] === 200){
    //           if (this.responseData['data']['actived'] === false ){
    //             this.denied('user waiting for activation')
    //           }
    //           else{
    //             this.access(this.responseData)
    //           }
    //         }
    //       }else{
    //         this.router.navigateByUrl("/admin")
    //       }
    //     },
    //       error => console.log(error)
    //     )
    //   }
    // }
  


    access(user: any): void{
      console.log(user.data.actived)
      if (user.data.actived === false ){
        this.denied('user waiting for activation');
      }else{
        console.log(user)
        console.log('setting jwt header token info...')
        sessionStorage.setItem('refreshtoken',user.data.refreshtoken)
        sessionStorage.setItem('token', user.data.token)
        sessionStorage.setItem('username', user.data.username)
        localStorage.setItem('refreshtoken',user.data.refreshtoken)
        localStorage.setItem('token', user.data.token)
        localStorage.setItem('username', user.data.username)
        localStorage.setItem('userId', String(user.data.id!))
        console.log(sessionStorage)
        console.log(localStorage)
        Headers.bind(sessionStorage)
        console.log('redirecting...')
        if(sessionStorage.getItem('page')!){
          this.router.navigateByUrl(sessionStorage.getItem('page')!)
        }else{
          this.router.navigateByUrl('/admin')
        }
      }
    }
  
    denied(erreur: String) : void{
      this.router.navigateByUrl('/login');
      this.showMessages = erreur;
      console.log(this.showMessages)
    }
    
  
// HandleLogin() { 
//   console.log(this.formLogin.value);
// this.userService.onLogin(this.formLogin.value)

//   }

}
