import {Injectable} from '@angular/core'
import {Http, Headers} from '@angular/http'
import {Task} from "./task";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

@Injectable()
export class AppService {

  constructor(private http: Http){
  }

  getData(): Observable<any> {
    let jsonHeader = new Headers({
      'Content-Type':'application/json'
    });

    return this.http.get('http://localhost:9000/get/all', {headers: jsonHeader})
      .map(this.extractData)
      .catch(this.handleError);
  }


  addTask(task: Task): Observable<any> {
    let jsonHeader = new Headers({
      'Content-Type':'application/json'
    });

    return this.http.post('http://localhost:9000/add', task,
      {headers : jsonHeader})
      .map(data => {
        return this.extractData(data)
      })
      .catch(e => {
        return this.handleError(e)
      });
  }

  extractData(res: any){
    let body = res.json();
    return body;
  }

  private handleError(error: any) {
    let errMsg: string;
    try {
      if(JSON.parse(error._body).message) {
        errMsg = JSON.parse(error._body).message;
      } else {
        errMsg = 'Something went wrong. Please try again later.';
      }
    } catch(e){
      errMsg = 'Something went wrong. Please try again later.';
    }
    return Observable.throw(new Error(errMsg));
  }


}
