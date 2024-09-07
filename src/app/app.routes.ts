import { Routes } from '@angular/router';

import { CreateCourseComponent } from './components/course/create-course/create-course.component';
import { ListCourseComponent } from './components/course/list-course/list-course.component';
import { ViewCourseComponent } from './components/course/view-course/view-course.component';
import { EditCourseComponent } from './components/course/edit-course/edit-course.component';
import { CreateUserComponent } from './components/user/create-user/create-user.component';
import { CreateTachesComponent } from './components/taches/create-taches/create-taches.component';
import { ViewTachesComponent } from './components/taches/view-taches/view-taches.component';
import path from 'path';
import { LoginComponent } from './components/login/login.component';
import { authentificationGuard } from './guards/authentification.guard';
import { AdminComponent } from './components/admin/admin.component';
import { ListTachesComponent } from './components/taches/list-taches/list-taches.component';


export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'create-user',component:CreateUserComponent} ,
    
    {path: 'admin', component: AdminComponent, 
        children:[
    { path: 'create-course', component: CreateCourseComponent},
    { path: 'list-course', component: ListCourseComponent },
    { path: 'list-taches', component: ListTachesComponent},
    { path: 'edit-course/:id', component: EditCourseComponent } ,
    { path: 'create-taches', component: CreateTachesComponent}
    ]},
    
];

// , canActivate: [authentificationGuard] 

// , canActivate: [authentificationGuard], data:{role:"ADMIN"}