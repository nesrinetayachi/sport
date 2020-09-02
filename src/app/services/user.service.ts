
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userUrl = 'api/users';

  constructor(
    private httpClient: HttpClient) { }


  getAllUsers() {
    return this.httpClient.get(this.userUrl);
  }
  getUserById(id: number) {
    return this.httpClient.get(`${this.userUrl}/${id}`);
  }
  deleteUsers(id: number) {
    return this.httpClient.delete(`${this.userUrl}/${id}`);
  }
  addUsers(user: any) {
    return this.httpClient.post(this.userUrl, user);
  }
  editUsers(user: any) {
    return this.httpClient.put(`${this.userUrl}/${user.id}`, user);
  }
}
