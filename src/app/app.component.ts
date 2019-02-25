import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
import { User } from './user.model';
import { MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

/**
 * @title Table with selection  
 */

@Component({
  selector: 'user-table',
  styleUrls: ['app.component.css'],
  templateUrl: 'app.component.html',
})

export class UserTableComponent implements OnInit {
  public displayedColumns = ['select', 'name', 'email', 'phone', 'company'];
  public dataSource;
  //public dataSource = new MatTableDataSource<User>(this.userdata);
  public selection = new SelectionModel(true, []);
  constructor(public userService: UserService) {
    this.dataSource = new UserDataSource(this.userService);
  }
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.length;
    return numSelected === numRows;
  }
  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.forEach((row: any) => this.selection.select(row));
  }
  ngOnInit() { 
    this.userService.getUser().subscribe(result => {
      this.dataSource = result;
    })
  }
}

export class UserDataSource extends DataSource<any> {
  constructor(private userService: UserService) {
    super();
  }
  connect(): Observable<User[]> {
    return this.userService.getUser();
  }
  disconnect() { }
}
