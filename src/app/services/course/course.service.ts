import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Course } from '../../models/course/course';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
   headers: HttpHeaders;
  token?: String;

  private baseUrl: string;
  course: Course = new Course();


  constructor( private httpClient: HttpClient) {
    this.baseUrl = "http://localhost:8080/api/course";
    this.token = localStorage.getItem('token') || "";
    console.log('print token '+this.token);
   this.headers =  new HttpHeaders({ Authorization:'Bearer '+ this.token,
      'Content-Type': 'application/json; charset=uTF-8'
    })
  }

//  header = new HttpHeaders().set( "Authorization", localStorage.getItem('token'));
  //  token = localStorage.getItem('token');

   auth = 'Bearer ' + localStorage.getItem('token');
    //  Authorization: `Bearer ${token}`

  createCourse(course: Course): Observable<Course>{
    let baseUrlGet = this.baseUrl+"/create";
    console.log(this.token);
    return this.httpClient.post<any>(baseUrlGet,course,{headers: this.headers})
  }

  // ,{headers: this.headers}

  courseList(): Observable<Course[]>{
    let baseUrlGet = this.baseUrl+"/all";
    return this.httpClient.get<Course[]>(baseUrlGet,{headers: this.headers})
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





