import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../../models/course/course';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private baseUrl: string;
  course: Course = new Course();

  constructor( private httpClient: HttpClient) {
    this.baseUrl = "http://localhost:8080/api/course";
  }

  // auth = 'Bearer ' + sessionStorage.getItem('token');

  createCourse(course: Course){
    let baseUrlGet = this.baseUrl+"/create";
    return this.httpClient.post(baseUrlGet, course)
  }

  courseList(): Observable<Course[]>{
    let baseUrlGet = this.baseUrl+"/all";
    return this.httpClient.get<Course[]>(baseUrlGet)
  }

  getCourseById(Id: number): Observable<Course>{
    let baseUrlGet = this.baseUrl +"/"+ Id;
    //console.log(baseUrlGet, {headers: {"Authorization": this.auth}});
    return this.httpClient.get<Course>(baseUrlGet)
  }

  updateCourse(Id: number, course: Course): Observable<Object>{
    let baseUrlGet = this.baseUrl+"/update/" + Id;
    return this.httpClient.put(baseUrlGet, course)
  }


}





