import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NsService {

  constructor() { }

  ///write some functions
  getMsg(){
    return "Welcome to Shivam techie";
  }
}
