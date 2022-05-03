import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { ListService } from '../service/list.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  userList: User[] = [];
  editnum: number = 0;

  constructor(private listService: ListService, private router: Router) { }

  ngOnInit(): void {
    this.userList = this.listService.getUsers();
  }
  remove(id: number) {
    alert("Are you sure to remove details?");
    this.listService.removeUser(id);
    this.userList = this.listService.getUsers();
  }

}

