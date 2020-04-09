import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  blogTitle = 'My Blog';
  baseUrl = "http://localhost:4200/"

  constructor() { }
}
