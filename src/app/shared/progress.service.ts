import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Progress } from '../models/progress';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {
  

  public totalProgress:Progress=new Progress(0,'',[]);
  public averageProgress:any[]=[];
  public averageProgressTotal:any[]=[];
  

  private url='https://api-rest-microcare.herokuapp.com/progreso';
 // private url='http://localhost:300/progreso';
  constructor(private http:HttpClient ) { }


  public getGroups(user_id:number,dateString:string){
    // Este post es un get, pero en formato post para proteger el id del usuario
    return this.http.post(`${this.url}/grupos`,{"user_id":user_id, "date":dateString});
  }


  public startProgress(progreso:any){
    return this.http.post(`${this.url}/start`,progreso);
  }


  public getProgress(user_id:number,dateString:string){
    return this.http.get(`${this.url}?user_id=${user_id}&date=${dateString}`);
  }

  public getAverageProgress(user_id:number){
    return this.http.get(`${this.url}/average?user_id=${user_id}`);
  }


  public updateProgress(progreso:Progress){
    return this.http.put(this.url,progreso);
  }

  
  public removeProgress(progreso:Progress){
    return this.http.put(this.url + '/remove',progreso);
  }

  
}
