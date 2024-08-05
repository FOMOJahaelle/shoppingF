import { Component } from '@angular/core';
import { User} from '../../../models/user/user';
import { UserService } from '../../../services/user/user.service';
import { Router } from '@angular/router';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import{InputTextModule} from 'primeng/inputtext';
import { error } from 'console';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginRequest } from '../../../models/longin/login-request';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    DividerModule,
    InputTextModule,
    ButtonModule
  ],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss'
})
export class CreateUserComponent {

  formUser!: FormGroup;
  user: User = new User();

  constructor(
    private userService: UserService,
    private router: Router, private fb : FormBuilder
  ) { }


  ngOnInit(): void {
    this.formUser=this.fb.group({
      username : this.fb.control(""),
      password : this.fb.control(""),
      role: this.fb.control("")
    })
   
  }
  
  saveUser(){
    console.log(this.formUser.value);

    // this.userService.onRegister(this.formUser.value).subscribe( data => {
    //   console.log(data);
     
    // },
    // error => console.log(error));
  }
  
  goToUserList(){
    this.router.navigate(['/api/users/all']);
  }

  // Login(){
  //   this.userService.onLogin(this.user).subscribe( data =>{
  //     this.goToUserList();
  //   },
  //   error => console.log(error));
  // }
  
  onSubmit(){
    console.log("Form submission.. Done !");
    console.log(this.user);
    // this.courseService();
  }
}
