import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserIdentifyService {
  constructor() {}

  getUserId() {
    if (localStorage.length == 0 || localStorage.getItem('userid') == 'no') {
      return '-1';
    } else {
      return localStorage.getItem('userType'), localStorage.getItem('userid');
    }
  }
}
