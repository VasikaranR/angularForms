import { Injectable } from '@angular/core';
import { User} from '../user';
@Injectable({
  providedIn: 'root'
})
export class ListService {
  private userList: User[] = [{
    id: 1,
    name: 'Vasikaran ',
    email: 'vasichan2000@gmail.com',
    phone: '6383873641',
    topic:'angular'
}];
  constructor() { }
  getUsers(){
    return this.userList
  }
  setUser(user :User){
    user.id = this.userList.length+1;
    this.userList.push(user);

  }
  updateUser(user:User){
    const userIndex = this.userList.findIndex(x => x.id == user.id);
    this.userList[userIndex] = user;
  }
  removeUser(id: number) {
    this.userList = this.userList.filter(x => x.id != id);
}
getUsersByID(id: number) {
  return this.userList.find(x => x.id == id)
}
}
