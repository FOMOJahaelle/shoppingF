import { Component, OnInit } from '@angular/core';
import { Taches } from '../../../models/taches/taches';
import { TachesService } from '../../../services/taches/taches.service';
import { Router } from '@angular/router';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { Course } from '../../../models/course/course';
import { CourseService } from '../../../services/course/course.service';

@Component({
  selector: 'app-list-taches',
  standalone: true,
  imports: [
    NgFor,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './list-taches.component.html',
  styleUrl: './list-taches.component.scss'
})
export class ListTachesComponent implements OnInit{
taches : Taches[]=[];
courses: Course[] = [];
tache!: Taches;
 

  ngOnInit(): void {
    this.getTaches();
    // this.getCourses();
  }

  constructor(private fb: FormBuilder,
    private tachesService: TachesService,
    private courseService: CourseService,
    private router: Router
  ) { }

  getTaches(){
    
    this.tachesService.tachesList().subscribe((data: any) => {
      this.taches = data;
      console.log(this.taches)
    });
  }

  // getCourses(){
  //   this.courseService.courseList().subscribe((data: any) => {
  //     this.courses = data;
  //      console.log(this.courses);

  //   });
  // }

  goToTacheList() {
    this.router.navigateByUrl('admin/list-taches');
  }

  deleteTache(Id: number){
    this.tachesService.deleteTache(Id).subscribe(data => {
      console.log(data);
      this.goToTacheList();  
    
                           
    });
  }

}
