import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Course } from '../../models/course/course';
import { lastValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
   headers: HttpHeaders;
  token?: String;

  private readonly baseUrl: string = "http://localhost:8080/api/course";
  course: Course = new Course();


  constructor( private httpClient: HttpClient) {
    this.baseUrl ="http://localhost:8080/api/course";
    this.token = localStorage.getItem('token') || "";
    console.log('print token '+this.token);
   this.headers =  new HttpHeaders({ Authorization:'Bearer '+ this.token,
      'Content-Type': 'application/json; charset=uTF-8'
    })
  }

  createCourse(course: Course): Observable<Course>{
    let baseUrlGet = this.baseUrl+"/create";
    return this.httpClient.post<Course>(baseUrlGet,course,{headers: this.headers})
  }

  // ,{headers: this.headers}

  courseList(): Observable<Course[]>{
    let baseUrlGet = this.baseUrl+"/all";
    return this.httpClient.get<Course[]>(baseUrlGet,{headers: this.headers})
  }

  // async getCourseById(Id: number): Promise<Course>{
  //   let baseUrlGet = this.baseUrl +"/"+ Id;
  //   return await lastValueFrom (this.httpClient.get<Course>(baseUrlGet,{headers: this.headers}))
  // }
   getCourseById(Id: number): Observable<Course>{
    let baseUrlGet = this.baseUrl +"/"+ Id;
    return this.httpClient.get<Course>(baseUrlGet,{headers: this.headers})
  }

  updateCourse(course: Course,Id: number): Observable<Course>{
    let baseUrlGet = this.baseUrl +"/update/"+ Id;
    return this.httpClient.put<Course>(baseUrlGet,course,{headers: this.headers})
  }

  
  deleteCourse(Id: number): Observable<Course>{
    let baseUrlGet = this.baseUrl +"/"+ Id;
    return this.httpClient.delete<Course>( baseUrlGet,{headers: this.headers})
  
  }


}





