import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  userData: any = [
    {password: '123456', email: 'user@example.com', name: 'John Doe', role:'Teacher'},
    {password: '123456', email: 'user2@example.com', name: 'Jane Smith', role:'Secretary'},
    {password: '123456', email: 'user3@example.com', name: 'Bob Johnson', role:'Teacher'},
    {password: '123456', email: 'user4@example.com', name: 'Alice Williams', role:'Secretary'},
  ]
  constructor() { }
  getUserData() {
    return this.userData;
  }
  getUserByEmail(email: string) {
    return this.userData.find((user: { email: string; }) => user.email === email);
  }
}
