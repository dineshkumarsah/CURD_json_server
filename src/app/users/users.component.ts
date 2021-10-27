import { Component, OnInit } from '@angular/core';
import { user } from './models/user.model';
import { UsersService } from '../users/services/users.service'
import { Router} from '@angular/router'
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: any;
  constructor(private _usersService: UsersService, private _router: Router) { }

  ngOnInit(): void {
    this.getUser();

  }
  getUser() {
    this._usersService.getUser().subscribe((res) => {
      console.log(res);
      this.users = res
    })
  }
  createUser() {
    this._router.navigate(['/new-user']);
  }
  editUser(id: number){
   this._router.navigate([`/edit/${id}`])
  }

  delete(id: number){
    this._usersService.deleteUser(id).subscribe((res)=>{
     this.getUser();
      
    })
  }

}
