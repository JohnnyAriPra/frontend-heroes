import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PeliculaService {
  private myappUrl: string;
  private myapiUrl: string;
  private myUrl: string;

  constructor(private http: HttpClient) { 
    this.myappUrl = environment.apiUrl;
    this.myapiUrl = 'actor/';
    this.myUrl = this.myappUrl + this.myapiUrl;
  }


}
