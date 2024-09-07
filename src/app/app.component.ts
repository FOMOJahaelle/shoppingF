import { Component, NgModule } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
 import { CommonModule } from '@angular/common';
 import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { HTTP_INTERCEPTORS, HttpClient} from '@angular/common/http';
import { appHttpInterceptor } from './interceptors/app-http.interceptor';
import { UserService } from './services/user/user.service';
import { ListCourseComponent } from './components/course/list-course/list-course.component';
import { ListTachesComponent } from './components/taches/list-taches/list-taches.component';




// import {HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,

  

  imports: [
     CommonModule,
    RouterOutlet,
    RouterLink, 
    ButtonModule,
    DividerModule
  ],

  providers: [
    {
    provide: HTTP_INTERCEPTORS, 
    useClass: appHttpInterceptor,
    multi: true,
    deps: [UserService]
    },
    
  ],

  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})


// @NgModule({
//   declarations: [
//     ListTachesComponent,
//      ListCourseComponent,  
//   ]
// });
export class AppComponent {

  title = 'shoopingF';


}
