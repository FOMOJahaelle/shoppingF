
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
 import { CommonModule } from '@angular/common';
import { RouterLinkActive, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { ListCourseComponent } from "../course/list-course/list-course.component";
import { CourseService } from '../../services/course/course.service';
import { Course } from '../../models/course/course';
import { TachesService } from '../../services/taches/taches.service';
import { Taches } from '../../models/taches/taches';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLinkActive,
    NavBarComponent,
    RouterLink,
    ListCourseComponent
],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent implements OnInit {

  courses: Course[] = [];
  taches!:Taches
  course2:Course = new Course;
 
  taches1!: Taches[];
  constructor(private router: Router, private courseService:CourseService,private tachesService: TachesService){

  }
  ngOnInit(): void {
   this.getCourses();
  //  this.getTaches();
  }

  getCourses(){
    console.log(this.courses)
    this.courseService.courseList().subscribe((data: any) => {
      this.courses = data;

    });
  }

  getCourseSelected(courseId: number): void {
    this.course2 = <Course>this.courses.find(x => x.id == courseId) ;
    console.log(this.course2); 
  }

  deletec(id: number){
    console.log(id);
    this.courseService.deleteCourse(id).subscribe(() => {
      // console.log(data);
      this.courses = this.courses.filter(course => course.id !== id);
      console.log(id);
       this.goToCourseList();  
    
    });
  }

  goToCourseList() {
    this.router.navigateByUrl('admin/list-course');
  }

  view(id: number){
    this.router.navigate(['admin/edit-course', id])
  }

}
