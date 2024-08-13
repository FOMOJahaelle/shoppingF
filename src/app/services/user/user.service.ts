import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { User} from '../../models/user/user';
import { LoginRequest } from '../../models/longin/login-request';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private baseUrl: string;

  roles : any;
  username: any;
  accessToken ='auth-token';

  constructor( private httpClient: HttpClient,private router: Router) {

    this.baseUrl = "http://localhost:8080/api/users";
  }

  // auth = 'Bearer ' + sessionStorage.getItem('token');

  // onLogin(login: LoginRequest){
  //   let baseUrlGet = this.baseUrl+"/login";
  //   let params = new HttpParams()
  //   .set ("username",login.username).set("password",login.password);

  //   let options = { headers:new HttpHeaders()
  //     .set( "Content-Type ","application/x-www-form-urlencoded")
  //   }
   
  //   return this.httpClient.post(baseUrlGet, params,options);
  // }


   // Sign-in
   
   onLogin(login: LoginRequest) {
    let baseUrlGet = this.baseUrl+"/login";
    return this.httpClient
      .post<any>(baseUrlGet, login)
  }


  getToken() {
    return  sessionStorage.getItem('accessToken');
  }

  
   isLoggedIn(): boolean {
    let authToken = localStorage.getItem('token');
    return authToken !== null ? true : false;
  }

  
  // onLogin(username : string , password : string){
  //   let baseUrlGet = this.baseUrl+"/login";
  //   let params = new HttpParams()
  //   .set ("username",username).set("password",password);

  //   let options = { headers:new HttpHeaders()
  //     .set( "Content-Type ","application/x-www-form-urlencoded")
  //   }
   
  //   return this.httpClient.post(baseUrlGet, params,options);
  // }


  loadProfile(data: any) {
    //  this.isAuthenticated= true;
   this.accessToken = data['token'];
   let decodedJwt : any= Jwtdecode(this.accessToken);
   this.username = decodedJwt.sub;
   this.roles = decodedJwt.scope; 
   window.localStorage.setItem("jwt-token",this.accessToken);
  }



  onRegister(user: User){
    let baseUrlGet = this.baseUrl+"/create";
    return this.httpClient.post(baseUrlGet, user);
  }

  // getUserById(userId:number):Observable<User>{
  //   let baseUrlGet = this.baseUrl+"/get/" + userId;
  //  // console.log(baseUrlGet, {headers: {"Authorization": this.auth}});
  //   return this.httpClient.get<User>(baseUrlGet)
  // }

 
  getList(): Observable<Object>{
    // console.log(this.auth);
    let baseUrlGet = this.baseUrl+"/all";
    return this.httpClient.get(baseUrlGet);
  }


  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    // Logique de vérification de la validité du token
    return !!token;
  }


  

}
function Jwtdecode(accessToken: string): any {
  return accessToken
  // throw new Error('Function not implemented.');
}

