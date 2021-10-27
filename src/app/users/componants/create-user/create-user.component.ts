import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import {ActivatedRoute} from '@angular/router'


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styles: [`
  .userForm{
    display: flex;
    flex-direction: column;
  }
  .new-user-form{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center
  }
  [type="text"]{
    width: 600px;
    padding: 10px
  }
  .button{
    display: flex;
    justify-content: space-between;
    padding: 10px 0px 10px 0px;
  }
  button{
    padding: 10px 120px 10px 120px;
  }`
  ]
})
export class CreateUserComponent implements OnInit {

  newUserForm: any;
  id: any;
  singleUseData: any
  constructor(private _fb: FormBuilder, 
    private router: Router,
     private _userService: UsersService,
     private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id= this.route.snapshot.paramMap.get("id");
    this.getSingleUser();

    this.newUserForm = this._fb.group({
      name: [''],
      id: [''],
      profile: ['']
    })
    console.log(this.id);
    
  }
  patchFormVAlue(value: any){
    if(this.id){
      this.newUserForm.patchValue({
        id: this.id,
        name: this.singleUseData.name,
        profile: this.singleUseData.profile
      })
    }
  }
  getSingleUser(){
    this._userService.getSigleUser(this.id).subscribe((data)=>{
        this.singleUseData=data ;
        this.patchFormVAlue(this.singleUseData)
        console.log(this.singleUseData);
        
    })
  }
  save() {
    if(this.id){
      this._userService.eitUser(this.id, this.newUserForm.value).subscribe(()=>{
        this.router.navigate([""]);
      })
    }else{
      let min = 0;
      let max = 100
      this.newUserForm.value.id = Math.floor(Math.random() * (max - min + 1) + min);
      this._userService.creatUser(this.newUserForm.value).subscribe(() => {
        this.router.navigate([""]);
      })
    }
  }
  cancel() {
    this.router.navigate([""])
  }

}
