import { Component, OnInit } from '@angular/core';
import { SearchdataService } from './searchdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'FreeDictionaryAPI';

  word = ""
  wordDisplay = ""
  wordDefination: object | any;
  constructor(private _http: SearchdataService) {

  }
  ngOnInit() {

  }
  searchWord() {
    this.wordDisplay = this.word
    this._http.searhhdata(this.word).subscribe(data => {
      this.wordDefination = data;
      // console.log(this.wordDefination)
      // console.log(this.wordDefination[0].meanings.definations.defination)
      this.cleartextbox()
    });
  }
  cleartextbox() {
    this.word = "";
  }
}
