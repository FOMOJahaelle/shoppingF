import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Course } from '../../../models/course/course';
import { CourseService } from '../../../services/course/course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-course',
  standalone: true,
  imports: [
    NgFor
  ],
  templateUrl: './list-course.component.html',
  styleUrl: './list-course.component.scss'
})
export class ListCourseComponent  implements OnInit{

  courses: Course[] = [];


  constructor(
    private courseService: CourseService,
    private router: Router
  ) { }

  ngOnInit(): void {
     this.getCourses();
  }



  courseDetails(Id: number){
    this.router.navigate(['view-course', Id])
  }

  updateCourse(Id: number){
    this.router.navigate(['edit-course', Id])
  }

  getCourses(){
    this.courseService.courseList().subscribe((data: any) => {
      this.courses = data;

    });
  }

  // deleteVehicule(vehiculeId: number){
  //   this.courseService.(vehiculeId).subscribe(data => {
  //     console.log(data);
  //     this.getVehicules();  
  //     /** Or instead of method, we call variable vehicules ie ->
  //                           this.vehicules = this.vehicules.filter(vehicule -> vehicule.id != vehiculeId);
  //                           */
  //   });
  // }

}
