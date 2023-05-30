import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchdataService {

  constructor(private _http: HttpClient) { }
  
  searhhdata(searchWord: any){
    return this._http.get('https://api.dictionaryapi.dev/api/v2/entries/en/'+searchWord);  
  }
}
