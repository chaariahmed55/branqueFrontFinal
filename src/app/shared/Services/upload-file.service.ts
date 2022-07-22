import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  readonly host = environment.baseurl;
  constructor(private httpClient: HttpClient) { }


  
}
