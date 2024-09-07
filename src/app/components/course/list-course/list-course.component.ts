import { NgFor } from '@angular/common';
import { Component, NgModule, OnInit, Pipe } from '@angular/core';
import { Course } from '../../../models/course/course';
import { CourseService } from '../../../services/course/course.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TachesService } from '../../../services/taches/taches.service';
import { Taches } from '../../../models/taches/taches';

@Component({
  selector: 'app-list-course',
  standalone: true,
  imports: [
    NgFor,
    ReactiveFormsModule,
    FormsModule,
    RouterLink,
  ],
  templateUrl: './list-course.component.html',
  styleUrl: './list-course.component.scss'
})
export class ListCourseComponent  implements OnInit{


  courses: Course[] = [];
   taches!: Taches;
  course: Course = new Course;
  course1: Course = new Course;
  course2:Course = new Course;
  course3:Course = new Course;
  // vehicule: Vehicule = new Vehicule;
 courseId!:number;
 searchText: any;
 display!: true;

  constructor(
    private courseService: CourseService,
    private tachesService:TachesService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
     this.getCourses();

    //  console.log(this.courses);
    
      // this.courseId = this.route.snapshot.params['id'];


      // console.log(this.courseId);
      // this.route.params.subscribe(params => {
      //   this.courseId = params['id']; // Access the 'id' parameter from the URL
      //   console.log('courseID:', this.courseId);
      // });
    

     //  this.getCourseSelected(this.courseId);
    // this.courseService.getCourseById(this.courseId).subscribe((data: any)=> {
    //   console.log(data);
    //    this.course = data;
    // }); 
  
  }

  getCourseSelected(courseId: number): void {
    this.course2 = <Course>this.courses.find(x => x.id == courseId) ;
    console.log(this.course2); 
  }

  // getCourseSelected(courseId: number): void{
  //   this.courseService.getCourseById(courseId).subscribe((data: any)=> {
  //     console.log(data);
  //     //  this.course = data;
  //   });
  // }

  courseDetail(courseId: number): void {
    this.course3 = <Course>this.courses.find(x => x.id == courseId) ;
    console.log(this.course3); 
  }

  // updateCourse(Id: number){
  //   this.router.navigate(['edit-course', Id])
  // }

 

  updateCourse(){
 console.log(this.course2)
    this.courseService.updateCourse(this.course2,this.course2.id).subscribe(data => {
      // console.log(this.course2.id);
      // console.log(this.course2);
       console.log(data);
       this.goToCourseList();
    }, error => console.log(error));
  }

  

  goToCourseList() {
    this.router.navigateByUrl('admin/list-course');
  }

  getCourses(){
    this.courseService.courseList().subscribe((data: any) => {
      this.courses = data;
       console.log(this.courses);

    });
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

  view(id: number){
    this.router.navigate(['admin/edit-course', id])
  }


 

}
