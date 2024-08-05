import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { User} from '../../models/user/user';
import { LoginRequest } from '../../models/longin/login-request';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private baseUrl: string;
  
  isAuthenticated = false;
  roles : any;
  username: any;
  accessToken:any;
  stateItem: any;
  // token: string | null = null;

  constructor( private httpClient: HttpClient) {

    this.baseUrl = "http://localhost:8080/api/users";
  }

  // auth = 'Bearer ' + sessionStorage.getItem('token');


  onLogin(login: LoginRequest){
    let baseUrlGet = this.baseUrl+"/login";
    let params = new HttpParams()
    .set ("username",login.username).set("password",login.password);

    let options = { headers:new HttpHeaders()
      .set( "Content-Type ","application/x-www-form-urlencoded")
    }
   
    return this.httpClient.post(baseUrlGet, params,options);
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
     this.isAuthenticated= true;
   this.accessToken = data['access-token'];
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


  // GetToken() {
  //   const _auth = this.stateItem.getValue();
  //   // check if auth is still valid first before you return
  //   return this.CheckAuth(_auth) ? _auth.accessToken : null;
  // }
  // GetRefreshToken() {
  //   const _auth = this.stateItem.getValue();
  //   // check if auth is still valid first before you return
  //   return this.CheckAuth(_auth) ? _auth.refreshToken : null;
  // }
  

}
function Jwtdecode(accessToken: string): any {
  return accessToken
  // throw new Error('Function not implemented.');
}

