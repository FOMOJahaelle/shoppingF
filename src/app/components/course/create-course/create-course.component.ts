import { Component, OnInit } from '@angular/core';
import { Course } from '../../../models/course/course';
import { Router } from '@angular/router';
import { CourseService } from '../../../services/course/course.service';
import { NgIf } from '@angular/common';
import{FormBuilder, FormGroup, FormsModule,ReactiveFormsModule} from"@angular/forms";
import { ButtonModule } from 'primeng/button';
import{InputTextModule} from 'primeng/inputtext';
import { DividerModule } from 'primeng/divider';



@Component({
  selector: 'app-create-course',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    DividerModule,
    NgIf

  ],
  templateUrl: './create-course.component.html',
  styleUrl: './create-course.component.scss'
})
export class CreateCourseComponent implements OnInit {

  formCourse!: FormGroup;
  
course: Course = new Course();
  showMessages: any;

constructor(private fb: FormBuilder,
  private courseService: CourseService,
  private router: Router
) { }

ngOnInit(): void {

  this.showMessages = sessionStorage.getItem('message');
  this.formCourse =this.fb.group({
    name: this.fb.control(" "),
    description : this.fb.control(" "),
    dateCreate:this.fb.control(" "),
    archive: this.fb.control(" ")
  })
}

// this.vehiculeService.getTypeVehiculesList().subscribe((data: any) => {
//   data = data.data
//   console.log(data)
//   this.typeVehicules = data;
// });

saveCourse(){
  // console.log(this.formCourse.value);
  this.courseService.createCourse(this.formCourse.value).subscribe({
    
    next : data =>{
     
      console.log(data);
     this.router.navigateByUrl("/list-course")
    },
    error: err =>{
      console.log(err);
    }
  
  })
 
}


// goToCourseList(){
//   this.router.navigate(['/list-course']);
// }

onSubmit(){
  console.log("Form submission.. Done !");
  console.log(this.course);
  this.saveCourse();
  //  this.courseService();
}



}
