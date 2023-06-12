import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  getData(key:string){
    return JSON.parse(localStorage.getItem(key)!);
  }
}
