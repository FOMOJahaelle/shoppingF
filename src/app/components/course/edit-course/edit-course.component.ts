import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CourseService } from '../../../services/course/course.service';
import { ActivatedRoute, Router } from '@angular/router';

import { Course } from '../../../models/course/course';
import { Taches } from '../../../models/taches/taches';
import { TachesService } from '../../../services/taches/taches.service';
import { async } from 'rxjs/internal/scheduler/async';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-edit-course',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
   
  ],
  templateUrl: './edit-course.component.html',
  styleUrl: './edit-course.component.scss'
})
export class EditCourseComponent implements OnInit {
  courses: Course[] = [];
  taches: Taches = new Taches;
   course!: Course;
 courseId!: number;
 id !: number;
//  course: Course | undefined;

 
  constructor(private courseService: CourseService, private tachesService: TachesService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.getCourseDetails();
    
    // this.course = new Course();

    // this.id = this.route.snapshot.params['id'];
    
    // this.courseService.getCourseById(this.id).subscribe(data => {
    //   console.log(this.id)
    //     console.log(data)
    //     this.course = data;
    //   }, error => console.log(error));

 
      // this.getCourse(this.route.snapshot.params['id']);
      // console.log(this.getCourse(this.route.snapshot.params['id']))
   
  }

  // getCourse(id: number): void {
  //   console.log(id);
  //   this.courseService.getCourseById(id).subscribe({
  //     next: (data) => {
  //       this.course = data;
  //       console.log(data);
  //     },
  //     error: (e) => console.error(e)
  //   });
  // }


 
  getCourseDetails(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id);
    this.courseService.getCourseById(id).subscribe(course => 
      
      this.course = course);
    console.log(this.course);
  }




  // async getCourseById(id:number){
  //   try {
  //     console.log(id)
  //     this.course= await this.courseService.getCourseById(id)
  //     console.log(this.course)
      
  //   } catch (error) {
  //     console.log(error)
      
  //   }
   
  // }

  // getCourses(){
  //   this.courseService.courseList().subscribe((data: any) => {
  //     this.courses = data;
  //      console.log(this.courses);

  //   });
  // }


  // updateCourse(){
  //      this.courseService.updateCourse(this.course,this.courseId).subscribe(data => {
  //        console.log(data);
  //         this.goToCourseList();
  //      }, error => console.log(error));
  //    }

  //    goToCourseList() {
  //     this.router.navigateByUrl('admin/list-course');
  //   }

 saveTache() { 
    console.log(this.taches)
    this.tachesService.createTache(this.taches,this.id).subscribe({
      next : data =>{
        console.log(data)
        console.log(this.courseId)
      },
      error: err =>{
        console.log(err);
      }
    
    })
  }

}


