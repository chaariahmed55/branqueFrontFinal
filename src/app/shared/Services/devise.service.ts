import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Devise } from '../models/Devise';
@Injectable({
  providedIn: 'root'
})
export class DeviseService {
  readonly host = environment.baseurl;
  constructor(private httpclient: HttpClient) { }

  public filldevise(){
    this.httpclient.post(this.host+'/FillDeviseTable',null);
  }

  public getlistDevise():Observable<Devise[]>{
    return this.httpclient.get<Devise[]>(this.host+'/AllDevise');
  }

  public fillDevise(){
    return this.httpclient.post(this.host+'/FillDeviseTable',null);
  }


}
