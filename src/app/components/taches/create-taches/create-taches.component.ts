
import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{FormBuilder, FormControl, FormGroup, FormsModule,NgSelectOption,ReactiveFormsModule, Validators} from"@angular/forms";
import { TachesService } from '../../../services/taches/taches.service';
import { Taches } from '../../../models/taches/taches';
import { CourseService } from '../../../services/course/course.service';
import { Course } from '../../../models/course/course';
import { NgFor } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';


@Component({
  selector: 'app-create-taches',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgFor,
    DropdownModule,
    
    
  ],
  templateUrl: './create-taches.component.html',
  styleUrl: './create-taches.component.scss'
})
export class CreateTachesComponent implements OnInit {

   taches: Taches = new Taches();
  courses: Course []=[];
    course!:Course;
  
 
  
formTache!: FormGroup;

Id!: number;
 
  constructor(  private courseService: CourseService,
     private router:Router, private tachesService: TachesService, 
     private fb:FormBuilder){
  }

  ngOnInit(): void {
    
    this.getCourses();

   // this.course = this.courseService.getCourseById(this.Id).subscribe((data:any)=>{
  //   console.log(data);

  // })  
    // this.formTache =this.fb.group({
    //   name: this.fb.control(" "),
    //   description : this.fb.control(" "),
    //   course: this.fb.control(" "),
    // })

    // this.courseService.getCourseById(this.Id).subscribe({
    //   next : data=>{
    //     console.log(data)
        
    //   }
    // })


    // this.formTache = new FormGroup({
    //   name: new FormControl('', [Validators.required]),
    //   description: new FormControl('', [Validators.required]),
    //   statut: new FormControl('', [Validators.required]),
    //   course: new FormControl('', [Validators.required])
     
    // });
  

  }
 
saveTache() { 
  console.log(this.taches)
  this.tachesService.createTache(this.taches,this.Id).subscribe({
    next : data =>{
       console.log(this.taches);
      // console.log(this.taches.courseId);

      console.log(data); 
    },
    error: err =>{
      console.log(err);
    }
  
  })
}


goToTachesCreate() {
  this.router.navigateByUrl('admin/create-taches');
}


getCourses(){
  this.courseService.courseList().subscribe((data: any) => {
    this.courses = data;

  });
}


onSubmit(){
  console.log("Form submission.. Done !");
  console.log(this.taches);
  // this.saveTache();
  //  this.courseService();
}
}
