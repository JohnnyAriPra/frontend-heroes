import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Actor } from '../interfaces/actor';

@Injectable({
  providedIn: 'root'
})
export class ActorService {
  private myappUrl: string;
  private myapiUrl: string;
  private myUrl: string;

  constructor(private http: HttpClient) { 
    this.myappUrl = environment.apiUrl;
    this.myapiUrl = 'actor/';
    this.myUrl = this.myappUrl + this.myapiUrl;
  }

  getActores(): Observable<Actor[]> {
    return this.http.get<Actor[]>(this.myUrl);
  }
  
  getActor(id: string): Observable<Actor>{
    return this.http.get<Actor>(this.myUrl + id);
  }

  createActor(actor: Actor): Observable<void>{
    return this.http.post<void>(this.myUrl, actor);
  }

  updateActor(id: string, actor: Actor): Observable<Actor>{
    return this.http.put<Actor>(this.myUrl + id, actor);
  }

  deleteActor(id: string): Observable<void>{
    return this.http.delete<void>(this.myUrl + id);
  }
  

}