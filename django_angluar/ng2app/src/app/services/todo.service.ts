import { Injectable } from "@angular/core";
import { Http, Headers } from '@angular/http';
import {Observable} from 'rxjs';  
//import 'rxjs/add/operator/toPromise';

import { Todo } from '../models/todo.model';


@Injectable()
export class TodoService {
  todo: Todo[] = [];
  private Url = `http://127.0.0.1:8000/api/todo/`
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(
    private http: Http
  ){}

  // 全てのtodoをGETする
  getAllTodo(): Promise<Todo[]> {
    return this.http
      .get(this.Url)
      .toPromise()
      .then(response => response.json() as Todo[])
      .catch(this.handleError)
  }

  private handleError(error: any): Promise<any> {
      console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
   }
}